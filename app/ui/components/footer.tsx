import { Github, Instagram, Facebook } from "lucide-react"

export default function Footer(){
    return <div className="flex w-full px-6 md:px-10 py-4 text-[0.5rem] md:text-xs mb-19 lg:mb-0">
        <div className="flex-1/2 flex items-center-safe gap-1">
            <div className="flex items-center-safe gap-0.5">
                <Facebook className="size-2 md:size-4"/> 
                <Github className="size-2 md:size-4"/>
                <Instagram className="size-2 md:size-4"/>
            </div>
            <p>/ dhimashdr</p>
        </div>
        <div className="text-right">
            <p>2026</p>
        </div>
    </div>
}