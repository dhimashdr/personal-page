import "@/app/globals.css";
import { inter, google_sans } from "@/app/ui/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://dhimashdr.vercel.app/stuff/machine-learning"),
  title: 'Titanic Survival Predictor',
  description: "Model to predict either you will survive or not in Titanic sinking.",
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
      <body className={`${google_sans.className} antialiased w-full`}>
        {children}
      </body>
    </html>
  );
}