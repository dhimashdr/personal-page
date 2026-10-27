import "@/app/globals.css";
import NavLinks from "./ui/components/navlinks";
import Link from "next/link";

export default function NotFound(){
    return <div>
            <NavLinks />
            <div className="lg:pl-24 h-screen">
                <div className="flex flex-col gap-2 h-full items-center justify-center">
                    <div className="w-1/4 md:w-1/6 lg:w-1/8 aspect-square relative rounded-md overflow-clip">
                        <img src="/images/sorry.jpg" alt="sorry" className="object-cover"/>
                    </div>
                    <div className="text-lg font-semibold">Maaf, halaman yang Anda akses tidak ada.</div>
                    <br />
                    <Link className="font-semibold bg-foreground text-background py-1 px-4 rounded-md text-sm" href="/">Kembali ke Beranda</Link>
                </div>
            </div>
    </div>
}