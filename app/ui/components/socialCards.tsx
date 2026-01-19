'use client'

import { motion as m } from "motion/react"
import { Icon } from "@iconify/react"
import Link from "next/link"

interface SocialInfo{
    id: string,
    url: string,
    theme: string
}

interface Social{
    social: SocialInfo
}

const MLink = m(Link)

export default function SocialCards({social} : Social){
    return <MLink className="flex gap-2 lg:px-4 lg:py-2 px-2 py-1 rounded-sm overflow-hidden mx-auto items-center-safe" style={{backgroundColor: `${social.theme}`}} href={social.url} target="_blank" initial={{scale: 1}} whileTap={{scale: 0.95}} whileHover={{scale: 1.05}}>
        <Icon icon={`lucide:${social.id.toLowerCase()}`} className="w-3 h-3 lg:w-6 lg:h-6"/>
        <p className="font-semibold text-xs lg:text-sm">{social.id}</p>
    </MLink>
}