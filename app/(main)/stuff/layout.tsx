import Header from "@/app/ui/components/header"
import Footer from "@/app/ui/components/footer"

import type { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://dhimashdr.vercel.app"),
  title: 'dhimashdr | stuff',
  description: "things I've made so far",
  openGraph: {
    images: ['/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="lg:pl-16 w-full">
    <div className="sticky top-0 z-60">
      <Header title="Stuff" desc="things I've made so far"/>
    </div>
    {children}
    <Footer/>
    <div className="h-12 lg:h-0"></div>
  </div>
}