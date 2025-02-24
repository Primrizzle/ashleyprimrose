// src/components/Hero.jsx
import React from "react";
import locationIcon from "../assets/locationIcon.jpg";
import lightGreenRectangle from "../assets/lightGreenRectangle.svg";
import headshotOne from "../assets/headshotOne.jpg";
import githubIcon from "../assets/githubIcon.svg";
import linkedinIcon from "../assets/linkedinIcon.svg";
import instagramIcon from "../assets/instagramIcon.svg";

const Hero = () => {
  return (
    <section
      className="
        bg-white
        py-16
        px-6
        flex
        flex-col-reverse
        md:flex-row
        items-center
        md:items-start
        md:justify-between
        max-w-6xl
        mx-auto
      "
    >
      {/* Left Column: Text and Info */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <h1 className="text-5xl font-leckerli text-[#1e1e1e] leading-tight">
          Hi, I’m Ashley
        </h1>
        <p className="mt-6 text-gray-700 text-base leading-relaxed">
          I am a detail-oriented software engineer with experience in
          full-stack development, system architecture, and AI-driven
          applications. I am experienced in leading teams, optimizing
          workflows, and delivering high-quality software, with over
          10 years in healthcare settings and previous management
          experience.
        </p>

        {/* Location & Availability */}
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex items-center gap-2">
            <img
              src={locationIcon}
              alt="Location icon"
              className="w-5 h-5"
            />
            <span className="text-gray-600">Dallas, Texas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-gray-600">Available for new projects</span>
          </div>
        </div>
      </div>

      {/* Right Column: Hero Image(s) */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        {/* 
          1) 'relative' on this container to allow absolutely-positioned 
             elements inside it.
          2) Use z-index classes to stack images.
        */}
        <div className="relative w-full max-w-sm">
          {/* Green rectangle behind (absolute + lower z-index) */}
          <img
            src={lightGreenRectangle}
            alt="Decorative shape"
            className="
              absolute
              -top-8        /* Move upward if you want less gap above */
              left-6
              w-[250px]     /* Width can be changed to enlarge the rectangle */
              h-[400px]     /* Height can be changed to make it taller */
              z-0           /* Ensures it's behind the headshot */
            "
          />

          {/* Main hero image in front (relative + higher z-index) */}
          <img
            src={headshotOne}
            alt="Ashley"
            className="
              relative
              w-64
              h-64
              object-cover
              object-[50%_30%]    /* Shift the face down in the bounding box */
              z-10          /* Ensures it's on top of the rectangle */
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

