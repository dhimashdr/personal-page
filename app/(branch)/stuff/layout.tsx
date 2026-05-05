import "@/app/globals.css";
import { inter, bricolage_grotesque } from "@/app/ui/fonts";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://dhimashdr.vercel.app/stuff/machine-learning"),
  title: 'dhimashdr | Machine Learning',
  description: "You can find my ML study case here.",
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
        className={`${bricolage_grotesque.className} antialiased w-full`}
      >
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
