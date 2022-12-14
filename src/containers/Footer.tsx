import React from "react"

function Footer() {
  return (
    <div className="flex flex-col mt-16">
      <div className="flex flex-col md:flex-row">
        <img
          src="./assets/macbookManage.png  "
          className="max-w-md object-scale-down  ml-8 md:ml-12 mt-12 drop-shadow-md"
          alt=""
        />
        <div className="mx-auto mt-12 max-w-sm ">
          <p className="font-bold text-3xl">Manage your business</p>
          <ul className="font-thin mt-8">
            <li>• Business Overview & Brain dump </li>
            <li>• Products (ideas, pricing) & Branding </li>
            <li>• Finances (costs, revenue, profit calculator, wishlist)</li>
            <li>
              • Marketing (content calendar, Instagram page, Facebook page, SEO
              research)
            </li>
          </ul>
          <button className="md:ml-8 mt-8 font-bold font-serif text-white bg-orange-500 px-4 text-sm py-2 rounded ">
            Get the Template
          </button>
        </div>
      </div>
      <div className="my-16 flex flex-col md:flex-row justify-between mx-auto">
        <div className=" mt-12 max-w-sm">
          <p className="font-bold text-3xl w-full">Video Tutorial Included</p>
          <p className="font-thin mt-8">
            This Notion Template is beginner-friendly, and I included a few
            tutorials inside to guide you on how to use it. If you have any
            question just reach out to me at leticiaamerico@yahoo.com.
          </p>
        </div>
        <img
          src="./assets/ipad.png"
          className="max-w-xs object-scale-down mx-auto mt-12"
        />
        <button className="w-fit mx-auto mt-8 font-bold font-serif text-white bg-orange-500 px-4 text-sm py-2 rounded md:hidden">
          Get the Template
        </button>
      </div>
      <p className="mx-auto">All rights reserved © 2022</p>
    </div>
  )
}

export default Footer
