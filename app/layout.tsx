import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monoline — Digital Design Agency",
  description: "We are a full service digital company creating amazing digital products.",
  keywords: "design agency, web development, branding, digital marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
