import { Parallax } from "react-parallax"
import React from "react"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"

type Props = {}

export default function Experience({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Isake-Neut", "4th_Dim", "buket_pink", "ngk_klan"],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="h-screen flex flex-col space-y-6 items-center justify-center text-center overflow-hidden pb-96">
      <BackgroundCircles />
      <h1>
        <span className="text-3xl font-black text-zinc-800 ">{text}</span>
        <Cursor cursorColor="#382200" />
      </h1>
    </div>
  )
}
