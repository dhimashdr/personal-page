'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"
import { HomeIcon as HomeOutline, BookOpenIcon as LibraryOutline, Square3Stack3DIcon as StuffOutline, NewspaperIcon as BlogOutline, UserIcon as AboutOutline } from "@heroicons/react/24/outline"
import { HomeIcon as HomeSolid, BookOpenIcon as LibrarySolid, Square3Stack3DIcon as StuffSolid, NewspaperIcon as BlogSolid, UserIcon as AboutSolid } from "@heroicons/react/24/solid"
import { motion as m } from "framer-motion"

const navs = [
    {
        "title": "Home",
        "url": "/",
        "outline": HomeOutline,
        "solid": HomeSolid
    },
    {
        "title": "Library",
        "url": "/library",
        "outline": LibraryOutline,
        "solid": LibrarySolid
    },
    {
        "title": "Stuff",
        "url": "/stuff",
        "outline": StuffOutline,
        "solid": StuffSolid
    },
    {
        "title": "Blog",
        "url": "/blog",
        "outline": BlogOutline,
        "solid": BlogSolid
    },
    {
        "title": "About",
        "url": "/about",
        "outline": AboutOutline,
        "solid": AboutSolid
    }
]

const MLink = m.create(Link)

export default function NavLinks(){
    const pathname = usePathname()

    return <div className="mx-auto w-full py-4 px-8 md:px-24 lg:w-24 grid grid-cols-5 lg:grid-cols-1 fixed lg:gap-6 bottom-0 lg:top-0 lg:p-0 lg:py-40 z-50 bg-black/70 backdrop-blur-md lg:bg-black border-slate-900 border-t lg:border-t-0 lg:border-r">
        {navs.map(nav => {
            const NavOutline = nav.outline
            const NavSolid = nav.solid

            return <MLink initial={{scale: 1}} whileTap={{scale: 0.9}} transition={{ease: 'easeOut', duration: 0.1}} href={nav.url} key={nav.title} className={`transition-all duration-200 ease-in rounded-sm my-auto mx-auto group flex flex-col`}>
                    {pathname.includes(nav.url) && (nav.url !== "/" || pathname === "/")? <div className="flex flex-col items-center gap-1">
                        <div className='px-2 py-0.5 rounded-sm transition-all bg-sky-800/50 hover:bg-sky-800/60'>
                            <NavSolid className="size-6 text-sky-200 hover:scale-105 transition-all"/>
                        </div>
                        <p className="text-[0.5rem] text-sky-300 font-semibold">{nav.title}</p>
                    </div>  : <div className="flex flex-col items-center gap-1">
                        <div className='px-2 py-0.5 rounded-sm hover:bg-white/10 transition-all'>
                            <NavOutline className="size-6 hover:scale-105 transition-all"/>
                        </div>
                        <p className="text-[0.5rem] font-semibold">{nav.title}</p>
                    </div>}
            </MLink>
        })}
    </div>
}

// ${pathname.includes(nav.url) && (nav.url !== "/" || pathname === "/") ? 'bg-blue-500/30' : 'bg-none'}