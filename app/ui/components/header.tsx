'use client'

import { inter } from "@/app/ui/fonts";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps{
    title: string,
    desc: string
}

export default function Header({title, desc}: HeaderProps){
    return <div className="w-full flex py-2 xl:py-4 px-6 xl:px-10 items-center-safe bg-black/80 backdrop-grayscale-50 backdrop-blur-xl">
        <div className={`sm:text-2xl text-xl font-bold ${inter.className} flex-1/2 `}>
        <Link href="/">Dim's </Link> {title === '' ? '' : '/'} <Link className="text-gray-500" href={`/${title.toLowerCase()}`}>{title}</Link>
        <div>
            <p className="text-[0.4rem] md:text-[0.625rem] font-light">{desc ?? ""}</p>
        </div>
        </div>
        <div className={`flex-1/2 flex flex-row-reverse`}>
            <Image className="border-b-2 border-solid border-white scale-60 md:scale-80" src="/images/bocchi-vibing-lonely.gif" alt="haroo" width={100} height={100} unoptimized></Image>
        </div>
    </div>
}
