// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <div className="relative z-10 bg-[#FFF0F4]">
      <section
        className="bg-[#FFF0F4] py-16 px-6 flex flex-col-reverse md:flex-row items-center md:items-start md:justify-between max-w-6xl mx-auto"
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

          {/* Location, Availability, Resume Button & Social Media (left-aligned) */}
          <div className="mt-6 flex flex-col items-start gap-4">
            {/* Location & Availability */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <img
                  src="/assets/icons/locationIcon.svg"
                  alt="Location icon"
                  className="w-5 h-5"
                />
                <span className="text-gray-600 font-spectral">Dallas, Texas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-300" />
                <span className="text-gray-600 font-spectral">
                  Available for new projects
                </span>
              </div>
            </div>

            {/* My Resume Button */}
            <button className="inline-flex items-center space-x-2 px-4 py-2 bg-[#DBDEB2] text-black font-spectral rounded hover:bg-[#c9c9a2] border border-[#f4f6db]">
              <img
                href="/assets/files/AshleyPrimroseResume.pdf"
                src="/assets/icons/downloadIcon.svg"
                alt="Download Icon"
                className="w-4 h-4"
              />
              <span>My Resume</span>
            </button>

            {/* Social Media Links */}
            <div className="flex items-center mt-2 gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/aprimrose/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <img
                  src="/assets/icons/linkedinIcon.svg"
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Primrizzle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <img
                  src="/assets/icons/githubIcon.svg"
                  alt="GitHub"
                  className="w-5 h-5"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/primrizzle/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <img
                  src="/assets/icons/instagramIcon.svg"
                  alt="Instagram"
                  className="w-5 h-5"
                />
              </a>
            </div>
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
              className="relative w-64 h-64 object-cover object-[50%_30%] z-10 shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
