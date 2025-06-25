import type { Metadata } from "next";
import { Inter, Cairo, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio - مطور ومصمم مواقع ويب",
  description: "موقع شخصي لعرض الأعمال والمشاريع والخدمات التقنية",
  keywords: "تطوير مواقع, تصميم ويب, برمجة, React, Next.js",
  authors: [{ name: "Portfolio Developer" }],
  robots: "index, follow",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cairo.variable} ${poppins.variable} font-cairo antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500`}
      >
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-16 lg:pt-20">
              {children}
            </main>
            <Footer />
            <BackToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
