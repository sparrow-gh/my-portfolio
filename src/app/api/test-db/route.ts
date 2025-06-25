import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

export async function GET(request: NextRequest) {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    
    if (!MONGODB_URI) {
      return NextResponse.json({
        success: false,
        error: 'MONGODB_URI not found in environment variables'
      }, { status: 500 });
    }

    console.log('Attempting to connect to:', MONGODB_URI.replace(/\/\/.*:.*@/, '//***:***@'));

    // Test connection
    await mongoose.connect(MONGODB_URI);
    
    // Test a simple operation
    const admin = mongoose.connection.db.admin();
    const result = await admin.ping();
    
    await mongoose.disconnect();

    return NextResponse.json({
      success: true,
      message: 'Database connection successful!',
      ping: result
    });

  } catch (error: any) {
    console.error('Database connection error:', error);
    
    return NextResponse.json({
      success: false,
      error: error.message || 'Database connection failed',
      details: {
        name: error.name,
        code: error.code,
        codeName: error.codeName
      }
    }, { status: 500 });
  }
}
