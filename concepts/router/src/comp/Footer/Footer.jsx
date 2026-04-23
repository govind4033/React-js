import React from 'react';

function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-300 pt-10 pb-6">

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">MyApp</h2>
          <p className="text-gray-400">
            Building modern web applications with clean design and great user experience.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-indigo-400 cursor-pointer">Home</li>
            <li className="hover:text-indigo-400 cursor-pointer">About</li>
            <li className="hover:text-indigo-400 cursor-pointer">Contact</li>
            <li className="hover:text-indigo-400 cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-gray-400">Email: example@mail.com</p>
          <p className="text-gray-400">Phone: +91 98765 43210</p>
          <p className="text-gray-400">Location: India</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-gray-500">
        © 2026 Your Name. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;