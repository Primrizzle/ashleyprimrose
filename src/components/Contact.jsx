import React, { useState } from "react";

const ContactForm = () => {
  // State for form fields and feedback
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // For showing success/error messages

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Make a POST request to your serverless function
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error sending email");
      }

      // If successful, parse the response
      const result = await response.json();
      setStatus(result.message); // e.g., "Email sent successfully!"

      // Clear the form fields
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Error sending email:", err);
      setStatus("Failed to send email.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-white font-outfit">
      <div className="max-w-xl items-center mx-auto px-4">
        {/* Card Container */}
        <div className="card w-full bg-[#FFF0F4] shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Have a project in mind? Let&apos;s chat!
          </h2>

          {/* Attach the handleSubmit function to the form's onSubmit */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="form-control">
              <label htmlFor="name" className="label">
                <span className="label-text font-semibold text-gray-700">
                  Your Name
                </span>
              </label>
              <input
                type="text"
                id="name"
                className="input input-bordered w-full font-outfit bg-[#f4f6db] text-gray-800"
                value={name}
                onChange={(e) => setName(e.target.value)} // Update name state
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text font-semibold text-gray-700">
                  Your Email
                </span>
              </label>
              <input
                type="email"
                id="email"
                className="input input-bordered w-full bg-[#f4f6db] text-gray-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
                required
              />
            </div>

            {/* Message Field */}
            <div className="form-control">
              <label htmlFor="message" className="label">
                <span className="label-text font-semibold text-gray-700">
                  Your Message
                </span>
              </label>
              <textarea
                id="message"
                className="textarea textarea-bordered w-full bg-[#f4f6db] text-gray-800"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)} // Update message state
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full md:w-auto bg-[#f4f6db] text-gray-800 hover:bg-[#c9c9a2] border border-[#f4f6db]"
            >
              Submit
            </button>

            {/* Display submission status */}
            {status && (
              <p className="text-center mt-4 text-sm text-gray-600">
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center justify-center mt-10 gap-4">
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
    </section>
  );
};

export default ContactForm;
