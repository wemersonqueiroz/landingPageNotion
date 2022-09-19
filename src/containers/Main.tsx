import React from "react"
import main from "../../public/assets/main.png"
import centerContainer from "../../public/assets//centerContainer.png"
import calendar from "../../public/assets//calendar.png"
import folder from "../../public/assets//folder.png"

function Main() {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-24 w-full mx-auto justify-center">
        <div className="relative ">
          <img
            src="./assets/folder.png"
            alt=""
            className="absolute -top-16 right-0"
          />
          <img
            src="./assets/main.png"
            className="w-full  z-50 relative"
            alt=""
          />
          <img
            src="./assets/calendar.png"
            alt=""
            className="absolute -bottom-16 left-0"
          />
        </div>{" "}
        <div className="flex flex-col mt-8 md:mt-0 px-12">
          <h1 className="font-bold text-2xl md:text-4xl mx-8 md:ml-8 mt-4 md:mt-0 md:w-80 md:text-left text-center">
            Grow your life and business mindfully and avoid burnout!
          </h1>
          <p className="text-sm mx-8 md:ml-8  mt-8 md:w-80 md:text-left text-center">
            Getting organised is super important, and
            <strong> it’s a lot easier with a template </strong> where you just
            need to fill it out and work to make your life and business thrive!
          </p>{" "}
        </div>
      </div>
      <img
        src="./assets/centerContainer.png"
        className="w-screen mt-16 drop-shadow-md mx-auto"
        alt=""
      />
    </>
  )
}

export default Main
