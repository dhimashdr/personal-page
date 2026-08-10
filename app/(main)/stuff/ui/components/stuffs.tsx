// import { sanityFetch } from "@/sanity/lib/live";
import { client } from "../../../../../sanity/lib/client";
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
    const result = await client.fetch(QUERY, {}, {next: {revalidate: 60}})

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