import expData from "@/app/about/data/expData.json"
import eduData from "@/app/about/data/eduData.json"
import volData from "@/app/about/data/volData.json"
import skillData from "@/app/about/data/skillData.json"
import ExpCards from "./ui/components/expCards"
import EduCards from "./ui/components/eduCards"
import ProfileCards from "./ui/components/profileCards"
import SkillCards from "./ui/components/skillCards"

import Link from "next/link"

export default function About(){
    return <div className="w-full px-6 lg:px-16">
                <section>
                    <ProfileCards/>
                </section>
                <hr />
                <section className="my-5">
                    <h1 className="font-bold text-xl lg:text-3xl my-1 text-lime-200 mb-4">
                        About Me
                    </h1>
                    <div className="text-justify text-xs lg:text-sm">
                        <p>I'm a <span className="text-sky-200">machine learning</span> and <span className="text-rose-200">graphic design</span> enthusiast. Passionate in those fields and willing to learn more to know better, supported with related background, experiences, and interests. 
                        </p>
                        <p className="mt-2">Other than that, I also doing something that I consider it as my hobbies. I do <span className="text-sky-200">photography</span> things and <span className="text-rose-200">reading books</span>. If you are wondering with my photography results, you can check it on my <Link className="underline decoration-2 decoration-rose-200 text-sky-200" href={"https://unsplash.com/id/@dhimashr/"} target="_blank">Unsplash</Link> profile. I also made <Link className="underline decoration-2 decoration-rose-200 text-sky-200" href={"/library"}>Library</Link> page in this website to list all books that I've read.</p>
                    </div>
                </section>
                <hr />
                <section className="my-5">
                    <h1 className="font-bold text-xl lg:text-3xl my-1 text-lime-200 mb-4">
                        Educations
                    </h1>
                    {eduData.map((edu, i) => {
                        return <EduCards key={i} edu={edu}/>
                    })}
                </section>
                <hr />
                <section className="my-5">
                    <h1 className="font-bold text-xl lg:text-3xl my-1 text-lime-200 mb-4">
                        Experiences
                    </h1>
                    <div className="grid grid-cols-1">
                        {expData.map((exp, i) => {
                            return <ExpCards key={i} theme={exp.theme} id={exp.id} name={exp.name} subname={exp.subname} breakdown={exp.breakdown}/>
                        })}
                    </div>
                </section>
                <hr />
                <section className="my-5">
                    <h1 className="font-bold text-xl lg:text-3xl my-1 text-lime-200 mb-4">
                        Volunteerings
                    </h1>
                    <div className="grid grid-cols-1">
                        {volData.map((exp, i) => {
                            return <ExpCards key={i} theme={exp.theme} id={exp.id} name={exp.name} subname={exp.subname} breakdown={exp.breakdown}/>
                        })}
                    </div>
                </section>
                <hr />
                <section className="my-5">
                    <h1 className="font-bold text-xl lg:text-3xl my-1 text-lime-200 mb-4">
                        Skills
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {skillData.map((item, i) => {
                        return <SkillCards key={i} skills={item}/>
                    })}
                    </div>
                </section>
            </div>
}