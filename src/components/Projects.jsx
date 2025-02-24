import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <h2 className="text-3xl font-semibold text-gray-900 text-center">Projects</h2>
      <div className="flex flex-wrap justify-center gap-8 mt-6">
        <div className="w-96 p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold">IntelliHub</h3>
          <p className="text-gray-600 mt-2">
            AI-powered knowledge management assistant...
          </p>
        </div>
        <div className="w-96 p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold">Prime Product Analyzer</h3>
          <p className="text-gray-600 mt-2">
            Scalable ETL pipeline for data analytics...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
