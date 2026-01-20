import type { Metadata } from "next";
import "./globals.css";
import NavLinks from "./ui/components/navlinks";
import { inter, italianno, ibm_plex_sans } from "@/app/ui/fonts";

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
