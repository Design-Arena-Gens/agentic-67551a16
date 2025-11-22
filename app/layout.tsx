import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "PolyglotAI - تعلم أي لغة بالذكاء الاصطناعي",
  description: "منصة تعليم اللغات المدعومة بالذكاء الاصطناعي مع دروس تفاعلية وألعاب ممتعة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
