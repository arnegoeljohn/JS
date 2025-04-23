import React from "react";

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-16">
      {/* Text Content */}
      <div className="w-full md:w-1/2 md:pr-8">
        <small className="text-orange-400 text-sm uppercase">
          Our Solutions
        </small>
        <h2 className="text-3xl font-semibold text-blue-400 mt-2 mb-4">
          Services We Provide
        </h2>
        <p className="text-gray-700 mb-8 md:max-w-sm">
          Making a difference in the lives of children can be simplified into a
          few essential actions focused on their overall well-being. Here are
          the things we provide for our children
        </p>
        <a
          href="#sponsor"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Learn more
        </a>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 mt-12 md:mt-0">
        <img
          src="./img/Home/h-service.webp"
          alt="Children Graphic"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Services;
