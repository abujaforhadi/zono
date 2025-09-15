import React from "react";

function HeroSection() {
  return (
    <div className="py-20 text-[#212121] flex flex-col justify-center items-center gap-6 mt-20">
      <h1 className="text-xl font-bold text-center  bg-gray-200 p-2 rounded-xl">
        Personal Growth
      </h1>
      <p className="text-7xl font-extrabold text-center mt-4 text-[#303A46]">
        Feel more <br /> human every day
      </p>
      <button className="bg-[#b6db7d] px-4 py-2 rounded-lg text-[#415326] hover:bg-[#98b869]">
        Request demo
      </button>
    </div>
  );
}

export default HeroSection;
