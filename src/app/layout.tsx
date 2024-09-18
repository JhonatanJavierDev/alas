import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ALAS Surinam",
  description:
    "Asociación que apoya a la comunidad latina en Surinam con noticias, empleo y asesoramiento legal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistMono.variable} antialiased bg-gray-100`}>
        <Header />
        <main className="min-h-screen flex items-center justify-center bg-white shadow-lg rounded-lg p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
