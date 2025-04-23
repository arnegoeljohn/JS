import React, { useState } from "react";

const childrens = [
  {
    name: "Trixie Mae N",
    sponsored: "37.50% ",
    img: "./img/Sponsor/sponsor-18.jpg",
  },
  {
    name: "Danica V",
    sponsored: "40.00%",
    img: "./img/Sponsor/sponsor-19.jpg",
  },
  {
    name: "Rose Mae N",
    sponsored: "40.00%",
    img: "./img/Sponsor/sponsor-20.jpg",
  },
  {
    name: "Rachelle M",
    sponsored: "42.00%",
    img: "./img/Sponsor/sponsor-21.jpg",
  },
  {
    name: "Richard T",
    sponsored: "45.00%",
    img: "./img/Sponsor/sponsor-22.jpg",
  },
  {
    name: "Mary Grace V",
    sponsored: "50.00%",
    img: "./img/Sponsor/sponsor-23.jpg",
  },
  {
    name: "Eugene Lance D",
    sponsored: "52.50%",
    img: "./img/Sponsor/sponsor-24.jpg",
  },
  {
    name: "Gladys T",
    sponsored: "57.50%",
    img: "./img/Sponsor/sponsor-25.jpg",
  },
  {
    name: "Julie Ann T",
    sponsored: "60.00%",
    img: "./img/Sponsor/sponsor-26.jpg",
  },
  {
    name: "Mark John B",
    sponsored: "85.00%",
    img: "./img/Sponsor/sponsor-27.jpg",
  },
  {
    name: "Marian Nhicole B",
    sponsored: "100.00%",
    img: "https://facethechildren.org/images/opt-marian.jpg",
  },
];

const Modal = ({ child, onClose }) => {
  if (!child) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-md w-[90%] max-w-md p-6 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-lg font-bold"
        >
          ×
        </button>
        <h2 className="text-lg font-semibold mb-4">Sponsor {child.name}</h2>

        <div className="space-y-2">
          <p className="text-sm">Choose amount</p>
          <div className="grid grid-cols-2 gap-2">
            {[20, 40, 50, 80, 100, 200, 400].map((amount) => (
              <label key={amount} className="flex items-center gap-2">
                <input type="radio" name="amount" value={amount} />${amount}.00
              </label>
            ))}
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Frequency<span className="text-red-500">*</span>
            </label>
            <select
              className="w-full border border-gray-300 rounded p-2 mt-1"
              required
            >
              <option value="">--</option>
              <option value="Monthly">Monthly</option>
              <option value="One-Time">One-Time</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Remarks</label>
            <textarea className="w-full border rounded p-2 mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="w-full border rounded p-2 mt-1" />
          </div>

          <button className="mt-4 bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">
            Proceed
          </button>

          <div className="text-center mt-3">
            <img
              src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
              alt="Payment"
              className="mx-auto w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ChildGridSecond = () => {
  const [selectedChild, setSelectedChild] = useState(null);

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center gap-6">
        {childrens.map((childs, index) => {
          const sponsoredPercent = parseFloat(
            childs.sponsored.replace("%", "")
          );

          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-md overflow-hidden flex flex-col w-full sm:w-[48%] md:w-[30%] lg:w-[22%] max-w-[300px]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={childs.img}
                  alt={childs.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-3 z-10">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-semibold">{childs.name}</h3>
                    <button
                      onClick={() => setSelectedChild(childs)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs"
                    >
                      Sponsor →
                    </button>
                  </div>
                  <a href="#" className="text-orange-300 text-xs">
                    View Info
                  </a>
                </div>
              </div>

              <div className="relative w-full h-7 bg-orange-300">
                <div
                  className="absolute top-0 left-0 h-full bg-orange-500"
                  style={{ width: `${sponsoredPercent}%` }}
                ></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-semibold text-sm z-10">
                  {childs.sponsored} - Sponsored
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Modal child={selectedChild} onClose={() => setSelectedChild(null)} />
    </div>
  );
};

export default ChildGridSecond;
