import postsData from "@/app/blog/data/postsData.json";
import Cards from "./ui/components/cards";
import Link from "next/link";

export default function Blog(){
    return <div className="min-h-screen">
        <div className="grid grid-cols-1 gap-2 px-5 pt-5 lg:px-10 lg:pt-10">
        {postsData.map(post => {
            return <Link href={`/blog/${post.id}`} key={post.id}><Cards post={post}/></Link>
        })}
    </div>
    </div>
}