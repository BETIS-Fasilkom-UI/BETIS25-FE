import type { Metadata } from "next";
import "./globals.css";
import { Layout } from "@/components/layout";
import { Cinzel, Raleway, Open_Sans, Playfair_Display } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

const openSans = Open_Sans({
  weight: "400",
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
  weight: ["400", "500", "600"],
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  weight: "900",
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "BETIS 2025",
  description: "DROG is my life and savior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        suppressContentEditableWarning
        suppressHydrationWarning
        className={` ${raleway.variable} ${cinzel.variable} ${openSans.variable} ${playfair.variable} antialiased`}
      >
        <NextTopLoader showSpinner={false} color="#c5599e" shadow={false} />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
