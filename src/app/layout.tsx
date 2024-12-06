import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/organisme/header";
import { bellefair, gabarito } from '@/themes/fonts'
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lawfirm">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

       {/* <style jsx global>{`
          html {
            font-family: ${gabarito.style.fontFamily};
          }
          
          h1 {
            font-family:  ${bellefair.style.fontFamily};
          }
        `}</style> */}
        <body
        className={`${bellefair.className} ${gabarito.className} antialiased`}
      >
        <Header />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
