import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">

      {/* Header */}
      <section className="bg-indigo-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">About Us</h1>
        <p className="text-indigo-100">
          Learn more about what we do and why we do it
        </p>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-12">

        {/* Intro */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-indigo-600">
            Who We Are
          </h2>
          <p className="text-gray-600">
            We are passionate developers building modern web applications using
            React, Tailwind CSS, and the latest technologies. Our goal is to
            create clean, fast, and user-friendly interfaces.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-indigo-600">
            Our Mission
          </h2>
          <p className="text-gray-600">
            Our mission is to simplify web development and help developers learn
            by building real-world projects. We focus on clarity, performance,
            and design.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-indigo-100 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">💡 Innovation</h3>
            <p className="text-gray-600">
              We explore modern tools and techniques to build better apps.
            </p>
          </div>

          <div className="bg-blue-100 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">🤝 Collaboration</h3>
            <p className="text-gray-600">
              Teamwork and sharing knowledge is at our core.
            </p>
          </div>

          <div className="bg-emerald-100 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">🚀 Growth</h3>
            <p className="text-gray-600">
              We believe in continuous learning and improvement.
            </p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t">
        © 2026 Your Name
      </footer>

    </div>
  );
}

export default About;