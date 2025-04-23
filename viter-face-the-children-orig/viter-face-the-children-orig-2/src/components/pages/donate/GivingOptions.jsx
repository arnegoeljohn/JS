import React, { useState } from "react";
import givingOptions from "./DonateData";
import { MdArrowForward } from "react-icons/md";

const GivingOptions = () => {
  const [showChildGrid, setShowChildGrid] = useState(false);

  const handleDonateClick = () => {
    setShowChildGrid(true);
  };

  const closeChildGrid = () => {
    setShowChildGrid(false);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex md:flex-wrap justify-center gap-3 mt-20">
          {givingOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white shadow rounded overflow-hidden flex flex-col w-72 min-h-[620px]"
            >
              <img
                src={option.image}
                alt={option.title}
                className="w-full h-[350px] object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold">{option.title}</h3>
                <p className="text-gray-600 flex-1 mt-2">
                  {option.description}
                </p>

                <div className="flex flex-col gap-2 mt-4">
                  <button className="text-textyellow flex items-center gap-2 hover:text-yellow-700">
                    <span className="w-4 h-4 flex items-center justify-center rounded-full border-2 border-textyellow text-textyellow ">
                      <MdArrowForward className="text-xs font-bold " />
                    </span>
                    Read More
                  </button>
                </div>

                <div className="mt-auto pt-6">
                  <button
                    className="bg-primary text-white text-sm px-4 py-1.5 rounded hover:bg-opacity-90 transition"
                    onClick={() => setShowModal(true)}
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showChildGrid && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-start pt-20 overflow-auto mt-11">
          <div className="bg-white w-full max-w-7xl mx-auto rounded shadow-lg relative mt-11">
            <button
              onClick={closeChildGrid}
              className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
            <ChildGridWrapper />
          </div>
        </div>
      )}
    </section>
  );
};

export default GivingOptions;
