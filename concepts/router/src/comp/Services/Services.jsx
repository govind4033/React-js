import React from 'react';

function Services() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">

      {/* Header */}
      <section className="bg-indigo-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Our Services</h1>
        <p className="text-indigo-100">
          What we offer to help you grow
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">
            💻 Web Development
          </h2>
          <p className="text-gray-600">
            Build modern, fast, and responsive websites using React and the latest technologies.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">
            🎨 UI/UX Design
          </h2>
          <p className="text-gray-600">
            Clean and user-friendly interfaces designed with best practices and Tailwind CSS.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">
            ⚙️ Backend Development
          </h2>
          <p className="text-gray-600">
            Robust APIs and server-side logic using Node.js and Express.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">
            🔒 Authentication
          </h2>
          <p className="text-gray-600">
            Secure login systems with JWT, sessions, and role-based access control.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">
            🚀 Performance Optimization
          </h2>
          <p className="text-gray-600">
            Improve app speed and efficiency with optimized code and best practices.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">
            📱 Responsive Design
          </h2>
          <p className="text-gray-600">
            Ensure your app looks perfect on all devices, from mobile to desktop.
          </p>
        </div>

      </section>

      {/* Call to Action */}
      <section className="text-center pb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to start your project?
        </h2>
        <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t">
        © 2026 Your Name
      </footer>

    </div>
  );
}

export default Services;