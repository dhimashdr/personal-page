import { sanityFetch } from "@/sanity/lib/live";
import { BookCard } from "./cards";
import Link from "next/link";

interface BookData{
    title: string,
    cover: any,
    author: string,
    blurb: string,
    isbn: string,
    pages: number,
    quote: string,
    rate: number,
    genres: Array<string>,
    review: any,
    status: string
}


async function getBooks(start : number, filter: string){
    const QUERY = `*[_type == "books" && ${filter}] | order(title asc) [${start}...${start+6}] {
                            title,
                            cover,
                            author,
                            blurb,
                            isbn,
                            pages,
                            quote,
                            rate,
                            genres,
                            review,
                            status
                        }`
    const { data : result } = await sanityFetch({query: QUERY})

    return result as Array<BookData>
}

export async function AllBooks({start, filter}: {start : number, filter: string}){
    const data = await getBooks(start, filter)
    if(data.length == 0){
        return <div>not found</div>
    }

    return (
        data.map((e, i) => {
            return <Link href={`/library/books/${e.isbn}`} key={i}>
                <BookCard buku={e} key={i}/>
            </Link>
        })
    )
}

export function AllBooksSkeleton(){
    return (
        [...Array(6)].map((e, i) => {
            return <div className="w-full h-40 md:h-48 bg-gray-900 animate-pulse rounded-lg" key={i}></div>
        })
    )
}

export async function collectingGenre(){
    const QUERY = `array::unique(*[_type == "books" && defined(genres)].genres[])`
    const {data : genre} = await sanityFetch({query: QUERY})

    return genre as Array<string>
}
