import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavLinks from "./ui/components/navlinks";
import { inter, italianno, ibm_plex_sans } from "@/app/ui/fonts";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "dhimashdr's personal page",
  description: "Hola amigos! nice to meet you!!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased w-full`}
      >
        <div>
          <NavLinks />
          {children}
        </div>
      </body>
    </html>
  );
}
