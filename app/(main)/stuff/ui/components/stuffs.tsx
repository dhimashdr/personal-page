import { sanityFetch } from "@/sanity/lib/live";
import { StuffCard } from "./cards";

interface StuffData{
    title: string,
    subtitle: string,
    url: string,
    publishDate: string,
    cover: any,
    techStack: Array<string>
}

async function getStuffs(){
    const QUERY = `*[_type == 'stuffs']{title, subtitle, url, publishDate, cover, techStack}`
    const {data : result} = await sanityFetch({query: QUERY})

    return result as Array<StuffData>
}

export async function AllStuffs(){
    const data = await getStuffs()

    return (
        data.map((e, i) => {
            return <StuffCard stuff={e} key={i}/>
        })
    )
}

export function AllStuffsSkeleton(){
    return (
        [...Array(6)].map((e, i) => {
            return <div className="w-full h-52 rounded-lg bg-gray-900 animate-pulse" key={i}></div>
        })
    )
}