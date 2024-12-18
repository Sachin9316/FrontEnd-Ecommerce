import React from "react";

const Features = () => {
  return (
    <section className="py-16 px-6 bg-gray-800" id="features">
      <div className="text-center space-y-8">
        <h2 className="text-4xl font-semibold text-blue-500">Features</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Explore our state-of-the-art technology solutions designed to make
          your life easier and more efficient.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {/* Feature 1 */}
        <div className="bg-gray-700 p-8 rounded-lg shadow-lg hover:bg-red-600 transition duration-200 cursor-pointer hover:text-white text-blue-500">
          <h3 className="text-2xl font-semibold">
            AI Integration
          </h3>
          <p className="mt-4 text-gray-300">
            Harness the power of artificial intelligence to automate tasks and
            boost efficiency.
          </p>
        </div>
        {/* Feature 2 */}
        <div className="bg-gray-700 p-8 rounded-lg shadow-lg hover:bg-blue-600 transition duration-200 cursor-pointer hover:text-white text-blue-500">
          <h3 className="text-2xl font-semibold ">
            Cloud Solutions
          </h3>
          <p className="mt-4 text-gray-300">
            Securely access your data anytime, anywhere with scalable cloud
            solutions.
          </p>
        </div>
        {/* Feature 3 */}
        <div className="bg-gray-700 p-8 rounded-lg shadow-lg hover:bg-green-600 transition duration-200  cursor-pointer hover:text-white text-blue-500">
          <h3 className="text-2xl font-semibold">
            Data Security
          </h3>
          <p className="mt-4 text-gray-300">
            Protect your digital assets with top-tier security protocols and
            encryption.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
