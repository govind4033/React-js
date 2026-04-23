import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">

      {/* Header */}
      <section className="bg-indigo-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-indigo-100">
          We'd love to hear from you
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        
        <form className="bg-white p-8 rounded-xl shadow-md space-y-6">

          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-indigo-600">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-indigo-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-medium text-indigo-600">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
          >
            Send Message
          </button>

        </form>

      </section>

      {/* Extra Info */}
      <section className="text-center pb-10 text-gray-600">
        <p>Email: example@mail.com</p>
        <p>Phone: +91 98765 43210</p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t">
        © 2026 Your Name
      </footer>

    </div>
  );
}

export default Contact;