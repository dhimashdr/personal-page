import Image from "next/image"

interface EduInfo{
    id: string,
    school: string,
    subject: string,
    theme: string,
    yearStart: string,
    yearEnd: string
}

interface Edu{
    edu: EduInfo
}

export default function EduCards({edu} : Edu){
    return <div>
        <div className="w-full h-10 flex items-center-safe gap-2 relative" style={{backgroundColor: `${edu.theme}`}}>
                        <div className="absolute w-full h-full bg-linear-to-r from-transparent to-gray-900 z-0 top-0 left-0"></div>
                        <div className="w-10 h-full relative">
                            <Image src={`/images/about/logo-${edu.id}.jpg`} alt={edu.school} fill/>
                        </div>
                        <div className="flex gap-2 lg:gap-4 items-center-safe">
                            <h1 className="font-semibold text-xs lg:text-xl relative">
                                {edu.school} <span className="font-light text-[0.5rem] lg:text-xs">{edu.subject}</span>
                            </h1>
                            <span> | </span>
                            <p className="font-semibold text-[0.5rem] lg:text-xs">{edu.yearStart} - {edu.yearEnd}</p>
                        </div>
                    </div>
        </div>
}