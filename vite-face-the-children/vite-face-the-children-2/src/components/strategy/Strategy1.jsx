import React from 'react';

const Strategy1 = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-start">
      
      <div>
        <small className="text-orange-500 uppercase mb-2">The Problem</small>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Rescuing Lives from Poverty and Abuse</h2>
        <p className="text-gray-600 mb-8">
          Historically in the Philippines, due to widespread poverty, the problem of abandoned, abused, or dangerously neglected (AADN) children has been remarkably large...
        </p>

        <small className="text-orange-500 uppercase mb-2">Our Action</small>
        <h2 className="text-3xl font-bold text-blue-400 mb-4">Creating Lasting Change <br /> through Our Intervention</h2>
        <p className="text-gray-600 mb-6">
        The Face the Children (FTC) program is established to serve AADN children through a program that provides protection, care, nurture, education, and spiritual development that affords them a genuinely greater opportunity for a dignified and meaningful adult life.
        </p>

        <div className="space-y-4">
          {[
            { title: 'Protect', text: 'We provide a safe environment and place for those living in our children’s homes, who are provided full-time care.' },
            { title: 'Care', text: 'We meet the basic physical and material needs for the children in the FTC program.' },
            { title: 'Nurture', text: 'We provide loving oversight that involves listening, counseling, and prayer. We do our best to be a parent figure in the lives of the children.' },
            { title: 'Education', text: 'We provide K-12 educational services for all the children in our program, as well as opportunities for University for the higher achievers.' },
            { title: 'Spiritual Development', text: 'As Christians we believe spiritual well-being comes through a meaningful relationship with God. The Bible is our main source of spiritual direction and guidance.' }
          ].map((item, index) => (
            <div key={index}>
              <h5 className="text-blue-400 font-semibold">{item.title}</h5>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div className="flex flex-col items-center space-y-6">
        <img
          src="https://facethechildren.org/images/website/s-banner.webp"
          alt="FTC Banner Quote"
          
        />
        
      </div>
    </section>
  );
};

export default Strategy1;
