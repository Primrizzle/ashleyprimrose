import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#FFF0F4] flex justify-center">
      <div className="max-w-6xl w-full px-6 md:px-12 lg:px-20">
        {/* About Me Section Title */}
        <div className="text-center mb-12">
          <h2 className="inline-block bg-[#dbdeb2] text-gray-700 text-xl font-spectral font-bold px-6 py-2 rounded-full">
            About Me
          </h2>
        </div>

        {/* About Me Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image Section */}
          <div className="relative w-full flex justify-center">
            {/* Decorative Background Shape */}
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/lightGreenRectTwo.png`}
              alt="Background Shape"
              className="absolute -top-6 left-6 pl-7 w-[250px] h-[350px] z-0"
            />
            
            {/* Profile Image */}
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/headshotTwo.jpg`}
              alt="Ashley Primrose"
              className="relative w-72 h-96 object-cover z-10 object-[50%_30%] shadow-lg"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="text-gray-800 font-outfit space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Want to know more? Let’s dive in!
            </h3>

            <p>
              I’m a software engineer who’s passionate about creating solutions that make a real impact. 
              I love working on projects that help others, whether it’s through intuitive applications, 
              efficient systems, or innovative technology. 
              Continuous learning is at the heart of what I do—I’m always exploring new tools, 
              refining my skills, and pushing myself to grow.
            </p>

            <p>
              With experience in full-stack development and system architecture, 
              I’ve worked with C#, JavaScript, Python, and more to build scalable and efficient software. 
              I enjoy problem-solving and designing solutions that are both functional and user-friendly. 
              Front-end, back-end, databases, or cloud—I thrive in dynamic environments that challenge me 
              to think critically and adapt.
            </p>

            <p>
              Beyond technical skills, I have a strong background in management and team collaboration. 
              With over a decade in healthcare and leadership experience, I understand the importance of teamwork, 
              setting clear goals, and ensuring projects are delivered successfully.
            </p>

            {/* Quick Facts */}
            <h3 className="text-lg font-semibold text-gray-900">
              Some quick bits about me:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <span className="font-bold">✓</span>
                <p>B.S. in Software Engineering</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">✓</span>
                <p>Full-Stack Developer with a Love for Scalable Solutions</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">✓</span>
                <p>Tech enthusiast with 10+ years in healthcare</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">✓</span>
                <p>Experienced team leader & collaborative thinker</p>
              </div>
            </div>

            <p className="mt-4">
              I’m also available for freelance work, so feel free to reach out and say hello!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
