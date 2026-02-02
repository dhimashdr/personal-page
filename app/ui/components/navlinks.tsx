'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"
import { HomeIcon as HomeOutline, BookOpenIcon as LibraryOutline, Square3Stack3DIcon as StuffOutline, NewspaperIcon as BlogOutline, UserIcon as AboutOutline } from "@heroicons/react/24/outline"
import { HomeIcon as HomeSolid, BookOpenIcon as LibrarySolid, Square3Stack3DIcon as StuffSolid, NewspaperIcon as BlogSolid, UserIcon as AboutSolid } from "@heroicons/react/24/solid"

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

export default function NavLinks(){
    const pathname = usePathname()

    return <div className="mx-auto w-full py-4 px-8 md:px-28 lg:w-16 grid grid-cols-5 lg:grid-cols-1 fixed lg:gap-6 bottom-0 lg:top-0 lg:p-0 lg:py-40 z-50 bg-black/70 backdrop-blur-md lg:bg-black">
        {navs.map(nav => {
            const NavOutline = nav.outline
            const NavSolid = nav.solid

            return <Link href={nav.url} key={nav.title} className={`${pathname.includes(nav.url) && (nav.url !== "/" || pathname === "/") ? 'bg-blue-500/30' : 'bg-none'} px-2 transition-all duration-200 hover:bg-blue-500/30 ease-in rounded-sm my-auto mx-auto`}>
                    {pathname.includes(nav.url) && (nav.url !== "/" || pathname === "/")? <NavSolid className="size-6"/>  : <NavOutline className="size-6"/>}
            </Link>
        })}
    </div>
}