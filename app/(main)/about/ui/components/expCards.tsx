'use client'

import Image from "next/image"
import { Icon } from '@iconify/react';

interface ExpBreakdown{
    pos: string,
    skill: Array<string>,
    dateStart: string,
    dateEnd: string,
    detail: Array<string>
}

interface Exp{
    id: string,
    name: string,
    subname: string,
    theme: string,
    breakdown: Array<ExpBreakdown>
}

export default function ExpCards({id, name, subname, theme, breakdown} : Exp){
    return <div className="">
        <div className="grid grid-cols-1">
            <div className="w-full h-10 flex items-center-safe gap-2 relative" style={{backgroundColor: `${theme}`}}>
                <div className="absolute w-full h-full bg-linear-to-r from-transparent to-gray-900 z-0 top-0 left-0"></div>
                <div className="w-10 h-full relative">
                    <Image src={`/images/about/logo-${id}.jpg`} alt={name} fill/>
                </div>
                <h1 className="font-semibold text-xs lg:text-xl relative">
                    {name} <span className="font-light text-[0.5rem] lg:text-xs">{subname}</span>
                </h1>
            </div>
            <div className="flex flex-col bg-linear-to-br from-black to-sky-950">
                {breakdown.map((exp, i) => {
                    return <div key={i}>
                    <div className="py-1 px-2 font-semibold text-xs lg:text-lg relative" style={{backgroundColor: `${theme}`}}>
                        <div className="absolute w-full h-full bg-linear-to-r from-gray-900/50 to-gray-900 z-0 top-0 left-0"></div>
                        <div className="relative flex gap-4">
                            <h1 className="w-fit">{exp.pos}</h1>
                            <div className="my-auto flex gap-1">
                                {exp.skill.map((skill, i) => {
                                    return <Icon 
                                        key={i} 
                                        icon={`devicon:${skill}`}
                                        className="h-3 w-3 lg:h-5 lg:w-5"/>
                                })}
                            </div>
                        </div>
                    </div>
                <div className="flex px-2 py-2 ">
                    <div className="min-w-fit flex flex-col text-center gap-0.5 text-[0.5rem] lg:text-xs text-gray-400">
                        <p>{exp.dateStart}</p>
                        <div className="mx-auto h-full w-px" style={{backgroundColor: `${theme}`}}></div>
                        <p>{exp.dateEnd}</p>
                    </div>
                    <div className="w-full pl-8 text-[0.5rem] lg:text-sm py-4">
                        <ul className="list-disc marker:text-sky-600">
                            {exp.detail.map((detail, i) => {
                                return <li key={i}>{detail}</li>
                            })}
                        </ul>
                    </div>
                </div>
                </div>
                })}
            </div>
        </div>
    </div>
}