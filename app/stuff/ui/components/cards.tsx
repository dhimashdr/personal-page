import { Icon } from '@iconify/react';

interface StuffInfo{
    id: string,
    title: string,
    createdAt: string,
    url: string,
    summary: string,
    techStack: Array<string>
}

interface Stuff{
    stuff: StuffInfo
}

export default function Cards({stuff} : Stuff){
    return <div className="grid grid-cols-1 w-full rounded-lg overflow-hidden h-fit bg-linear-to-r from-slate-900/50 to-sky-950/50">
        <div className="bg-cover bg-center h-20 lg:h-30" style={{backgroundImage: `url(/images/stuff/${stuff.id}.jpg)`}}>
        </div>
        <div className="h-fit my-auto grid grid-cols-2 p-5">
            <div>
                <h1 className="font-bold text-lg lg:text-xl">{stuff.title}</h1>
                <p className="font-light text-[0.5rem] lg:text-xs text-gray-400">{stuff.summary}</p>
            </div>
            <div className="ml-auto grid grid-cols-1">
                <div className="text-right text-[0.5rem] lg:text-xs text-gray-400 flex items-center-safe">
                    {stuff.createdAt}
                </div>
                <div className="flex items-end-safe">
                    <div className="flex gap-1">
                    {stuff.techStack.map((tech, index) => {
                    return <Icon 
                            key={index} 
                            icon={`logos:${tech}`}
                            className='w-3 h-3 lg:w-5 lg:h-5'/>
                    })}
                </div>
                </div>
            </div>
        </div>
    </div>
}