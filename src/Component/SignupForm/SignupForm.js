import { useState } from "react";

export default function SignupForm() {
  const [activeTab, setActiveTab] = useState("Dispensary");

  return (
    <div className="flex mt-[40px] flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center uppercase">
        Sign up for updates and be among the first to join our community
      </h1>

      {/* Tabs */}
      <div className="flex mt-6 border border-gray-700 rounded-md overflow-hidden">
        <button
          className={`px-6 py-2 text-lg font-medium ${
            activeTab === "Dispensary" ? "bg-white text-black" : "bg-gray-800 text-gray-400"
          }`}
          onClick={() => setActiveTab("Dispensary")}
        >
          Dispensary
        </button>
        <button
          className={`px-6 py-2 text-lg font-medium ${
            activeTab === "Consumers" ? "bg-white text-black" : "bg-gray-800 text-gray-400"
          }`}
          onClick={() => setActiveTab("Consumers")}
        >
          Consumers
        </button>
      </div>

      {/* Form */}
      <div className="mt-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="w-full bg-black border border-gray-700 rounded-md px-4 py-3 mb-4 text-white placeholder-gray-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-black border border-gray-700 rounded-md px-4 py-3 mb-4 text-white placeholder-gray-400"
        />
        <input
          type="text"
          placeholder="Did anyone refer you? Add their email here!"
          className="w-full bg-black border border-gray-700 rounded-md px-4 py-3 mb-4 text-white placeholder-gray-400"
        />
        <input
          type="text"
          placeholder="Social or Website Link (optional)"
          className="w-full bg-black border border-gray-700 rounded-md px-4 py-3 mb-6 text-white placeholder-gray-400"
        />
        <button className="w-full hidden md:block bg-[#f3f0ed] text-black px-6 py-2 rounded-lg hover:bg-gray-400 transition-all duration-300">
          JOIN
        </button>
      </div>
    </div>
  );
}
