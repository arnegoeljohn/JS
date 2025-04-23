import React from "react";

const ChildDetails = () => {
  const child = {
    name: "John Luke B",
    sponsored: "0.00%",
    img: "https://facethechildren.org/images/John-luke-b.jpg",
    age: "12",
    birthday: "Jul 3, 2013",
    story:
      "John Luke, or JL, as he is called by his friends was neglected and then abandoned by his parents. When the mother and father separated JL and his siblings were in the care of their mother. The mother went to work overseas and left them in the care of another man who abandoned them. The mother does not respond to contact. JL is enrolled in grade 3 at Frontline Christian Academy and is interacting well within Face the Children.",
  };

  return (
<div className="max-w-6xl mx-auto mt-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Image and sponsor tag */}
  <div>
    <img
      src={child.img}
      alt={child.name}
      
    />
    <div className="bg-orange-400 text-white font-semibold py-2 px-4 text-sm text-center">
      {child.sponsored} ~ Sponsored
    </div>
  </div>




      {/* Text content */}
      <div className="flex flex-col justify-start space-y-3">
        <h2 className="text-xl font-bold">{child.name}</h2>
        <p className="text-gray-700 text-sm">
          <strong>Age:</strong> {child.age}
        </p>
        <p className="text-gray-700 text-sm">
          <strong>Birthday:</strong> {child.birthday}
        </p>
        <h3 className="text-md font-semibold mt-4">My Story</h3>
        <p className="text-gray-800 text-sm leading-relaxed">
          {child.story}
        </p>
        <div className="mt-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md">
            Sponsor Now
          </button>
        </div>
      </div>
    </div>


  );
};

export default ChildDetails;
