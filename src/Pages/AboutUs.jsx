import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="px-4 max-w-6xl mx-auto py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0  blur-3xl rounded-full"></div>
          <div className="relative z-10">
            <h1 className="text-6xl font-bold mb-6 text-amber-800">
              About Artifact Vault
            </h1>
            <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
              Preserving history, empowering discovery. A digital sanctuary where the past meets the future.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-yellow-200/50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mr-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h2 className="text-3xl font-bold text-yellow-800">Our Mission</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Artifact Vault is dedicated to digitizing and preserving unique cultural and historical artifacts
              from around the world. We aim to create a collaborative community where history enthusiasts, researchers, and collectors
              can showcase, explore, and protect these treasures for generations to come. Through cutting-edge technology
              and passionate dedication, we bridge the gap between ancient wisdom and modern accessibility.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-yellow-200/50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4">
                <span className="text-white text-2xl">🌟</span>
              </div>
              <h2 className="text-3xl font-bold text-yellow-800">Our Vision</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              We believe in democratizing access to heritage. Whether you're a collector, student, or history lover —
              Artifact Vault offers a platform where anyone can contribute, engage, and preserve humanity's past.
              Our vision extends beyond mere preservation; we strive to make history interactive, engaging, and relevant
              to contemporary society.
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-yellow-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-yellow-200/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-yellow-800 text-center mb-3">Preservation</h3>
              <p className="text-gray-600 text-center">
                Safeguarding cultural heritage through advanced digital preservation techniques
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-yellow-200/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-yellow-800 text-center mb-3">Community</h3>
              <p className="text-gray-600 text-center">
                Building bridges between cultures and generations through shared heritage
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-yellow-200/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-yellow-800 text-center mb-3">Innovation</h3>
              <p className="text-gray-600 text-center">
                Leveraging technology to make history more accessible and engaging for users.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
