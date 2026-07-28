'use client'

import { motion as m } from "framer-motion"

export function SlideUp({ children }: { children: React.ReactNode }){
    return (
        <m.div 
            initial={{y: 10, opacity: 0}}
            animate={{
              y: 0, opacity: 1
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
            }}>{children}
          </m.div>
    )
}

export function Hello({ children }: { children: React.ReactNode }){
    return (
        <m.div 
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
            }}>{children}
          </m.div>
    )
}