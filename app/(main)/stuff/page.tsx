// import stuffData from "./data/stuffData.json"
// import Cards from "./ui/components/cards"
// import Link from "next/link"
import { AllStuffs, AllStuffsSkeleton } from "./ui/components/stuffs"
import { Suspense } from "react"

export default function Stuff(){
    return <div className="min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-5 md:p-10">
            <Suspense fallback={<AllStuffsSkeleton/>}>
                <AllStuffs />
            </Suspense>
        </div>
    </div>
}