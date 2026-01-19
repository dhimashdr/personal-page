import Link from "next/link"

interface BookInfo{
    title: string,
    author: string,
    pages: number,
    cover: string,
    isbn: string
}

interface Book{
    book: BookInfo
}

export default function OBCards({book}: Book){
    return <Link href={`/library/books/${book.isbn}`} className="w-full min-h-10 lg:min-h-20 flex gap-4 bg-linear-to-br from-gray-900 to-sky-950">
        <div className="w-10 lg:w-20 bg-cover bg-center" style={{backgroundImage: `url(${book.cover})`}}></div>
        <div className="flex items-center-safe gap-2">
            <h1 className="font-bold text-xs lg:text-xl">{book.title}</h1>
            <span>|</span>
            <p className="font-light text-sky-300 text-[0.5rem] lg:text-xs">{book.author}</p>
        </div>
    </Link>
}