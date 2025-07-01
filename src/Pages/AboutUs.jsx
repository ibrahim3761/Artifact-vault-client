import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <div className="px-4 max-w-6xl mx-auto py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-amber-300/20 to-orange-400/20 blur-3xl rounded-full"></div>
          <div className="relative z-10">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-yellow-700 via-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
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

        {/* Values Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-yellow-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
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
                Leveraging technology to make history more accessible and engaging
              </p>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-yellow-600 to-amber-600 rounded-3xl p-8 shadow-2xl text-white">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
              <p className="text-yellow-100 text-lg">Making a difference in digital preservation</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-4 text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">10K+</div>
                <div className="text-yellow-100">Artifacts Preserved</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-yellow-100">Countries Represented</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">5K+</div>
                <div className="text-yellow-100">Active Contributors</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">1M+</div>
                <div className="text-yellow-100">Monthly Visitors</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-yellow-200/50">
            <h2 className="text-3xl font-bold text-yellow-800 mb-4">Join Our Mission</h2>
            <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
              Be part of a community that values and preserves our shared cultural heritage. 
              Every contribution matters in building a comprehensive digital archive for future generations.
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Started Today
            </button>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-yellow-200">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Artifact Vault. Preserving history for the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;