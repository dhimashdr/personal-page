import Header from "@/app/ui/components/header"
import Footer from "@/app/ui/components/footer"

import type { Metadata } from "next";;

export const metadata: Metadata = {
  title: "dhimashdr | about",
  description: "some of books that I've read",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="lg:pl-16 w-full">
    <div className="sticky top-0 z-60">
      <Header title="About" desc="find out more about me :D"/>
    </div>
    {children}
    <Footer/>
    <div className="h-12 lg:h-0"></div>
  </div>
}