'use client'

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useDebouncedCallback } from 'use-debounce';
import { motion as m } from 'framer-motion'

export default function Search(){
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const { replace } = useRouter()

    const handleSearch = useDebouncedCallback((term : string) => {
        const params = new URLSearchParams(searchParams)
        if (term) {
            params.set('q', term)
        } else {
            params.delete('q')
        }
        replace(`${pathName}?${params.toString()}`)
    }, 500)

    return <m.div className="flex bg-slate-800  w-full rounded-3xl px-4 py-1 border md:border-2 text-xs md:text-sm focus-within:border-sky-300" layout>
        <input placeholder="Search book by title..." type="text" onChange={(e) => handleSearch(e.target.value)} defaultValue={searchParams.get('q')?.toString()} className="focus:ring-0 focus:outline-none flex-1/2"/>
        <MagnifyingGlassIcon className="w-5"/>
    </m.div>
}