'use client'

import bookData from "@/app/library/data/bookData.json";
import { ArrowUpRightIcon, Bars3Icon, TrashIcon } from "@heroicons/react/16/solid";
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { motion as m } from "framer-motion"

export default function Filter(){
    const filterParams = useSearchParams()
    const pathName = usePathname()
    const { replace } = useRouter()

    const handleFilter = (filter : Array<string>) => {
        const params = new URLSearchParams(filterParams)
        if (filter.length != 0) {
            params.set('g', filter.map(g => g.toString()).join(' '))
        } else {
            params.delete('g')
        }
        replace(`${pathName}?${params.toString()}`)
    }

    function collectingGenre(){
        let genreArray : Array<string> = []

        bookData.map(book => {
            book.genre.map(genre => {
                if (!genreArray.includes(genre)) {
                    genreArray.push(genre)
                }
            })
        })

        return genreArray
    }

    const genreArray = collectingGenre().sort()

    function inputFilter() {
        const checkboxes = document.querySelectorAll('input[name="genre"]:checked');
        const selectedGenre = Array.from(checkboxes).map(cb => (cb as HTMLInputElement).value);

        handleFilter(selectedGenre);
        document.getElementById("Genres")?.classList.toggle("hidden");
    }

    function clearFilter() {
        const checkboxes = document.querySelectorAll('input[name="genre"]:checked');
        checkboxes.forEach(cb => (cb as HTMLInputElement).checked = false);
        const params = new URLSearchParams(filterParams)
        params.delete('g')
        replace(`${pathName}?${params.toString()}`)
        document.getElementById("Genres")?.classList.toggle("hidden");
    }

    function showFilter(){
        document.getElementById("Genres")?.classList.toggle("hidden");
    }

    let genrePlaceholder = 'Genre'
    if (filterParams.get('g')) {
        genrePlaceholder = filterParams.get('g')?.toString().split(' ').map(g => g.charAt(0).toUpperCase() + g.slice(1)).join(', ') || 'Genre'
    }

    return <>
    <m.div className="text-xs md:text-sm relative" layout>
        <button onClick={showFilter} className="px-4 w-full bg-slate-700 text-left hover:bg-slate-800 rounded-full delay-50 transition-all py-1 text-slate-400 border md:border-2 border-foreground focus:border-sky-300">
            <div className="flex">
                <span className="flex-1/2 my-auto">{genrePlaceholder}</span>
                <Bars3Icon className="w-5 text-white"/>
            </div>
        </button>
        <div id="Genres" className="hidden absolute z-55 w-full">
            <form className="bg-slate-900 grid-cols-2 p-2 grid gap-1">
        {genreArray.map((g, i) => {
            return <label key={i}><input type="checkbox" name="genre" id="genre" value={g.toLowerCase()}/> {g} <span className="bg-slate-600 rounded-sm px-1">{`${bookData.filter(book => book.genre.includes(g)).length
            }`}</span></label>
        })}
        </form>
        <div className="w-full flex font-semibold">
            <label className="flex-1/2 bg-emerald-900 p-2 hover:bg-emerald-950 flex"><button type="button" onClick={inputFilter} className="flex-1/2 text-left">Tampilkan Pilihan</button> 
            <ArrowUpRightIcon className="w-5"/>
            </label>
            <label className="flex-1/2 bg-red-900 p-2 hover:bg-red-950 flex"><button type="button" onClick={clearFilter} className="flex-1/2 text-left">Hapus Pilihan</button>
            <TrashIcon className="w-5"/>
            </label>
        </div>
        </div>
    </m.div>
    </>
}