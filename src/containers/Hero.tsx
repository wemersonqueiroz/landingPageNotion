import React from "react"
import hero from "../../public/assets/hero.png"

function Hero() {
  return (
    <div className="flex flex-col md:flex-row relative mt-16 w-full px-9 lg:px-24 ">
      <div className="w-screen md:w-full">
        <h1 className="font-bold text-2xl lg:text-5xl md:text-4xl w-48 md:w-80 lg:w-full ml-8 mt-4">
          Get organized in your life and business
        </h1>
        <p className="ml-8 mt-8 text-sm lg:text-xl lg:w-96 w-60 md:w-80">
          This Notion Planner is your second brain to manage your whole life,
          personal, finances, habits, self-care, nutrition and your small
          business. All-in-one place.
        </p>
        <button className="ml-8 mt-8 font-bold font-serif text-white bg-orange-500 px-4 text-sm py-2 rounded">
          {" "}
          Get The Template
        </button>
        <p className="mt-4 ml-8 md:hidden text-sm font-thin">
          {" "}
          Only £8, reuse it forever
        </p>
      </div>
      <img
        src="./assets/hero.png"
        className="absolute top-0 -right-16 w-64 md:w-96 md:-top-12 md:h-full md:relative drop-shadow-md "
        alt="Hero"
      />
    </div>
  )
}

export default Hero
