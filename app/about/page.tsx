import expData from "@/app/about/data/expData.json"
import eduData from "@/app/about/data/eduData.json"
import volData from "@/app/about/data/volData.json"
import skillData from "@/app/about/data/skillData.json"
import ExpCards from "./ui/components/expCards"
import EduCards from "./ui/components/eduCards"
import ProfileCards from "./ui/components/profileCards"
import SkillCards from "./ui/components/skillCards"

export default function About(){
    return <div className="w-full px-6 lg:px-16">
                <section>
                    <ProfileCards/>
                </section>
                <hr />
                <section className="my-5">
                    <h1 className="font-bold text-xl lg:text-3xl my-1">
                        Educations
                    </h1>
                    {eduData.map((edu, i) => {
                        return <EduCards key={i} edu={edu}/>
                    })}
                </section>
                <hr />
                <section className="my-5">
                    <h1 className="font-bold text-xl lg:text-3xl my-1">
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
                    <h1 className="font-bold text-xl lg:text-3xl my-1">
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
                    <h1 className="font-bold text-xl lg:text-3xl my-1">
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