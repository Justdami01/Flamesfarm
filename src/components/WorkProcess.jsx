import React from "react"
import Banana from "../assets/food/Banana.jpg"
import carrot from "../assets/food/carrot.jpg"
import moo from "../assets/food/moo.jpg"

const WorkProcess = () => {
  return (
    <div className="bg-white">
   

     <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 py-8">
      
     <div className="text-center w-10/12 bg-white m-auto md:py-4 py-8 p-4 rounded-xl">
     <div className="w-[26%] m-auto">
     <img src={Banana} alt="" className="w-[300px] rounded-full text-center" />
     </div>
     <h1 className="font-bold text-3xl py-4">Fruits</h1>
     <p className="text-center text-xl font-semibold">Explore to get the best deals on<br/>
     fruits varieties </p>
     </div>

     <div className="text-center w-10/12 bg-white m-auto md:py-4 py-8 p-4 rounded-xl">
     <div className="w-[26%] m-auto">
     <img src={carrot} alt="" className="w-[300px] rounded-full text-center" />
     </div>
     <h1 className="text-3xl font-bold py-4">Vegatabless</h1>
     <p className="text-center text-xl font-semibold"> Get farm fresh vegetables for <br/> 
     your healthy meals</p>
     </div>
     
     <div className="text-center w-10/12 bg-white m-auto md:py-4 py-8 p-4 rounded-xl">
     <div className="w-[26%] m-auto">
     <img src={moo} alt="" className="w-[300px] rounded-full text-center" />
     </div>
     <h1 className="font-bold text-center text-3xl py-4">Livestocks</h1>
     <p className="text-center text-xl font-semibold">You can buy live farm animals or <br/>
     processed one </p>
     </div>

      </div>
     
    </div>
  )
}

export default WorkProcess