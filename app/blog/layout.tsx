import Header from "@/app/ui/components/header"
import Footer from "@/app/ui/components/footer"

import type { Metadata } from "next";;

export const metadata: Metadata = {
  title: 'dhimashdr | blog',
  description: "some of books that I've read",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="lg:pl-16 w-full">
    <div className="sticky top-0 z-60">
      <Header title="Blog" desc="well, in case you're interested to read some of my writings"/>
    </div>
    {children}
    <Footer/>
    <div className="h-10 lg:h-0"></div>
  </div>
}