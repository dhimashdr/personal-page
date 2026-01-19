import { Icon } from "@iconify/react"

interface SkillInfo{
    diff: string,
    theme: string,
    skill: Array<string>
}

interface Skills{
    skills: SkillInfo
}

export default function SkillCards({skills} : Skills){
    return <div className={`grid grid-cols-1 bg-linear-to-b from-black to-sky-950 border-gray-600 ${skills.diff === "Decent" ? "md:border-x" : ""}`}>
        <h1 className="py-2 font-bold text-xs lg:text-xl w-full text-center" style={{backgroundColor: `${skills.theme}`}}>{skills.diff}</h1>
        <div className="flex gap-4 mx-auto py-5 lg:py-10">
            {skills.skill.map((item) => {
                return <div key={item} className="flex items-center-safe gap-2 bg-gray-300/10">
                    <Icon 
                icon={`devicon:${item.toLowerCase()}`}
                className="h-3 w-3 lg:w-5 lg:h-5"/>
                    <h2 className="text-[0.5rem] lg:text-xs">{item}</h2>
                </div>
            })}
        </div>
    </div>
}