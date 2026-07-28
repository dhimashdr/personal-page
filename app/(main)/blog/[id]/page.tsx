import { Metadata } from "next"
import { sanityFetch } from "@/sanity/lib/live"
import { urlFor } from "@/sanity/lib/image"
import { PortableText } from "next-sanity"

interface PageProps{
    params: Promise<{id: string}>
}

export async function generateMetadata({params} : PageProps) : Promise<Metadata>{
    const { id } = await params
    const data = await getPost(id)

    return {
        metadataBase: new URL("https://dhimashdr.vercel.app"),
        title: data[0].title ?? "Not Found",
        description: data[0].subtitle ?? "Not Found",
        openGraph: {
            images: [urlFor(data[0].cover).url()],
        },
    }
}

interface PostData{
    title: string,
    subtitle: string,
    cover: any,
    content: any,
    _createdAt: string
}

async function getPost(id: string){
    const QUERY = `*[_type == 'posts' && slug.current == "${id}"]{slug, subtitle, title, cover, content, _createdAt}`
    const {data : result} = await sanityFetch({query: QUERY})

    return result as Array<PostData>
}

export default async function PostPage({params} : PageProps){
    const { id } = await params
    const data = await getPost(id)

    return <div className="w-full">
        <div className="bg-cover w-full min-h-[20vh] lg:min-h-[40vh] bg-center" style={{backgroundImage: `url(${urlFor(data[0].cover).url()})`}}></div>
        <div className="w-full px-6 lg:px-12 py-5 lg:py-10">
            <div className="pb-5 lg:pb-10">
                <h1 className="font-bold text-xl md:text-3xl">{data[0].title}</h1>
                <p className="font-light text-xs md:text-sm text-gray-400">{data[0]._createdAt.split('T')[0]} </p>
            </div>
            <div className="text-xs md:text-sm">
                <PortableText value={data[0].content}/>
            </div>
        </div>
        <br />
        <hr />
    </div>
}


// import postsData from "../data/postsData.json";
// import { MDXRemote } from "next-mdx-remote/rsc";
// import remarkMath from 'remark-math';
// import rehypeKatex from 'rehype-katex';
// import 'katex/dist/katex.min.css'; 
// import { source_code_pro } from "@/app/ui/fonts";
// import MDXImage from "../ui/components/mdximage";

// const mdxComponents = {
//     Red: ({children} : {children : React.ReactNode}) => <span className="text-red-500">{children}</span>,
//     Sql: ({children} : {children : React.ReactNode}) => <span className={`${source_code_pro.className} bg-slate-700 text-white px-1`}>{children}</span>,
//     img: MDXImage,
//     Grm: ({children} : {children : React.ReactNode}) => <span className={`bg-slate-800 rounded-sm text-white px-2 py-[0.5]`}>{children}</span>,
//     H1: ({children} : {children : React.ReactNode}) => <span className={`text-xl`}>{children}</span>,
//     Light: ({children} : {children : React.ReactNode}) => <span className={`font-light`}>{children}</span>,
// }

// interface PageProps{
//     params: Promise<{id: string}>
// }

// export async function generateMetadata({params} : PageProps) : Promise<Metadata>{
//     const { id } = await params
//     const post = postsData.find(post => post.id === id)

//     return {
//         metadataBase: new URL("https://dhimashdr.vercel.app"),
//         title: post?.title ?? "Not Found",
//         description: post?.summary ?? "Not Found",
//         openGraph: {
//             images: [`/images/posts/${post?.id}.jpg`],
//         },
//     }
// }

// export default async function PostPage({params} : PageProps){
//     const { id } = await params
//     const post = postsData.find(post => post.id === id)
//     const date = new Date(post?.publishedAt ?? "2002-10-10");
//     const formattedDate = date.toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric',
//     });

//     return <div className="w-full">
//         <div className="bg-cover w-full min-h-[20vh] lg:min-h-[40vh] bg-center" style={{backgroundImage: `url(/images/posts/${post?.cover}.jpg), url(/images/posts/blog-default.jpg)`}}></div>
//         <div className="w-full px-6 lg:px-12 py-5 lg:py-10">
//             <div className="pb-5 lg:pb-10">
//                 <h1 className="font-bold text-xl md:text-3xl">{post?.title}</h1>
//                 <p className="font-light text-xs md:text-sm text-gray-400">{formattedDate} </p>
//             </div>
//             <div className="text-xs md:text-sm">
//                 <MDXRemote source={post?.content ?? ""} components={mdxComponents} options={{
//                     mdxOptions: {
//                         remarkPlugins: [remarkMath],
//                         rehypePlugins: [rehypeKatex]
//                     }
//                 }}/>
//             </div>
//         </div>
//     </div>
// }