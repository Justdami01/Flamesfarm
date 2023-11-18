import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function Search() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-10/12 m-auto py-8">
      <div className="py-4">
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-4 gap-4">
          <div className="flex flex-col">
          <label htmlFor="Email" className="py-2 text-xl">
          Search
          </label>
          <input
            type="email"
            id="Email"
            placeholder="Search for a farmer, farm or landmark"
            className="outline-none border-[2px] border-gray-400 p-2 rounded"
          />
        </div>
            <div className="flex flex-col">
              <label htmlFor="Email" className="py-2 text-xl">
              Locations
              </label>
              <input
                type="email"
                id="Email"
                placeholder="All locations"
                className="outline-none border-[2px] border-gray-400 p-2 rounded"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="Phone" className="py-2 text-xl">
              Services
              </label>
              <input
                type="text"
                id="Phone"
                placeholder="All Services"
                className="outline-none border-[2px] border-gray-400 p-2 rounded"
              />
            </div>
            <div className="pt-5">
              <button className="flex items-center bg-green-700 text-white pt-2 p-3 my-5 px-5 text-xl rounded hover:text-white hover:hover:font-bold ">
                Find farmers
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
