import React from "react";
import star from "../assets/mac/star.png";
import broccoli1 from "../assets/mac/broccoli1.png";
import broccoli2 from "../assets/mac/broccoli2.png";
import broccoli3 from "../assets/mac/broccoli3.png";
import broccoli4 from "../assets/mac/broccoli4.png";
import broccoli5 from "../assets/mac/broccoli5.png";
import broccoli6 from "../assets/mac/broccoli6.png";

function Macbook() {
  return (
    <div className="bg-white">
      <div className="w-11/12 mx-auto py-8">
        <div className="w-10/12 m-auto py-5">
          <h1 className="lg:text-3xl font-bold">
          Click add to cart to buy
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {renderProduct(broccoli1, "Farm fresh aromatic bulbs harvested at peak for savory dishes. Kitchen essential", "N-7,000")}
          {renderProduct(broccoli2, "Vibrant burst of citrus from freshly picked oranges", "N-2,000")}
          {renderProduct(broccoli3, "Plum, succulent and flavorful grapes carefully grown in local vineyards", "N-7,000")}
          {renderProduct(broccoli4, "Vibrant and nutritious broccoli for healthy and nutritious meals", "N-20,000")}
          {renderProduct(broccoli5, "Farm-fresh cucumbers for delightful addition to salads and a snack", "N-1,000")}
          {renderProduct(broccoli6, "Crisp, wholesome farm-fresh cabbage for colesaws and stews", "N-5,000")}
        </div>
      </div>
    </div>
  );
}

function renderProduct(image, description, price) {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="w-full md:w-10/12 lg:w-9/12 xl:w-8/12 bg-white p-4 border border-gray-300 rounded-lg">
        <img src={image} alt="" className="mx-auto w-full md:w-[250px] lg:w-[300px] xl:w-[350px]" />
        <p className="text-lg text-center">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 flex text-center items-center">
          <h1 className="text-lg font-bold py-4">{price}</h1>
          <img src={star} alt="" className="flex items-center w-[100px]" />
        </div>
        <button className="flex items-center bg-green-700 text-white p-3 my-4 mx-auto  px-16 text-xl rounded hover:text-white hover:hover:font-bold">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Macbook;
