import { Github, Instagram, Facebook } from "lucide-react"

export default function Footer(){
    return <div className="flex w-full px-6 md:px-10 py-4 md:py-8 text-[0.5rem] md:text-sm">
        <div className="flex-1/2 flex items-center-safe gap-1">
            <div className="flex items-end-safe gap-0.5">
                <Facebook size={16}/> 
                <Github size={16}/>
                <Instagram size={16}/>
            </div>
            <p>/ dhimashdr</p>
        </div>
        <div className="text-right">
            <p>2026</p>
        </div>
    </div>
}