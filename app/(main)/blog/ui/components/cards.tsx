'use client'

interface PostData{
    id: string,
    cover: string,
    title: string,
    publishedAt: string,
    summary: string
}

interface Post{
    post: PostData
}

export default function Cards({post} : Post){
    return <div className={`relative px-5 lg:px-8 py-4 h-full items-center-safe rounded-2xl`}>
            <div className="absolute w-2/3 h-full right-0 top-0 bg-cover bg-center rounded-2xl" style={{backgroundImage: `url(/images/posts/${post.cover}.jpg), url(/images/posts/blog-default.jpg)`}}></div>
            <div className="absolute inset-0 bg-linear-to-r from-gray-900 from-50% via-transparent via-70% to-gray-900 to-90% rounded-xl"></div>
            <div className="relative z-40">
                <div className="grid grid-cols-2 items-center-safe">
                <h1 className={`font-bold text-sm md:text-[1rem]`}>{post.title}</h1>
                <p className="ml-auto text-[0.5rem] md:text-[0.65rem] font-light text-gray-400">{post.publishedAt}</p>
            </div>
            <div className="">
                <p className={`text-[0.625rem] md:text-xs font-light text-gray-400 text-shadow-gray-900 text-shadow-lg max-w-1/2`}>{post.summary}</p>
            </div>
            </div>
        </div>
}