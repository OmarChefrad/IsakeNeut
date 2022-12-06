import { Parallax } from "react-parallax"
import React from "react"

type Props = {}

const Mom = (props: Props) => {
  return (
    <Parallax
      bgImage="../assets/123123e.png"
      bgImageAlt="the cat"
      strength={800}
      className="images">
      <div className="content">
        <span className="img-txt">a trip to space</span>
      </div>
    </Parallax>
  )
}

export default Mom
