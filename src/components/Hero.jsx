// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section
      className="bg-white py-16 px-6 flex flex-col-reverse md:flex-row items-center md:items-start md:justify-between max-w-6xl mx-auto"
    >
      {/* Left Column: Text and Info */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <h1 className="text-5xl font-spectral font-bold text-[#1e1e1e] leading-tight">
          Hi, I’m Ashley
        </h1>
        <p className="mt-6 text-gray-700 text-base leading-relaxed font-outfit">
          I am a detail-oriented software engineer with experience in full-stack
          development, system architecture, and AI-driven applications. I am experienced
          in leading teams, optimizing workflows, and delivering high-quality software, 
          with over 10 years in healthcare settings and previous management experience.
        </p>

        {/* Location & Availability */}
        <div className="mt-6 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex items-center gap-2">
            <img src="/assets/icons/locationIcon.jpg" alt="Location icon" className="w-5 h-5" />
            <span className="text-gray-600 font-outfit">Dallas, Texas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-gray-600 font-outfit">Available for new projects</span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-4 flex items-center gap-4">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600"
          >
            <img src="/assets/icons/linkedinIcon.png" alt="LinkedIn" className="w-5 h-5" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600"
          >
            <img src="/assets/icons/githubIcon.png" alt="GitHub" className="w-5 h-5" />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600"
          >
            <img src="/assets/icons/instagramIcon.jpg" alt="Instagram" className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Right Column: Hero Image(s) */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-full max-w-sm">
          {/* Green rectangle behind */}
          <img
            src="/assets/images/lightGreenRectangle.svg"
            alt="Decorative shape"
            className="absolute -top-8 left-6 w-[250px] h-[400px] z-0"
          />

          {/* Main hero image */}
          <img
            src="/assets/images/headshotOne.jpg"
            alt="Ashley"
            className="relative w-64 h-64 object-cover object-[50%_30%] z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
