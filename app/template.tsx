'use client'

import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} 
        // initial={{ filter: "blur(12px)" }}
        // animate={{ filter: "blur(0px)" }}
        // exit={{ filter: "blur(12px)" }}
        // transition={{
        //   duration: 0.7,
        //   ease: "easeOut",
        // }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}