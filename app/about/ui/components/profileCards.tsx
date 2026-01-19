'use client'

import Image from "next/image"
import { motion as m } from "framer-motion"

export default function ProfileCards(){
    return <div className="grid grid-cols-2">
        <div className="m-auto">
            <p className="whitespace-pre text-gray-500 font-light text-[0.625rem] md:text-sm lg:text-lg">Name&#9;&#9;: <span className="text-white font-medium">Dimas Hendrico</span></p>
            <p className="whitespace-pre text-gray-500 font-light text-[0.625rem] md:text-sm lg:text-lg">Email&#9;&#9;: <span className="text-white font-medium">dhimashdr@gmail.com</span></p>
            <p className="whitespace-pre text-gray-500 font-light text-[0.625rem] md:text-sm lg:text-lg">Domicile&#9;: <span className="text-white font-medium">Boyolali Regency, Central Java, Indonesia</span></p>
            <p className="whitespace-pre text-gray-500 font-light text-[0.625rem] md:text-sm lg:text-lg">Status&#9;&#9;: <span className="text-white font-medium">🥲🥱</span></p>
        </div>
        <div className="my-auto ml-auto md:mx-auto">
            <div className="w-24 h-36 lg:w-48 lg:h-72 relative bg-linear-to-t from-gray-500/20 to-50% to-transparent">
                <Image src={'/images/about/me.png'} alt="pfp" fill className="relative z-30"/>
                <m.div className="absolute w-4 h-4 lg:w-10 lg:h-10 top-1/2 left-3/5"
                animate={{backgroundColor: ["#6AECE1", "#26CCC2", "#FFF57E", "#6AECE1"]}}
                transition={{duration: 4, repeat: Infinity, ease: "easeInOut"}}
                ></m.div>
                <m.div className="absolute w-3 h-3 lg:w-5 lg:h-5 top-1/3 left-1/5"
                animate={{backgroundColor: ["#FEEE91", "#FFA239", "#FF5656", "#FEEE91"]}}
                transition={{duration: 5, repeat: Infinity, ease: "easeInOut"}}></m.div>
                <m.div className="absolute w-6 h-6 lg:w-12 lg:h-12 top-3/4 left-1/6"
                animate={{backgroundColor: ["#78C841", "#B4E50D", "#FF9B2F", "#FB4141", "#78C841"]}}
                transition={{duration: 6, repeat: Infinity, ease: "easeInOut"}}></m.div>
            </div>
        </div>
    </div>
}