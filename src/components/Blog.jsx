import React from "react"
import Rectangle1 from "../assets/blog/Rectangle1.png"
import Rectangle2 from "../assets/blog/Rectangle2.png"
import Rectangle3 from "../assets/blog/Rectangle3.png"

function Blog() {
  return (
    <div className="bg-white">
    <div className="w-10/12 m-auto py-8 ">
     <div className="w-10/12 m-auto">
     <button className="flex items-center bg-green-700 text-green-700 my-5 px-9 text-sm rounded-full  ">fddddd</button>
     <h1 className="lg:text-3xl text-left font-bold">
      Featured Farmers
     </h1>
          <p className="py-2 text-left text-xl">
          See our top pick for farmers by people
          </p>
          
     </div>
     
     <div className="grid sm:grid-cols-1 md:grid-cols-3 py-7 gap-1">
     <div className=" m-auto max-w-sm rounded-xl  bg-white border border-gray-300 ">
     <a href="">
              <img src={Rectangle1} alt="" className="rounded-t-xl w-[600px] object-cover"/>
            </a>
            <div className="p-4">
              <h1 className="pb-1 text-xl font-bold">Ogendegbe Owolabi</h1>
                <h1 className="text-green-500 text-lg">
                Lagos, Nigeria
                </h1>
            </div>
          </div>

          <div className=" m-auto max-w-sm rounded-xl  bg-white border border-gray-300 ">
          <a href="">
                   <img src={Rectangle2} alt="" className="rounded-t-xl w-[600px] object-cover"/>
                 </a>
                 <div className="p-4">
                   <h1 className="pb-1 text-xl font-bold ">Buhari Aminat</h1>
                     <h1 className="text-green-500 text-lg">
                     Kano, Nigeria
                     </h1>
                 </div>
               </div>

    <div className=" m-auto max-w-sm rounded-xl  bg-white border border-gray-300 ">
    <a href="">
             <img src={Rectangle3} alt="" className="rounded-t-xl w-[600px] object-cover"/>
           </a>
           <div className="p-4">
             <h1 className="pb-1 text-xl font-bold">Okoro Kamsiochukwu</h1>
               <h1 className="text-green-500 text-lg">
               Anambra, Nigeria
               </h1>
           </div>
         </div>


     </div>

     
     </div>
     </div>
   
  )
}

export default Blog