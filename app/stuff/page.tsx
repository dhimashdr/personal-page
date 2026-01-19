import stuffData from "@/app/stuff/data/stuffData.json"
import Cards from "./ui/components/cards"
import Link from "next/link"

export default function Stuff(){
    return <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-5 md:x-10 min-h-screen">
            {stuffData.map((stuff, index) => {
                return <Link href={stuff.url} key={index}><Cards stuff={stuff}/></Link>
            })}
        </div>
    </>
}