import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url("https://via.placeholder.com/1500x800")' }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white p-8">
          <h1 className="text-5xl font-bold mb-4">Welcome to XShark</h1>
          <p className="text-xl mb-6">We provide amazing solutions for your business</p>
          <button className="bg-yellow-500 px-8 py-4 text-lg rounded-lg hover:bg-yellow-600">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
