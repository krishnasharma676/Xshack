import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
        <div className="flex justify-center">
          <div className="max-w-md p-6 bg-white text-gray-900 rounded-lg shadow-lg">
            <p className="mb-4">"Excellent service and great team!"</p>
            <h4 className="font-bold">John Doe</h4>
            <p className="text-sm">CEO, Company</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
