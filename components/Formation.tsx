import React, { useRef } from "react"
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax"
import Image from "next/image"

// Little helpers ...
const url = (name: string, wrap = false) =>
  `${wrap ? "url(" : ""}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ")" : ""}`

export default function Formation() {
  const parallax = useRef<IParallax>(null!)
  return (
    <div style={{ width: "100%", height: "100%", background: "#253237" }}>
      <Parallax
        ref={parallax}
        pages={3}>
        <ParallaxLayer
          offset={1}
          speed={1}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
        />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}>
          <Image
            src={"https://cdn.discordapp.com/attachments/961369644130766853/1050552007255134238/art_9.jpg"}
            alt="satellite"
            width={300}
            height={300}
            style={{ width: "15%", marginLeft: "70%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.8}
          style={{ opacity: 0.1 }}></ParallaxLayer>

        <ParallaxLayer
          offset={1.75}
          speed={0.5}
          style={{ opacity: 0.1 }}></ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.2}
          style={{ opacity: 0.2 }}></ParallaxLayer>

        <ParallaxLayer
          offset={1.6}
          speed={-0.1}
          style={{ opacity: 0.4 }}></ParallaxLayer>

        <ParallaxLayer
          offset={2.6}
          speed={0.4}
          style={{ opacity: 0.6 }}></ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}>
          <Image
            src={"https://cdn.discordapp.com/attachments/961369644130766853/1050551983112736818/art_6.jpg"}
            alt="satellite"
            width={800}
            height={800}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={-0.3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "58rem",
          }}>
          <Image
            src={"https://cdn.discordapp.com/attachments/961369644130766853/1050551981414023188/art_3.jpg"}
            alt="satellite"
            width={300}
            height={300}
            style={{ width: "20%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Image
            src={"https://cdn.discordapp.com/attachments/961369644130766853/1050551980545802240/art_1.jpg"}
            alt="satellite"
            width={500}
            height={630}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.3}
          speed={0.3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "48rem",
          }}>
          <Image
            src={"https://cdn.discordapp.com/attachments/961369644130766853/1050554444116406333/art12.jpeg"}
            alt="satellite"
            width={320}
            height={400}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Image
            src={"https://cdn.discordapp.com/attachments/961369644130766853/1050551981883797515/art_4.jpg"}
            alt="satellite"
            width={500}
            height={500}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingRight: "48rem",
          }}
          onClick={() => parallax.current.scrollTo(0)}>
          <Image
            src={"https://cdn.discordapp.com/attachments/961369644130766853/1050551982340984863/art_5.jpg"}
            alt="satellite"
            width={300}
            height={300}
            style={{ width: "40%" }}
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
