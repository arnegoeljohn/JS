import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Contact1 = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log("Captcha value:", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please verify that you're not a robot.");
      return;
    }
    // Proceed with form submission logic
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 lg:flex justify-between items-start gap-10">
        {/* Left Column */}
        <div className="lg:w-1/2">
          <p className="text-sm text-gray-500 uppercase">Let's Talk</p>
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            We're Here for You
          </h2>
          <p className="text-gray-600 mb-4">
            We believe in building strong relationships and fostering a sense of community.
            Your feedback and inquiries are important to us, and we strive to respond as
            quickly and thoroughly as possible.
          </p>
          <p className="mb-2">
            Feel free to get in touch with us via phone:
          </p>
          <p className="mb-2">
            <strong>Philippines:</strong>{" "}
            <a href="tel:+639274203409" className="text-blue-500">
              +63 927 420 3409
            </a>
          </p>
          <p className="mb-4">
            <strong>USA:</strong>{" "}
            <a href="tel:+18157979177" className="text-blue-500">
              +815 797 9177
            </a>
          </p>
          <p>
            Visit us here in the Philippines: <br />
            <a
              href="https://maps.google.com/?q=Frontline Mission Center, Sitio Subac, Brgy. Sto Niño, San Pablo City, 4000 Laguna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Frontline Mission Center, Sitio Subac, Brgy. Sto Niño, San Pablo City, 4000 Laguna
            </a>
          </p>
        </div>

        {/* Right Column - Form */}
        <form onSubmit={handleSubmit} className="lg:w-1/2 space-y-4 mt-10 lg:mt-0">
          <input type="text" placeholder="Name" className="w-full p-3 border rounded" required />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded" required />
          <input type="tel" placeholder="Phone" className="w-full p-3 border rounded" />
          <input type="text" placeholder="Subject" className="w-full p-3 border rounded" />
          <textarea placeholder="Message" rows="5" className="w-full p-3 border rounded" />

          {/* Google reCAPTCHA */}
          <div className="pt-2">
            <ReCAPTCHA
              sitekey="YOUR_RECAPTCHA_SITE_KEY" // <- Replace this with your site key
              onChange={handleCaptchaChange}
            />
          </div>

          <button
            type="submit"
            className={`${
              captchaValue ? "bg-yellow-400 hover:bg-yellow-500" : "bg-yellow-200"
            } text-white px-6 py-2 rounded transition`}
            disabled={!captchaValue}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact1;
