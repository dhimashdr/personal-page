import "./globals.css";
import NavLinks from "./ui/components/navlinks";
import { inter, italianno, ibm_plex_sans } from "@/app/ui/fonts";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://dhimashdr.vercel.app"),
  title: 'dhimashdr personal page',
  description: "Hello, fellows! Nice to meet you!",
  openGraph: {
    images: ['/og-image.jpg'],
  },
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
