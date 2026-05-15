import { inter } from "@/app/ui/fonts";
import { Icon } from '@iconify/react';

interface StatusInfo{
    status: string
}

export default function Status({status}: StatusInfo){
    if(status === "Finished"){
        return <div className="bg-green-600 absolute z-20 p-1 rounded-br-sm"><Icon icon={`mdi:book-check`}/></div>
    } else if (status === "Ongoing"){
        return <div className="bg-orange-400 absolute z-20 p-1 rounded-br-sm"><Icon icon={`mdi:book-clock`}/></div>
    } else {
        return <div className="bg-red-600 absolute z-20 p-1 rounded-br-sm"><Icon icon={`mdi:book-cancel`}/></div>
    }
}