import BooksData from "@/app/library/data/bookData.json";
import Cards from "./ui/components/cards";
import Link from "next/link";
import Search from "./ui/components/search";
import Filter from "./ui/components/filter";
import BookPagination from "./ui/components/pagination";

export default async function Home({searchParams} : {searchParams : Promise<{
    q?: string,
    g?: string,
    p?: string
}>}){
    const { q, g, p } = await searchParams
    const FilteredBooksData = BooksData.sort(((a, b) => a.title.localeCompare(b.title))
            ).filter((book) => 
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

    const itemsPerPage = 6;
    const currentPage = Number(p) || 1;
    const totalPages = Math.ceil(FilteredBooksData.length / itemsPerPage);
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedBooks = FilteredBooksData.slice(startIndex, endIndex);

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
        <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {paginatedBooks.map((book, index) => (
                        <Link href={`/library/books/${book.isbn}`} key={index}>
                            <Cards buku={book} />
                        </Link>
                    ))}
        </div>
        <div>{notFound}</div>
    </div>
    {totalPages > 1 && (<BookPagination currentPage={currentPage} totalPages={totalPages}/>)}
    </div>
}