import React from "react"
import grape from "../assets/port/grape.png"
import carrot from "../assets/port/carrot.png"
import Orange from "../assets/port/Orange.png"
import meat from "../assets/port/meat.png"
import pills from "../assets/port/pills.png"
import tomatoe from "../assets/port/tomatoe.png"


function Portfolio() {
  return (
    <div className="bg-white">
    <div className="w-10/12 m-auto py-8 ">
    <div className="w-10/12 m-auto ">
    <button className="flex items-center bg-gray-200 text-gray-200 my-5 px-9 text-sm rounded-full  ">fddddd</button>
     <h1 className="lg:text-3xl text-left font-bold">
     Featured Products
     </h1>
          <p className="py-3 text-xl text-left">
          Check out frequently purchased farm produce
          </p>
          
     </div>
     <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 py-7 pb-2 p-5">
     <div className="m-auto boxshadow rounded-2xl  bg-white border ">
              <a href="">
                <img src={meat} alt="" className="rounded-t-xl w-[400px]  object-cover"/>
              </a>
            </div>

            <div className="m-auto boxshadow rounded-2xl  bg-white border ">
            <a href="">
              <img src={grape} alt="" className="rounded-t-xl w-[400px] object-cover"/>
            </a>
          </div>

          <div className="m-auto boxshadow rounded-2xl  bg-white border ">
          <a href="">
            <img src={carrot} alt="" className="rounded-t-xl w-[400px] object-cover"/>
          </a>
        </div>


        <div className="m-auto boxshadow rounded-2xl bg-white border ">
        <a href="">
          <img src={Orange} alt="" className="rounded-t-xl w-[400px] object-cover"/>
        </a>
      </div>

      <div className="m-auto boxshadow rounded-2xl  bg-white border ">
      <a href="">
        <img src={pills} alt="" className="rounded-t-xl w-[400px] object-cover"/>
      </a>
    </div>

<div className="m-auto boxshadow rounded-2xl  bg-white border ">
      <a href="">
        <img src={tomatoe} alt="" className="rounded-t-xl w-[400px] object-cover"/>
      </a>
    </div>    
     
     </div>


     
     </div>
     </div>
  )
}

export default Portfolio