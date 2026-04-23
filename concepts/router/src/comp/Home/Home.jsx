import React from 'react';

function Home() {
  return (
    <div className="min-h-screen text-white">

      {/* Hero Section */}
      <section className="bg-gray-500 flex flex-col items-center justify-center text-center py-24 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Build Modern Web Apps <br />
          <span className="text-blue-400">with React 🚀</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mb-8 text-lg">
          Learn, build, and scale your frontend skills using React, Tailwind CSS,
          and modern development tools. Start your journey today.
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition font-medium">
            Get Started
          </button>
          <button className="bg-orange-400 border border-gray-500 px-6 py-3 rounded-xl hover:bg-slate-700 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-stone-300 grid md:grid-cols-3 gap-8 px-6 py-16 max-w-6xl mx-auto">
        
        <div className="bg-slate-800/70 backdrop-blur p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-3">⚡ Lightning Fast</h2>
          <p className="text-gray-400">
            Powered by Vite and React for blazing fast performance and smooth UX.
          </p>
        </div>

        <div className="bg-slate-800/70 backdrop-blur p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-3">🎨 Beautiful UI</h2>
          <p className="text-gray-400">
            Designed with Tailwind CSS to create clean, responsive, and modern interfaces.
          </p>
        </div>

        <div className="bg-slate-800/70 backdrop-blur p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-3">🧩 Easy to Scale</h2>
          <p className="text-gray-400">
            Component-based architecture makes your apps easy to maintain and expand.
          </p>
        </div>

      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-4 bg-slate-900 border-t border-slate-700">
        <h2 className="text-3xl font-bold mb-4">
          Ready to build something amazing?
        </h2>
        <p className="text-gray-400 mb-6">
          Start your first project and level up your development skills.
        </p>
        <button className="bg-green-500 px-8 py-3 rounded-xl hover:bg-green-600 transition font-medium">
          Start Now
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t border-slate-700">
        © 2026 Govind Patel. Built with React & Tailwind.
      </footer>

    </div>
  );
}

export default Home;