import Link from "next/link"
import { sanityFetch } from "@/sanity/lib/live"
import { urlFor } from "@/sanity/lib/image"

interface BookInfo{
    title: string,
    author: string,
    pages: number,
    cover: any,
    isbn: string
}

async function getOngoingBooks(){
    const QUERY = `*[_type == "books" && status == "Ongoing"]{title, author, pages, cover, isbn}`
    const {data : result} = await sanityFetch({query: QUERY})

    return result as Array<BookInfo>
}

export async function OngoingBooks(){
    const data = await getOngoingBooks()

    return data.map((e, i) => {
        return <OBCards book={e} key={i}/>
    })
}

export default function OBCards({book}: {book : BookInfo}){
    return <Link href={`/library/books/${book.isbn}`} className="w-full min-h-10 lg:min-h-20 flex gap-4 bg-linear-to-br from-gray-900 to-sky-950">
        <div className="w-10 lg:w-20 bg-cover bg-center" style={{backgroundImage: `url(${urlFor(book.cover).url()})`}}></div>
        <div className="flex items-center-safe gap-2">
            <h1 className="font-bold text-xs lg:text-xl">{book.title}</h1>
            <span>|</span>
            <p className="font-light text-sky-300 text-[0.5rem] lg:text-xs">{book.author}</p>
        </div>
    </Link>
}