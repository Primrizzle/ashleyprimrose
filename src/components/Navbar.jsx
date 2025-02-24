// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#FFF0F4] w-full py-4">
      {/* Wrap the navbar contents in a container */}
      <div className="max-w-6xl mx-auto px-6 pr-[178px] flex items-center bg-[#FFF0F4] justify-between">
        {/* Left: Logo / Name */}
        <div className="text-[30px] text-[#1e1e1e] font-leckerli whitespace-nowrap">
          Ashley Primrose
        </div>

        {/* Right: Menu Links */}
        <ul className="flex items-center gap-x-8">
          <li>
            <a
              href="#about"
              className="text-[#1e1e1e] text-[16px] font-spectral font-semibold rounded hover:bg-[#c9c9a2]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-[#1e1e1e] text-[16px] font-spectral font-semibold rounded hover:bg-[#c9c9a2]"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-[#1e1e1e] text-[16px] font-spectral font-semibold rounded hover:bg-[#c9c9a2]"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-[#1e1e1e] text-[16px] font-spectral font-semibold rounded hover:bg-[#c9c9a2]"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-[#1e1e1e] text-[16px] font-spectral font-semibold rounded hover:bg-[#c9c9a2]"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
