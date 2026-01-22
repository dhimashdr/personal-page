import Header from "@/app/ui/components/header"
import Footer from "@/app/ui/components/footer"

import type { Metadata } from "next";;

export const metadata: Metadata = {
  metadataBase: new URL("https://dhimashdr.vercel.app"),
  title: 'dhimashdr | blog',
  description: "some of my writings",
  openGraph: {
    images: ['/og-image.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="lg:pl-16 w-full">
    <div className="sticky top-0 z-60">
      <Header title="Blog" desc="some of my writings"/>
    </div>
    {children}
    <Footer/>
    <div className="h-12 lg:h-0"></div>
  </div>
}