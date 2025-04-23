import React from "react";

const VisionAbout = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 flex flex-col-reverse flex-col md:flex-row lg:flex-row items-center justify-between gap-11">
      <div className="max-w-xl md:mr-10 flex-1">
        <small className="text-orange-400 text-sm uppercase">Vision</small>
        <h2 className="text-3xl font-semibold text-blue-400 mt-2 mb-4">
          Empowering Change, <br /> Inspiring Purpose
        </h2>
        <p className="text-gray-700 mb-8">
          A nationwide network of child care centers committed <br /> to the
          advocacy, protection, care and development of <br /> abandoned,
          abused, or dangerously neglected children.
        </p>
      </div>
      <div className="mb-12 md:mb-0 md:w-3/5">
        <img src="./img/About/about-vision.webp" alt="about vision" />
      </div>
    </section>
  );
};

export default VisionAbout;
