import { AllPosts, AllPostsSkeleton } from "./ui/components/posts"
import { Suspense } from "react"

export default function Blog(){
    return <><div className="min-h-screen">
        <div className="grid grid-cols-1 gap-2 px-5 pt-5 lg:px-10 lg:pt-10">
            <Suspense fallback={<AllPostsSkeleton/>}>
                <AllPosts/>
            </Suspense>
    </div>
    </div><br /><hr /></>
}

{/* {postsData.map(post => {
            return <Link href={`/blog/${post.id}`} key={post.id}><Cards post={post}/></Link>
        })} */}