import React from "react"
import { Link } from "react-router-dom";
const Testimonial = () => {
  return (
    <div className="bg-white">
    <div className="w-10/12 m-auto py-8 ">
    <div className="w-10/12 m-auto py-5">
    <button className="flex items-center bg-gray-200 text-gray-200 my-2 px-11 text-sm rounded-full  ">fddddd</button>
   <h1 className="lg:text-3xl text-left font-bold py-2">Browse by State</h1>
   <p className="text-lg text-left">
   Select the state you are in to  get farmers in tha state
   </p>
   </div>

    <div className="grid sm:grid-cols-1 md:grid-cols-4 w-11/12 m-auto gap-8">
    
    
      <div className="py-6 pb-6 text-green-600">
        <ul className="py-2">
        <Link to="">
         <li className="py-2 text-2xl font-semibold cursor-pointer">Abia</li>
        </Link>
        <Link to="">
         <li className="py-2 text-2xl font-semibold cursor-pointer">Bayelsa</li>
        </Link>
        <Link to="">
         <li className="py-2 text-2xl font-semibold cursor-pointer">Ebonyi</li>
        </Link>
        <Link to="">
         <li className="py-2 text-2xl font-semibold cursor-pointer">Imo</li>
        </Link>
        <Link to="">
         <li className="py-2 text-2xl font-semibold cursor-pointer">Kebbi</li>
        </Link>
        <Link to="">
         <li className="py-2 text-2xl font-semibold cursor-pointer">Ogun</li>
        </Link>
        <Link to="">
         <li className="py-2 text-2xl font-semibold cursor-pointer">Rivers</li>
        </Link>
        </ul>
      </div>
    
    
      <div className="py-6 text-green-600">
        <ul className="py-2">
        <Link to="">
         <li className="py-2 text-2xl font-semibold cursor-pointer">Adamawa</li>
        </Link>
        <Link to="">
         <li className="py-2 text-2xl font-semibold cursor-pointer">Benue</li>
        </Link>
        <Link to="">
         <li className="py-2 text-2xl font-semibold cursor-pointer">Edo</li>
        </Link>
        <Link to="">
         <li className="py-2 text-2xl font-semibold cursor-pointer">Jigawa</li>
        </Link>
        <Link to="">
         <li className="py-2 text-2xl font-semibold cursor-pointer">Kogi</li>
        </Link>
        <Link to="">
         <li className="py-2 text-2xl font-semibold cursor-pointer">Ondo</li>
        </Link>
        <Link to="">
         <li className="py-2 text-2xl font-semibold cursor-pointer">Sokoto</li>
        </Link>
        </ul>
      </div>
   

    
    <div className="py-6 text-green-600">
      <ul className="py-2">
      <Link to="">
    <li className="py-2 text-2xl font-semibold cursor-pointer">Akwa-Ibom</li>
   </Link>
      <Link to="">
       <li className="py-2 text-2xl font-semibold cursor-pointer">Borno</li>
      </Link>
      <Link to="">
       <li className="py-2 text-2xl font-semibold cursor-pointer">Ekiti</li>
      </Link>
      <Link to="">
       <li className="py-2 text-2xl font-semibold cursor-pointer">Kaduna</li>
      </Link>
      <Link to="">
       <li className="py-2 text-2xl font-semibold cursor-pointer">kwara</li>
      </Link>
      <Link to="">
       <li className="py-2 text-2xl font-semibold cursor-pointer">Osun</li>
      </Link>
      <Link to="">
       <li className="py-2 text-2xl font-semibold cursor-pointer">Taraba</li>
      </Link>
      </ul>
    </div>
  

 
  <div className="py-6 text-green-600">
    <ul className="py-2">
    <Link to="">
    <li className="py-2 text-2xl font-semibold cursor-pointer">Anambra</li>
   </Link>
    <Link to="">
     <li className="py-2 text-2xl font-semibold cursor-pointer">Cross River</li>
    </Link>
    <Link to="">
     <li className="py-2 text-2xl font-semibold cursor-pointer">Enugu</li>
    </Link>
    <Link to="">
     <li className="py-2 text-2xl font-semibold cursor-pointer">Kano</li>
    </Link>
    <Link to="">
     <li className="py-2 text-2xl font-semibold cursor-pointer">Lagos</li>
    </Link>
    <Link to="">
     <li className="py-2 text-2xl font-semibold cursor-pointer">oyo</li>
    </Link>
    <Link to="">
     <li className="py-2 text-2xl font-semibold cursor-pointer">Yobe</li>
    </Link>
    </ul>
  </div>

    
  </div>
  </div>
    </div>
  )
}

export default Testimonial