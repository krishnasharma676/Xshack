import React from "react";

const RocketShapeSection = () => {
  return (
    <div className="relative flex items-center justify-center h-[400px] bg-white">
      {/* Background Rocket Shape */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[60%] h-full bg-[#2D1C22] clip-rocket"></div>

      {/* Content Inside */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-3xl font-bold">Welcome to the Space Mission</h1>
        <p className="mt-2 text-lg">
          Explore the universe with our cutting-edge technology.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600">
          Launch Now
        </button>
      </div>
    </div>
  );
};

export default RocketShapeSection;
