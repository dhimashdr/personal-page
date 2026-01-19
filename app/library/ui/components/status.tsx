import { inter } from "@/app/ui/fonts";

interface StatusInfo{
    status: string
}

export default function Status({status}: StatusInfo){
    if(status === "Finished"){
        return <div className="bg-green-600 absolute z-20 text-[0.5rem] md:text-xs px-2 py-1 rounded-br-sm md:rounded-br-md"><span className={`${inter.className}`}>{status}</span></div>
    } else if (status === "Ongoing"){
        return <div className="bg-yellow-600 absolute z-20 text-[0.5rem] md:text-xs px-2 py-1 rounded-br-sm md:rounded-br-md"><span className={`${inter.className}`}>{status}</span></div>
    } else {
        return <div className="bg-red-600 absolute z-20 text-[0.5rem] md:text-xs px-2 py-1 rounded-br-sm md:rounded-br-md"><span className={`${inter.className}`}>{status}</span></div>
    }
}