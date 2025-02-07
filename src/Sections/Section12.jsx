import React from 'react'
import img from "../assets/lightchart.png"
import img1 from "../assets/darkchart1.png"
const Section12 = () => {
  return (
      <main>
          <img src={img} alt="" className="dark:hidden w-full" />
          <img src={img1} alt="" className="hidden dark:flex w-full" />
    </main>
  )
}

export default Section12