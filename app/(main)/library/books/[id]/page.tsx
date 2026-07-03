'use server'

import dataBuku from "../../data/bookData.json";
import { MDXRemote } from "next-mdx-remote/rsc";
import { inter } from "@/app/ui/fonts";
import Cards from "@/app/(main)/library/ui/components/cards";
import NotFound from "@/app/not-found";
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ id: string }>
}

const mdxComponents = {
    Rating: ({value}: { value: number  }) => <div className="text-yellow-500">{"★".repeat(value)}</div>,
    TextRed: ({text}: {text : string}) => <p className="text-red-500">{text}</p>
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
    const book = dataBuku.find((book) => book.isbn === id)
    
    return ( book ?
        <div className="w-full">
            <section className="bg-cover bg-no-repeat bg-center relative" style={{backgroundImage: `url(${book?.cover})`
            }}>
                <div className={`bg-linear-to-t from-background to-background/50 backdrop-blur-sm w-full px-6 lg:px-18 py-8 border-b-2 ${book.status == 'Finished' ? 'border-green-600' : (book.status == 'DNF' ? 'border-red-600' : 'border-orange-400')}`}>
                    {/* <h1 className={`${inter.className} font-bold text-2xl md:text-3xl lg:text-4xl`}>Info</h1> */}
                    {/* <hr className="text-slate-600"/> */}
                    {/* <br /> */}
                    <div className="w-full mx-auto z-50">
                        <Cards buku={book!}/>
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
                <MDXRemote source={book?.review ?? ""} components={mdxComponents}/>
            </div>
            </section>
            <br />
            <br />
            <section className="px-6 lg:px-18">
                <h1 className={`${inter.className} font-bold text-2xl md:text-3xl lg:text-4xl`}>Favorite Quote </h1>
            <hr />
            <br />
            <div className="w-full lg:w-1/2 mx-auto text-xs md:text-sm flex flex-col gap-2 lg:gap-4">
                <p className="text-left italic">"{book?.quote}"</p>
                <p className="text-right">- {book?.author}</p>
            </div>
            </section>
        </div> : <NotFound/>
    )
}