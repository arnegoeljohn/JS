import React from "react";

const Section = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto gap-11">
      {/* Image first on mobile view */}
      <div className="mt-12 lg:mt-0 lg:ml-12 mb-6">
        <img src="./img/Home/h-about.webp" alt="img3" />
      </div>

      {/* Text section */}
      <div className="max-w-xl md:ml-12 md:w-1/2">
        <small className="text-orange-500 text-sm uppercase">Who We Are</small>
        <h2 className="text-3xl font-semibold text-blue-400 mt-2 mb-4">
          Let's Share to Change a life today
        </h2>
        <p className="text-gray-700 mb-8">
          When we come together as a community, our collective efforts can lead
          to monumental changes. By fostering a culture of sharing, we not only
          help those in immediate need but also build a foundation of support
          and compassion that benefits everyone.
        </p>
        <div className="grid grid-cols-2 gap-y-6">
          <div>
            <p className="text-4xl text-orange-400 font-semibold">20+</p>
            <p className="text-gray-700 text-sm">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl text-orange-400 font-semibold">10+</p>
            <p className="text-gray-700 text-sm">Volunteers</p>
          </div>
          <div>
            <p className="text-4xl text-orange-400 font-semibold">30+</p>
            <p className="text-gray-700 text-sm">Resident Child</p>
          </div>
          <div>
            <p className="text-4xl text-orange-400 font-semibold">10+</p>
            <p className="text-gray-700 text-sm">Non-Resident Child</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
