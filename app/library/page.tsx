import BooksData from "@/app/library/data/bookData.json";
import Cards from "./ui/components/cards";
import Link from "next/link";
import Search from "./ui/components/search";
import Filter from "./ui/components/filter";

export default async function Home({searchParams} : {searchParams : Promise<{
    q: string,
    g: string
}>}){
    const { q, g } = await searchParams
    const FilteredBooksData = BooksData.filter((book) => 
        {
            let matchSearch = true
            if (q) {
                matchSearch = book.title.toLowerCase().includes(q.toLowerCase())
            }
            let matchFilter = true
            if (g) {
                matchFilter = g?.split(" ").every(fil => book.genre.some(cat => cat.toLowerCase() === fil.toLowerCase()))
            }
            return matchSearch && matchFilter
        }
    )

    let notFound = ''
    if(FilteredBooksData.length === 0){
        notFound = 'Not Found'
    }

    return <div className="w-full mt-5">
    <div className="px-6 md:px-10 mx-auto">
        <div className="flex w-full gap-2 mb-6 flex-col md:flex-row md:justify-between">
            <div className="flex-7/12">
                <Search/>
            </div>
            <div className="flex-5/12">
                <Filter/>
            </div>
        </div>
        <div className="mx-auto w-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {FilteredBooksData.sort(((a, b) => a.title.localeCompare(b.title))
            ).map((book, index) => {
            return <Link href={`/library/books/${book.isbn}`} key={index}><Cards buku={book}/></Link>
            })}
        </div>
        <div>{notFound}</div>
    </div>
    </div>
}

// <div className="w-fit mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"></div>