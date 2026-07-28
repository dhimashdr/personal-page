import { sanityFetch } from "@/sanity/lib/live"
import { PostCard } from "./cards"

interface Posts{
    title: string,
    subtitle: string,
    cover: any,
    slug: any,
    _createdAt: string
}

async function getPosts(){
    const QUERY = "*[_type == 'posts']{title, subtitle, cover, slug, _createdAt}"
    const { data: result } = await sanityFetch({query: QUERY})

    return result as Array<Posts>
}

export async function AllPosts(){
    const data = await getPosts()

    return (
        data.map((e, idx) => {
            return <PostCard post={e} key={idx}/>
        })
    )
}

export function AllPostsSkeleton(){
    return (
        [...Array(6)].map((e, i) => {
            return <div className="w-full bg-gray-900 h-18 animate-pulse rounded-lg" key={i}></div>
        })
    )
}