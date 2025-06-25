import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { name, email, subject, message, phone, company } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'جميع الحقول المطلوبة يجب ملؤها' },
        { status: 400 }
      );
    }

    // Save to database
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
      phone,
      company,
      status: 'new'
    });

    // Send email notification (optional)
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Email to admin
      const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: `رسالة جديدة من الموقع: ${subject}`,
        html: `
          <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">رسالة جديدة من موقعك الشخصي</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>الاسم:</strong> ${name}</p>
              <p><strong>البريد الإلكتروني:</strong> ${email}</p>
              ${phone ? `<p><strong>رقم الهاتف:</strong> ${phone}</p>` : ''}
              ${company ? `<p><strong>الشركة:</strong> ${company}</p>` : ''}
              <p><strong>الموضوع:</strong> ${subject}</p>
            </div>
            <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="color: #1e293b; margin-top: 0;">الرسالة:</h3>
              <p style="line-height: 1.6; color: #475569;">${message}</p>
            </div>
            <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 8px;">
              <p style="margin: 0; color: #1e40af; font-size: 14px;">
                تم إرسال هذه الرسالة من نموذج التواصل في موقعك الشخصي
              </p>
            </div>
          </div>
        `,
      };

      // Auto-reply to sender
      const autoReplyOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'شكراً لتواصلك معي - تم استلام رسالتك',
        html: `
          <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">مرحباً ${name}،</h2>
            <p style="line-height: 1.6; color: #475569;">
              شكراً لك على تواصلك معي. تم استلام رسالتك بنجاح وسأقوم بالرد عليك في أقرب وقت ممكن.
            </p>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e293b; margin-top: 0;">ملخص رسالتك:</h3>
              <p><strong>الموضوع:</strong> ${subject}</p>
              <p><strong>الرسالة:</strong> ${message}</p>
            </div>
            <p style="line-height: 1.6; color: #475569;">
              إذا كانت رسالتك عاجلة، يمكنك التواصل معي مباشرة عبر الهاتف أو وسائل التواصل الاجتماعي.
            </p>
            <div style="margin-top: 30px; padding: 20px; background: #dbeafe; border-radius: 8px; text-align: center;">
              <p style="margin: 0; color: #1e40af; font-weight: bold;">
                أتطلع للعمل معك قريباً!
              </p>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(autoReplyOptions);
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'تم إرسال رسالتك بنجاح! سأقوم بالرد عليك قريباً.',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        subject: contact.subject
      }
    }, { status: 201 });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { success: false, error: 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '10');

    let query: any = {};
    if (status) {
      query.status = status;
    }

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();

    return NextResponse.json({
      success: true,
      data: contacts
    });

  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}
