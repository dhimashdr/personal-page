'use client'

import { inter } from "@/app/ui/fonts";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface HeaderProps{
    title: string,
    desc: string
}

export default function Header({title, desc}: HeaderProps){
    const pathname = usePathname()

    return <div className={`w-full flex py-6 px-7 xl:px-10 items-center-safe backdrop-grayscale-50 backdrop-blur-sm border-b border-slate-900 ${pathname === '/' ? 'top-0 sticky z-60 left-0 bg-black/70' : 'bg-black/80'}`}>
        <div className={`sm:text-2xl text-xl font-bold ${inter.className} flex-1/2 `}>
        <Link href="/">Dim's </Link> {title === '' ? '' : '/'} <Link className="text-gray-500" href={`/${title.toLowerCase()}`}>{title}</Link>
        <div>
            <p className="text-[0.4rem] md:text-[0.625rem] font-light">{desc ?? ""}</p>
        </div>
        </div>
        <div className={`flex-1/2`}>
            <Image draggable='false' loading='eager' className="border-b-2 border-solid w-8 md:w-12 ml-auto rounded-sm" src="/images/sunf.jpg" alt="haroo" width={80} height={80} unoptimized></Image>
        </div>
    </div>
}
