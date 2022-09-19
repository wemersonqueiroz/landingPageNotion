import React from "react"

function Testimonial() {
  return (
    <>
      <p className="mx-auto mt-16 text-3xl font-bold text-center">
        Testimonials
      </p>
      <div className="px-8 max-w-sm relative flex flex-col mt-8 mx-auto">
        <div className="">
          <img src="./assets/testimonial.png" className="" alt="" />
        </div>
        <div>
          <p className="font-bold text-sm">Rachel Gibson</p>
          <p className="text-sm font-thin">
            Leticia helped me a lot to use the template initially for optimized
            use. I was pleasantly surprised by her kindness and the help she
            offered me. The template is simple and easy to use. Perfect when you
            don't have a lot of time and want to manage everything quickly.
          </p>
          <p className="font-thin text-sm mt-2">2022/07</p>
          <p>⭐️⭐️⭐️⭐️⭐️</p>{" "}
          <img
            src="./assets/iphoneFront.png"
            className="hidden md:block h-60 absolute -right-32 z-50 -top-8 drop-shadow-md"
            alt=""
          />
          <img
            src="./assets/iphoneBack.png"
            className="hidden md:block  h-60 absolute -right-64 -top-8 drop-shadow-md"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default Testimonial
