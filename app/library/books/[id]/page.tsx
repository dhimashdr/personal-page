'use server'

import dataBuku from "@/app/library/data/bookData.json";
import { MDXRemote } from "next-mdx-remote/rsc";
import { inter } from "@/app/ui/fonts";
import Cards from "@/app/library/ui/components/cards";
import NotFound from "@/app/not-found";

interface PageProps {
  params: Promise<{ id: string }>
}

const mdxComponents = {
    Rating: ({value}: { value: number  }) => <div className="text-yellow-500">{"★".repeat(value)}</div>,
    TextRed: ({text}: {text : string}) => <p className="text-red-500">{text}</p>
}

export default async function DetailBuku({ params }: PageProps){
    const { id } = await params
    const book = dataBuku.find((book) => book.isbn === id)
    
    return ( book ?
        <div className="w-full px-6 lg:px-18">
            <h1 className={`${inter.className} font-bold text-2xl md:text-3xl lg:text-4xl`}>Info</h1>
            <hr className="text-slate-600"/>
            <br />
            {/* <div className="flex h-32 md:h-72 lg:h-96 bg-slate-500 items-center-safe">
                <div className="relative flex-1/4 w-full h-full">
                    <Image src={book?.cover ?? ""} alt={book?.title ?? ""} fill className="object-cover object-top w-fit"/>
                </div>
                <div className={`${inter.className} flex-3/4 p-4 md:p-8 lg:p-12`}>
                    <h1 className="font-bold text-sm md:text-2xl xl:text-4xl">{book?.title}</h1>
                    <h4 className="font-light text-[0.5rem] md:text-xs xl:text-sm mb-2">{book?.author}</h4>
                    <p className="font-medium text-[0.5rem] md:text-xs xl:text-sm">{book?.blurb}</p>
                </div>
            </div> */}
            <div className="w-full mx-auto">
                <Cards buku={book!}/>
            </div>
            <br />
            <br />
            <h1 className={`${inter.className} font-bold text-2xl md:text-3xl lg:text-4xl`}>Review <span className="font-light text-[0.5rem] md:text-xs lg:text-sm">(sejujurnya)</span></h1>
            <hr className="text-slate-600"/>
            <br />
            <div className="text-xs md:text-sm">
                <MDXRemote source={book?.review ?? ""} components={mdxComponents}/>
            </div>
            <br />
            <br />
            <h1 className={`${inter.className} font-bold text-2xl md:text-3xl lg:text-4xl`}>Favorite Quote <span className="font-light text-[0.5rem] md:text-xs lg:text-sm">(dari bukunya)</span></h1>
            <hr className="text-slate-600"/>
            <br />
            <div className="w-full lg:w-1/2 mx-auto text-xs md:text-sm">
                <p className="text-left italic">"{book?.quote}"</p>
                <p className="text-right">- {book?.author}</p>
            </div>
        </div> : <NotFound/>
    )
}