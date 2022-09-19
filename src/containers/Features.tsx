import React from "react"
import calendar3D from "../../public/assets/calendar3D.png"
import clock3D from "../../public/assets/clock3D.png"
import passport3D from "../../public/assets/passport3D.png"

function Features() {
  return (
    <>
      <h1 className="text-3xl w-80 md:w-full font-bold mx-auto text-center mt-12">
        Get organized, save time and make more money
      </h1>
      <div className="flex flex-col md:flex-row mt-12 gap-y-4">
        <div className="w-60 text-center justify-center mx-auto flex flex-col h-40">
          <img src="./assets/calendar3D.png" className="w-32 mx-auto" alt="" />
          <p className="font-thin text-sm">
            Leverage technology to create space in your mind and calendar.
          </p>
        </div>
        <div className="w-60 text-center justify-center mx-auto flex flex-col h-40">
          <img src="./assets/clock3D.png" className="w-32 mx-auto" alt="" />
          <p className="font-thin text-sm">
            Plan ahgead, create more time, space, and energy using a digital
            planner.
          </p>
        </div>
        <div className="w-60 text-center justify-center mx-auto flex flex-col h-40">
          <img src="./assets/passport3D.png" className="w-32 mx-auto" alt="" />
          <p className="font-thin text-sm">
            {" "}
            Fun and recreation are important to your health and productivity.
          </p>
        </div>
      </div>
      <div className=" flex justify-center mt-12 mx-auto">
        <button className="font-bold font-serif text-white bg-orange-500 px-4 text-sm py-2 rounded  ">
          Get The Template
        </button>
      </div>
    </>
  )
}

export default Features
