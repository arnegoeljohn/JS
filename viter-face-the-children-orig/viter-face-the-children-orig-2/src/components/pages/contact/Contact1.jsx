import React from "react";

const Contact1 = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 md:grid md:grid-cols-2 md:items-start gap-10 mt-11">
        <div className="mt-11">
          <small className="text-sm text-orange-500 uppercase mt-5 block">
            Let's Talk
          </small>
          <h2 className="text-3xl font-semibold text-primary mb-4 mt-6">
            We're Here for You
          </h2>
          <p className="text-gray-600 mb-4 mt-5">
            We believe in building strong relationships and fostering a sense of
            community. Your feedback and inquiries are important to us, and we
            strive to respond as quickly and thoroughly as possible.
          </p>
          <div className="py-5 mt-6">
            <p className="mb-2 text-gray-600 mt-2">
              Feel free to get in touch with us via phone:
            </p>
            <p className="mb-2 text-sm mt-2">
              <strong className="text-primary">Philippines:</strong>{" "}
              <strong className="text-primary">
                <a href="tel:+639274203409">+63 927 420 3409</a>
              </strong>
              <strong className="text-primary ml-5">USA:</strong>{" "}
              <strong className="text-primary">
                <a href="tel:+18157979177">+815 797 9177</a>
              </strong>
            </p>
          </div>
          <p className="text-gray-600 mt-6">
            Visit us here in the Philippines:
            <a
              href="https://maps.google.com/?q=Frontline Mission Center, Sitio Subac, Brgy. Sto Niño, San Pablo City, 4000 Laguna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold block mt-5"
            >
              Frontline Mission Center, Sitio Subac, <br />
              Brgy. Sto Niño, San Pablo City, 4000 Laguna
            </a>
          </p>
        </div>

        <form className="space-y-6 w-full max-w-xl mx-auto md:self-start mt-6">
          {["Name", "Email", "Phone", "Subject"].map((label, i) => (
            <div key={i} className="relative w-full mt-11">
              <input
                type={
                  label === "Email"
                    ? "email"
                    : label === "Phone"
                    ? "tel"
                    : "text"
                }
                required
                className="peer w-full px-5 pt-3 pb-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary text-base"
              />
              <label className="absolute left-4 -top-2 text-xs bg-white px-1 text-primary">
                {label}
              </label>
            </div>
          ))}
          <div className="relative w-full mt-6">
            <textarea
              required
              rows="6"
              className="w-full border border-gray-300 rounded-md px-5 pt-4 pb-3 text-base focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
            />
            <label className="absolute left-4 -top-2 text-xs bg-white px-1 text-primary">
              Message
            </label>
          </div>

          <div className="border border-gray-300 px-6 py-2 rounded bg-white flex flex-col space-y-0.5 w-96 mt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <input type="checkbox" id="robot" className="w-4 h-4" />
                <label htmlFor="robot" className="text-sm text-gray-700">
                  I'm not a robot
                </label>
              </div>
              <div className="flex flex-col items-center ml-4">
                <img
                  src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                  alt="reCAPTCHA"
                  className="w-8 h-8"
                />
                <div className="text-[10px] text-gray-400 mt-0.5">
                  reCAPTCHA
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-orange-200 text-white py-2 px-6 rounded-md mt-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact1;
