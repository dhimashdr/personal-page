import { BookOpenIcon as LibraryOutline, Square3Stack3DIcon as StuffOutline, NewspaperIcon as BlogOutline, UserIcon as AboutOutline } from "@heroicons/react/24/outline"

import Header from "../ui/components/header"
import Footer from "../ui/components/footer"
import { OngoingBooks } from "../ui/components/ongoingBookCards"
import { SlideUp, Hello } from "../ui/components/slideUp"

export default function Home(){
  return <div className="w-full  min-h-screen relative">
    <Header title="" desc="nice to meet you!"/>
    <div className="w-full relative overflow-hidden">
      <div className="w-full relative grid grid-cols-2 z-55 h-60 px-6 lg:px-16">
        <div className="my-auto">
          <Hello>
            <h1 className="font-bold text-2xl lg:text-4xl">
              Hello
            </h1>
          </Hello>

          <br />
          <SlideUp>
            <p className="font-light text-xs lg:text-sm">It's a nice to meet you! 🫡😄</p>
          </SlideUp>
        </div>
        <div className="m-auto">
        </div>
      </div>
    </div>
    <hr />
    <SlideUp>
      <div className="my-5 px-6 lg:px-16">
        <h1 className="font-bold text-xl lg:text-3xl mb-5 text-lime-200">What is This?</h1>
      <p className="text-[0.625rem] md:text-xs lg:text-sm">
            This is my personal page, supposed to be an archive of what I've done or what I like. I also thought this could be my portfolio. It will be updated once I got better ideas. Hope you like it.
      </p>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <div className="text-[0.5rem] md:text-[0.625rem] lg:text-sm flex items-center-safe gap-2"><LibraryOutline className="size-8"/><span>is <span className="font-bold"> Library </span> section, you can see some books that I've read and its reviews.</span></div>
        <div className="text-[0.5rem] md:text-[0.625rem] lg:text-sm flex items-center-safe gap-2"><StuffOutline className="size-8"/><span>is <span className="font-bold">Stuff</span> section, supposed to be filled with stuff or project that I've made.</span></div>
        <div className="text-[0.5rem] md:text-[0.625rem] lg:text-sm flex items-center-safe gap-2"><BlogOutline className="size-8"/><span>is <span className="font-bold">Blog</span> section, I made it to write some notes, like study notes or something else.</span></div>
        <div className="text-[0.5rem] md:text-[0.625rem] lg:text-sm flex items-center-safe gap-2"><AboutOutline className="size-8"/><span>is <span className="font-bold">About</span> section, if you want to know more about me :D.</span></div>
      </div>
      </div>
    </SlideUp>
    <hr />
    <SlideUp>
      <div className="my-5 px-6 lg:px-16">
        <h1 className="font-bold mb-5 text-xl lg:text-3xl text-lime-200">Reading Now</h1>
      <div className="grid grid-cols-1 gap-2">
        <OngoingBooks/>
      </div>
      </div>
    </SlideUp>
    <hr />
    <Footer/>
    <div className=" lg:h-0"></div>
  </div>
}