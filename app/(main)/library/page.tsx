// import BooksData from "./data/bookData.json";
// import Cards from "./ui/components/cards";
// import Link from "next/link";
import Search from "./ui/components/search";
import Filter from "./ui/components/filter";
import BookPagination from "./ui/components/pagination";
import { sanityFetch } from "@/sanity/lib/live";
import { AllBooks, AllBooksSkeleton } from "./ui/components/books";
import { collectingGenre } from "./ui/components/books";
import { Suspense } from "react";

async function getTotalBooks(){
    const { data : result } = await sanityFetch({query: 'count(*[_type == "books"])'})

    return result as number
}

export default async function Home({searchParams} : {searchParams : Promise<{
    q?: string,
    g?: string,
    p?: string
}>}){
    const { q, g, p } = await searchParams
    // const FilteredBooksData = BooksData.sort(((a, b) => a.title.localeCompare(b.title))
    //         ).filter((book) => 
    //     {
    //         let matchSearch = true
    //         if (q) {
    //             matchSearch = book.title.toLowerCase().includes(q.toLowerCase())
    //         }
    //         let matchFilter = true
    //         if (g) {
    //             matchFilter = g?.split(" ").every(fil => book.genre.some(cat => cat.toLowerCase() === fil.toLowerCase()))
    //         }
    //         return matchSearch && matchFilter
    //     }
    // )
    const genre = g ? g?.split(" ") : []
    const search = q ? q?.toLowerCase() : ''
    const filter = `title match "*${search}*" && count(genres[lower(@) in [${genre.map((e) => `"${e}"`)}]]) == count(${`[${genre.map((e) => `"${e}"`)}]`})`

    const itemsPerPage = 6;
    const currentPage = Number(p) || 1;
    const totalBooks = await getTotalBooks()
    const totalPages = Math.ceil(totalBooks/itemsPerPage)
    const genreArray = await collectingGenre()
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    // const endIndex = startIndex + itemsPerPage;
    // const paginatedBooks = FilteredBooksData.slice(startIndex, endIndex);

    // let notFound = ''
    // if(FilteredBooksData.length === 0){
    //     notFound = 'Not Found'
    // }

    return <div className="w-full mt-5 min-h-50vh">
    <div className="px-6 md:px-10 mx-auto">
        <div className="flex w-full gap-2 mb-6 flex-col md:flex-row md:justify-between">
            <div className="flex-7/12">
                <Search/>
            </div>
            <div className="flex-5/12">
                <Filter genreArray={genreArray}/>
            </div>
        </div>
        <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            <Suspense fallback={<AllBooksSkeleton/>}>
                <AllBooks start={startIndex} filter={filter}/>
            </Suspense>
        </div>
    </div>
    {totalPages > 1 && (<BookPagination currentPage={currentPage} totalPages={totalPages}/>)}
    <br />
    <hr />
    </div>
}