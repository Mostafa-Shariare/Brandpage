import React from 'react';

const Hero = () => {
  return (
    <section className="hero bg-black py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
      <div className="hero-text max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Welcome to <span className="text-blue-400">It'sCode</span>
        </h1>
        <p className="text-gray-300 mb-8 text-lg">
          Build. Break. Learn. Repeat. We help you master code and level up your skills.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500 transition">Get Started</button>
          <button className="border border-blue-400 text-blue-400 px-6 py-3 rounded hover:bg-blue-700 hover:text-white transition">Learn More</button>
        </div>
      </div>

      <div className="hero-image mt-10 md:mt-0 md:ml-10">
        <img 
          src="/hero.png" 
          alt="Hero visual"
          className="rounded shadow-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
