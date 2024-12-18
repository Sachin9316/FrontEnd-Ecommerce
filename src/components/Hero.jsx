import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-gray-900 to-black text-center w-full">
      <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4">
        Welcome to the Future of Technology
      </h1>
      <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
        Revolutionizing the digital experience with cutting-edge tech solutions
        that empower your business and enhance your daily life.
      </p>
      <a
        href="#features"
        className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-400 transition"
      >
        Discover More
      </a>
    </section>
  );
};

export default Hero;
