import "@/app/globals.css";
import NavLinks from "../ui/components/navlinks";
import { inter } from "@/app/ui/fonts";
import { SanityLive } from "@/sanity/lib/live";

import type { Metadata } from "next";
import { draftMode } from "next/headers";

export const metadata: Metadata = {
  metadataBase: new URL("https://dhimashdr.vercel.app"),
  title: 'dhimashdr personal page',
  description: "Hello, fellows! Nice to meet you!",
  openGraph: {
    images: ['/og-image.jpg'],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const draft = await draftMode();
  const isEnabled = draft.isEnabled;

  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased w-full`}
      >
        <div>
          <NavLinks />
          <div className="lg:pl-24">
            {children}
            {isEnabled && <SanityLive />}
        {isEnabled && (
          <div className="fixed bottom-0 right-0 z-50 bg-red-500 text-white p-2 text-sm">
            Draft Mode Active
            <a href="/api/disable-draft" className="ml-2 underline font-bold">Disable</a>
          </div>
        )}
          </div>
        </div>
      </body>
    </html>
  );
}
