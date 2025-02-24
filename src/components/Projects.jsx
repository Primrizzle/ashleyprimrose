import React from "react";

// Projects Data Array
const projects = [
  {
    title: "IntelliHub",
    description:
      "IntelliHub is an innovative Knowledge Management Assistant designed to streamline information retrieval and organization. Built with AI-powered search capabilities, it helps users efficiently conduct, store, and manage queries from various web and AI sources. Featuring an intuitive interface, intelligent query processing, and secure data management, IntelliHub enhances productivity for professionals in consulting, research, and education. Its scalable architecture ensures seamless performance, making it a powerful tool for those who need quick, reliable access to critical information.",
    image: "/assets/images/intellihubSignin.png",
    technologies: [
      "React",
      "Flask",
      "MongoDB",
      "Python",
      "Git",
      "Figma",
      "Agile",
      "RESTful API",
      "AI Web Scraping",
    ],
  },
  {
    title: "Prime Product Analyzer",
    description:
      "Developed a scalable and efficient data pipeline to process and analyze large datasets. The project involved designing an end-to-end ETL (Extract, Transform, Load) workflow, integrating multiple data sources, optimizing data storage, and implementing real-time data processing techniques. The pipeline supports structured and unstructured data, ensuring reliability, performance, and maintainability. (This project is still in production)",
    image: "/assets/images/underConstruction.png",
    technologies: [
      "Python",
      "SQL",
      "Apache Spark",
      "Airflow",
      "Pandas",
      "PostgreSQL",
      "AWS S3",
      "Docker",
      "Kubernetes",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#FFF0F4] flex justify-center">
      <div className="max-w-5xl w-full px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="inline-block bg-[#dbdeb2] text-gray-700 text-xl font-spectral font-bold px-6 py-2 rounded-full">
            Projects
          </h2>
        </div>

        {/* Project Cards - Stacked */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              
              className="bg-white shadow-lg rounded-lg overflow-hidden p-6 flex flex-col md:flex-row items-stretch gap-6 min-h-[400px]"
            >
              {/* Left Column: Project Details */}
              <div className="flex-1 text-gray-800 font-outfit">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>

                {/* Technologies Used */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#dbdeb2] text-gray-800 px-3 py-1 text-sm rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Project image */}
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-md w-full h-auto max-h-80 object-cover shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
