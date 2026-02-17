import Image from "next/image";
import { inter } from "@/app/ui/fonts";
import { StarIcon } from "@heroicons/react/16/solid";
import Status from "./status";

interface BooksInfo{
    title: string,
    cover: string,
    author: string,
    blurb: string,
    pages: number,
    genre: Array<string>,
    types: string,
    rate: number,
    isbn: string,
    status: string
}

interface Books{
    buku: BooksInfo
};

export default async function Cards({buku} : Books){
    return <div className="bg-linear-to-b from-red-950/40 to-cyan-950/40 flex rounded-sm md:rounded-md h-42 md:h-54 items-center-safe">
        <div className="flex-1/3 relative h-full w-full">
        <Status status={buku?.status}/>
            <Image alt={buku?.title ?? "notfound"} src={buku?.cover} fill className="rounded-r-sm rounded-bl-sm lg:rounded-r-md lg:rounded-bl-md w-fit object-cover object-center"></Image>
        </div>
        <div className={`${inter.className} mx-auto p-4 w-1/2 flex-2/3`}>
            <p className="font-black text-sm md:text-[1rem] leading-5">{buku?.title}</p>
            <p className="text-[0.5rem] md:text-[0.65rem] mb-2 md:mb-4 mt-1"><span className="text-red-200">{buku?.author}</span> | <span className="text-blue-200">{buku?.pages} hlm</span></p>
            <p className="text-[0.5rem] md:text-[0.65rem] mb-2 md:mb-4">{buku?.blurb}</p>
            <div className="flex items-end-safe">
                <div className="flex gap-1 flex-wrap flex-2/3 text-[0.5rem] md:text-[0.65rem] pb-1">
                    {buku?.genre.map((g, i) => {
                    return <div key={i} className="bg-slate-600 w-fit p-1 rounded-sm font-medium">{g}</div>
                    })}
                </div>
                <div className="flex-1/3 text-sm h-fit">
                    <p className="text-right text-[0.5rem] md:text-xs"><span className="font-bold text-xs md:text-lg">{buku?.rate === 0 ? "-" : buku?.rate}</span>/5
                    <StarIcon className="text-yellow-500 w-2 lg:w-5 align-text-bottom inline-block"/>
                    </p>
                </div>
            </div>
        </div>
    </div>
}