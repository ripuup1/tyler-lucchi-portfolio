import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tyler Lucchi — Builder, Founder, Developer",
  description:
    "Personal portfolio of Tyler Lucchi — Founder & CEO of LuminArch Digital Agency, Economics student at UNC Wilmington, and builder of businesses, websites, and systems.",
  openGraph: {
    title: "Tyler Lucchi — Builder, Founder, Developer",
    description:
      "Founder & CEO of LuminArch Digital Agency. Economics & Pre-Law at UNCW. Building the future one project at a time.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyler Lucchi — Builder, Founder, Developer",
    description: "Founder & CEO of LuminArch Digital Agency. Economics & Pre-Law at UNCW.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-bg-primary text-text-body antialiased">
        {children}
      </body>
    </html>
  );
}
