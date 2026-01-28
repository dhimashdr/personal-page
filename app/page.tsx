'use client'

import { BookOpenIcon as LibraryOutline, Square3Stack3DIcon as StuffOutline, NewspaperIcon as BlogOutline, UserIcon as AboutOutline } from "@heroicons/react/24/outline"

import socialData from "@/app/data/socials.json"
import bookData from "@/app/library/data/bookData.json"

import { motion as m } from "framer-motion"
import Header from "./ui/components/header"
import Footer from "./ui/components/footer"
import SocialCards from "./ui/components/socialCards"
import OBCards from "./ui/components/ongoingBookCards"

const ongoingBook = bookData.filter(book => book.status === "Ongoing")

export default function Home(){
  return <div className="w-full lg:pl-16 bg-linear-60 from-cyan-900/10 to-lime-900/10 min-h-screen relative">
    <Header title="" desc="nice to meet you!"/>
    <div className="w-full relative overflow-hidden">
      <div className="w-full relative grid grid-cols-2 z-55 h-60 px-6 lg:px-16">
        <div className="my-auto">
          <m.h1 
            className="font-bold text-2xl lg:text-4xl"
            initial={{y: 10, opacity: 0}}
            animate={{
              color: ["#4ED7F1", "#6FE6FC", "#A8F1FF", "#FFFA8D", "#4ED7F1"], y: 0, opacity: 1
            }}
            transition={{
                y: {
                  duration: 0.6,
                  ease: "easeOut"
                },
                opacity: {
                  duration: 0.6,
                  ease: "easeOut"
                },
                color: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }
            }}>
            Hello!
          </m.h1>
          <br />
          <m.p 
            className="font-light text-xs lg:text-sm"
            initial={{y: 20, opacity: 0}}
            animate={{
              y: 0, opacity: 1
            }}
            transition={{
              duration: 0.6, 
              ease: "easeOut"
            }}>
            It's a nice to meet you! 🫡😄
          </m.p>
        </div>
        <div className="m-auto">
        </div>
      </div>
    </div>
    <hr />
    <m.section className="my-5 px-6 lg:px-16" initial={{y: 20, opacity: 0}}
            animate={{
              y: 0, opacity: 1
            }}
            transition={{
              duration: 0.6, 
              ease: "easeOut"
            }}>
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
    </m.section>
    <hr />
    <m.section className="my-5 px-6 lg:px-16" initial={{y: 20, opacity: 0}}
            animate={{
              y: 0, opacity: 1
            }}
            transition={{
              duration: 0.6, 
              ease: "easeOut"
            }}>
      <h1 className="font-bold mb-5 text-xl lg:text-3xl text-lime-200">Reading Now</h1>
      <div className="grid grid-cols-1 gap-2">
        {ongoingBook.map((book, i) => {
        return <OBCards book={book} key={i}/>
      })}
      </div>
    </m.section>
    <hr />
    <m.section className="my-5 px-6 lg:px-16" initial={{y: 20, opacity: 0}}
            animate={{
              y: 0, opacity: 1
            }}
            transition={{
              duration: 0.6, 
              ease: "easeOut"
            }}>
      <h1 className="font-bold text-xl lg:text-3xl mb-5 text-lime-200">Let's Connect</h1>
      <div className="grid grid-flow-col gap-2 px-5 md:px-10 lg:px-20 xl:px-40">
        {socialData.map((social, i) => {
          return <SocialCards key={i} social={social}/>
        })}
      </div>
    </m.section>
    <br />
    <Footer/>
    <div className="h-12 lg:h-0"></div>
  </div>
}