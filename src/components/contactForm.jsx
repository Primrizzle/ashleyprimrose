import React from "react";

const ContactForm = () => {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-xl mx-auto px-4">
        {/* Pink Card Container */}
        <div className="card w-full bg-[#FFF0F4] shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Get in Touch
          </h2>

          <form className="space-y-6">
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
                placeholder="Enter your name"
                className="input input-bordered w-full"
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
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>

            {/* Message Field */}
            <div className="form-control">
              <label htmlFor="message" className="label">
                <span className="label-text font-semibold text-gray-700">
                  Your Message TEST
                </span>
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                className="textarea textarea-bordered w-full"
                rows={5}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-full md:w-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
