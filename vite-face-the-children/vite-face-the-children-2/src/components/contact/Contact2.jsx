// Contact2.jsx
import React from "react";

const team = [
  {
    name: "Judea Delos Santos",
    role: "Communication & Development Staff",
    email: "judeadelossantos@thefrontline.asia",
    img: "https://facethechildren.org/images/website/team-judea.webp",
  },
  {
    name: "Michael Gordon",
    role: "Spiritual Director",
    email: "mike.gordon@thefrontline.asia",
    img: "https://facethechildren.org/images/website/team-mike.webp",
  },
  {
    name: "John Katigbak",
    role: "Managing Director",
    email: "john.katigbak@thefrontline.asia",
    img: "https://facethechildren.org/images/website/team-jp.webp",
  },
];

const Contact2 = () => {
  return (
    <div className="text-center px-6 py-12 bg-gray-50">
      <small className="text-sm text-orange-400 uppercase mb-2">Get to know us</small>
      <h2 className="text-3xl font-semibold text-blue-400 mb-10">Our Dedicated Team</h2>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {team.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.img}
              alt={member.name}
             
            />
            <h3 className="text-lg font-semibold text-blue-400">{member.name}</h3>
            <p className="text-sm  text-gray-700">{member.role}</p>
            <a href={`mailto:${member.email}`} className="text-blue-300 text-sm">
              {member.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact2;
