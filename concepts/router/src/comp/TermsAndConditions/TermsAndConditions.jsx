import React from 'react';

function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">

      {/* Header */}
      <section className="bg-indigo-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Terms & Conditions</h1>
        <p className="text-indigo-100">
          Please read these terms carefully before using our services
        </p>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-12 space-y-8">

        <div>
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600">
            By accessing or using our website, you agree to comply with and be bound by these terms.
            If you do not agree, please do not use our services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">
            2. Use of Services
          </h2>
          <p className="text-gray-600">
            You agree to use our website only for lawful purposes and in a way that does not harm,
            restrict, or interfere with others' use.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">
            3. User Responsibilities
          </h2>
          <p className="text-gray-600">
            You are responsible for maintaining the confidentiality of your information and for all
            activities that occur under your use of the website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">
            4. Intellectual Property
          </h2>
          <p className="text-gray-600">
            All content, design, and materials on this website are owned by us and may not be reused
            without permission.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-600">
            We are not responsible for any damages or losses resulting from the use of our website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">
            6. Changes to Terms
          </h2>
          <p className="text-gray-600">
            We may update these terms at any time. Continued use of the website means you accept the changes.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t">
        © 2026 Your Name
      </footer>

    </div>
  );
}

export default TermsAndConditions;