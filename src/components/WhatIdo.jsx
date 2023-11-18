import React from "react"
import { BsPlusCircleFill } from "react-icons/bs";
const WhatIdo = () => {
  return (
    <div className="bg-gray-100">
    <div className="w-10/12 m-auto py-8 ">
     <div className="w-10/12 m-auto">
     <button className="flex items-center bg-gray-200 text-gray-200 my-2 px-11 text-sm rounded-full  ">fddddd</button>
    <h1 className="lg:text-3xl text-left font-bold py-2">How it works</h1>
    <p className="text-lg text-left">
      We have been working with some Fortune 500+ clients
    </p>
    </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
      
      <div className="flex items-left py-4">
     <div className="w-10/12 bg-gray-100 m-auto md:py-4 py-8 p-4 border-gray-100 rounded-xl">
     <h1 className="flex items-center font-bold text-3xl"><BsPlusCircleFill size={30} className="text-green-600 mr-4" />Search</h1>
     <p className="md:flex md:gap-5 py-2 text-xl">Click the search bar to either<br/> 
     search for a farmer, farm or type a<br/>
     location to select farms nearby</p>
     </div>
     </div>

      <div className="flex items-left py-4">
     <div className="w-10/12 bg-gray-100 m-auto md:py-4 py-8 p-4 border-gray-100 rounded-xl">
     <h1 className="flex items-center font-bold text-3xl"><BsPlusCircleFill size={30} className="text-green-600 mr-4" />Select</h1>
     <p className="md:flex md:gap-5 py-2 text-xl">Select from the list a farm or<br/>
     farmer of your choice to view <br/>
     fruits and vegies in stock</p>
     </div>
     </div>
     
       <div className="flex items-left py-4">
       <div className="w-10/12 bg-gray-100 m-auto md:py-4 py-8 p-4 border-gray-100 rounded-xl">
       <h1 className="flex items-center font-bold text-3xl"><BsPlusCircleFill size={30} className="text-green-600 mr-4" />Order</h1>
       <p className="md:flex md:gap-5 py-2 text-xl">You can choose to order for your<br/>
       veggies by placing a call across<br/>
       or by adding to cart</p>
       </div>
       </div>

      </div>
      
      </div>
    </div>
  )
}

export default WhatIdo