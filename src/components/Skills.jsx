    import React from "react";

    const skills = [
    { name: "Figma", img: "/assets/icons/icon-figma.svg" },
    { name: "React", img: "/assets/icons/icon-react.svg" },
    { name: "JavaScript", img: "/assets/icons/icon-javascript.png" },
    { name: "C#", img: "/assets/icons/icon-csharp.png" },
    { name: "Flask", img: "/assets/icons/icon-flask.svg" },
    { name: "TailwindCSS", img: "/assets/icons/icon-tailwind.png" },
    { name: "MongoDB", img: "/assets/icons/icon-mongodb.svg" },
    { name: "Python", img: "/assets/icons/icon-python.svg" },
    { name: "Java", img: "/assets/icons/icon-java.svg" },
    { name: "Git", img: "/assets/icons/icon-git.svg" },
    { name: "AWS", img: "/assets/icons/icon-AWS.svg" },
    { name: "Azure", img: "/assets/icons/logo-azure.png" },
    ];

    const Skills = () => {
        return (
          <section className="py-20 bg-gray-50 text-center">
            <div className="max-w-5xl mx-auto px-6">
              {/* Styled Section Title */}
              <h2 className="inline-block bg-[#dbdeb2] text-gray-700 text-xl font-spectral font-bold px-6 py-2 rounded-full justify-center">
                Skills
              </h2>
      
              <p className="text-lg text-gray-600 font-outfit justify-center mt-4">
                These are the tools and technologies I’ve worked with:
              </p>
      
              {/* Skills Grid (Two Rows) */}
              <div className="grid grid-cols-6 grid-rows-2 gap-6 pr-8 justify-items-center font-outfit mt-8">
                {skills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="w-16 h-16 object-contain"
                    />
                    <p className="mt-2 text-gray-800 font-medium">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      };
      
    export default Skills;
