import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const faqs = [
  {
    question: 'Can I communicate with the child I have made a Pledge to?',
    answer: 'Yes. You can email them, but all communication is monitored by FTC management.',
  },
  {
    question: 'How can you make sure our payment is secure?',
    answer: 'Our online donation transaction is a secure SSL encrypted payment using Stripe payment processor with the best-in-class security tools and practices to maintain a high level of security.',
  },
  {
    question: 'Can I update my card number using your website?',
    answer: 'Yes. You can change it on your account settings. Login to your donor console',
  },
  {
    question: 'Will I receive personal updates from FTC and the child I pledge to on a regular basis?',
    answer: 'Yes, you will receive regular updates about the progress and developments of our program. Additionally, from time to time you will receive communications directly from the child you sponsor.',
  },
  {
    question: 'Can I make a pledge to more than one FTC Child?',
    answer: 'Yes. We welcome your pledges to as many children as possible!',
  },
  {
    question: 'Can I make a Partner Pledge for the entire monthly care of a child in the FTC program?',
    answer: 'Yes. But the full-care sponsorship of a child in our program is limited to $200 monthly. Therefore, if a child has current sponsorship pledges, the website will allow only the remaining balance necessary for full-care coverage.',
  },
  {
    question: 'How much does an FTC Child Partner Pledge Cost?',
    answer: 'You can partner with us by sponsoring a child for as little as $20 monthly. You can also select higher sponsorship amounts if the child has remaining full-care needs. Please see the options presented for a selected child on the sponsorship page.',
  },
];

const FaqQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h4 className="text-sm text-orange-500 font-semibold uppercase mb-2 tracking-wide">
          Your Questions, Our Clarity
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Commitment to Child Development
        </h2>
      </div>

      <div className="space-y-4 relative">
        {faqs.map((faq, index) => (
          <div key={index} className="relative md:flex md:items-start">
            {/* Question */}
            <button
              onClick={() => handleClick(index)}
              className={`
                w-full md:w-1/2 text-left px-9 py-4 rounded-md transition
                font-medium text-gray-700 border border-gray-200 hover:bg-blue-50 hover:border-blue-300 flex
                ${activeIndex === index ? 'bg-blue-100 border-blue-400 text-blue-700' : ''}
                relative
              `}
            >
              <span className="mr-4 font-bold text-blue-400">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="inline-block w-[calc(100%-2rem)]">{faq.question}</span>
              <ChevronRight
                className={`w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 transition-transform ${
                  activeIndex === index ? 'rotate-90 text-blue-500' : ''
                }`}
              />
            </button>

            {/* Answer */}
            {activeIndex === index && (
              <div
                className={`
                  md:absolute md:left-[calc(50%+1rem)] md:top-0
                  mt-4 md:mt-0 w-full md:w-[300px]
                  border border-blue-300 bg-blue-50 p-4 rounded text-gray-700 shadow-lg z-10
                `}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqQuestions;
