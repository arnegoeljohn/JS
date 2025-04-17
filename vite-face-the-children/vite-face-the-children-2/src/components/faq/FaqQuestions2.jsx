import React from 'react';

const FaqQuestions2 = () => {
  return (
    <div className="bg-blue-50 mt-16 py-10 px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <small className="text-sm text-orange-400 uppercase mb-2">
            Frequently Asked Question
          </small>
          <h3 className="text-2xl font-bold text-blue-400">
            Can’t find what you are looking for?
          </h3>
          <p className="text-gray-600 mt-2">
            If your question is not listed above, you can use the form to send directly to us your questions.
          </p>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
          <input type="tel" placeholder="Phone" className="w-full border p-2 rounded" />
          <input type="text" placeholder="Subject" className="w-full border p-2 rounded" />
          <textarea placeholder="Message" rows="4" className="w-full border p-2 rounded" />
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" id="robot" />
            <label htmlFor="robot">I'm not a robot</label>
          </div>
          <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FaqQuestions2;
