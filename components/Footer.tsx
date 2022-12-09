import React from "react"
import { motion } from "framer-motion"
type Props = {}

const Footer = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative  text-center pt-24 md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
      
    </motion.div>
  )
}

export default Footer
