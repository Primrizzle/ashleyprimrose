import React from "react";

// Experience Data Array
const experiences = [
  {
    title: "Jr. Front End Developer",
    companyLogo: "/assets/images/intellihub.png",
    companyAlt: "IntelliHub Logo",
    description: [
      "Fully developed the front end using Figma, React.",
      "Integrated intelligent query processing to retrieve and manage information from AI and web-based sources.",
      "Collaborated with a cross-functional team to design a scalable three-tier architecture using Python, MongoDB, and Flask.",
      "Ensured project success through Agile methodologies by managing risks, refining workflows, and meeting sponsor requirements.",
    ],
    duration: "Aug 2024 - Dec 2024",
    logoSize: "w-[90px]",
  },
  {
    title: "Data Processing Supervisor",
    companyLogo: "/assets/images/amerisourcebergen.png",
    companyAlt: "AmerisourceBergen Logo",
    description: [
      "Led a team of data technicians in extracting, processing, and managing prescription data with accuracy and efficiency.",
      "Optimized workflows and developed data-driven schedules to enhance productivity and streamline operations.",
      "Served as the SME for ScriptMed, managing system support, database maintenance, and data governance.",
      "Analyzed team performance metrics and presented insights using visualization tools to drive process improvements and inform senior management.",
    ],
    duration: "May 2021 - Oct 2022",
    logoSize: "w-[170px]", 
  },
  {
    title: "Certified Pharmacy Technician",
    companyLogo: "/assets/images/kroger.png",
    companyAlt: "Kroger Logo",
    description: [
      "Accurately prepared and dispensed prescriptions, including retrieving, counting, and compounding medications.",
      "Entered and verified sensitive patient data, ensuring accuracy and compliance with pharmacy regulations.",
      "Maintained strict adherence to HIPAA and data security protocols when handling protected health information.",
      "Provided reliable support in retail pharmacy settings, ensuring efficiency and accuracy in daily operations.",
    ],
    duration: "Dec 2015 - May 2017",
    logoSize: "w-[150px]", 
  },
];

const Experiences = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 flex justify-center">
      <div className="max-w-6xl w-full px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="inline-block bg-[#dbdeb2] text-gray-700 text-xl font-spectral font-bold px-6 py-2 rounded-full">
            Experience
          </h2>
          <p className="text-lg text-gray-600 font-outfit mt-4">
            Here is a quick summary of my most recent professional experiences:
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white font-outfit p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-center gap-6"
            >
              {/* Left Column: Company Logo (Centered Vertically) */}
              <div className="w-1/3 flex justify-center items-center">
                <img
                  src={`${process.env.PUBLIC_URL}${exp.companyLogo}`}
                  alt={exp.companyAlt}
                  className={`${exp.logoSize} h-auto object-contain`}
                />
              </div>

              {/* Right Column: Experience Details */}
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-outfit font-bold text-gray-900">
                    {exp.title}
                  </h3>
                  <span className="text-gray-600 text-sm">{exp.duration}</span>
                </div>
                <ul className="text-gray-700 space-y-2 mr-9 list-disc list-inside mt-4">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
