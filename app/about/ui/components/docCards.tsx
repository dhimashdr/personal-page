'use client'

import Link from "next/link"
import { motion as m } from "framer-motion"
import { GrDocumentPdf } from "react-icons/gr"

interface DocCard{
    url: string,
    title: string
}

const MLink = m(Link)

export default function DocCards({url, title} : DocCard){
    return <MLink href={url} initial={{scale: 1}} className="bg-sky-900 w-fit p-2 rounded-sm font-semibold text-xs lg:text-sm flex items-center-safe gap-2" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} target="_blank">
        <GrDocumentPdf className="w-3 h-3 lg:w-6 lg:h-6"/><span>{title}</span>
    </MLink>
}