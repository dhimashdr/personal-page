import dataBuku from "../../data/bookData.json";
import { MDXRemote } from "next-mdx-remote/rsc";
import { inter } from "@/app/ui/fonts";
import Cards from "@/app/(main)/library/ui/components/cards";
import NotFound from "@/app/not-found";
import { Metadata } from 'next';
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { BookCard } from "@/app/(main)/library/ui/components/cards";
import { PortableText } from "next-sanity";

interface PageProps {
  params: Promise<{ id: string }>
}

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

const mdxComponents = {
    Rating: ({value}: { value: number  }) => <div className="text-yellow-500">{"★".repeat(value)}</div>,
    TextRed: ({text}: {text : string}) => <p className="text-red-500">{text}</p>
}

async function getBook(isbn: string){
    const QUERY = `*[_type == 'books' && isbn == "${isbn}"]{title,
                            cover,
                            author,
                            blurb,
                            isbn,
                            pages,
                            quote,
                            rate,
                            genres,
                            review,
                            status}`
    const {data : result} = await sanityFetch({query: QUERY})

    return result as Array<BookData>
}

export async function generateMetadata({params} : PageProps) : Promise<Metadata>{
    const { id } = await params
    const book = dataBuku.find((book) => book.isbn === id)

    return {
        metadataBase: new URL("https://dhimashdr.vercel.app"),
        title: book?.title ?? "Not Found",
        description: book?.blurb ?? "Not Found",
        openGraph: {
            images: [book?.cover ?? "/og-image.jpg"],
        },
    }
}

export default async function DetailBuku({ params }: PageProps){
    const { id } = await params
    const book = await getBook(id)
    // const book = dataBuku.find((book) => book.isbn === id)
    
    return <>
    {book ?
        <div className="w-full">
            <section className="bg-cover bg-no-repeat bg-center relative" style={{backgroundImage: `url(${urlFor(book[0].cover).url()})`
            }}>
                <div className={`bg-linear-to-t from-background to-background/50 backdrop-blur-sm w-full px-6 lg:px-18 py-8 border-b-2 ${book[0].status == 'Finished' ? 'border-green-600' : (book[0].status == 'DNF' ? 'border-red-600' : 'border-orange-400')}`}>
                    {/* <h1 className={`${inter.className} font-bold text-2xl md:text-3xl lg:text-4xl`}>Info</h1> */}
                    {/* <hr className="text-slate-600"/> */}
                    {/* <br /> */}
                    <div className="w-full mx-auto z-50">
                        <BookCard buku={book[0]}/>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <section className="px-6 lg:px-18">
                <h1 className={`${inter.className} font-bold text-2xl md:text-3xl lg:text-4xl`}>Review</h1>
            <hr />
            <br />
            <div className="text-xs md:text-sm">
                <PortableText value={book[0].review}/>
            </div>
            </section>
            <br />
            <br />
            <section className="px-6 lg:px-18">
                <h1 className={`${inter.className} font-bold text-2xl md:text-3xl lg:text-4xl`}>Favorite Quote </h1>
            <hr />
            <br />
            <div className="w-full lg:w-1/2 mx-auto text-xs md:text-sm flex flex-col gap-2 lg:gap-4">
                <p className="text-left italic">"{book[0].quote}"</p>
                <p className="text-right">- {book[0].author}</p>
            </div>
            </section>
        </div> : <NotFound/>}
        <br />
        <hr />
    </>
}