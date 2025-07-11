import React from "react";
import Banner from "../../Components/Banner";
import { FaGlobe, FaScroll, FaUniversity } from "react-icons/fa";
import FeaturedArtifacts from "./FeaturedArtifacts";

const Home = () => {
  return (
    <div className="space-y-16 pt-24 bg-amber-50">
      <title>ArtifactVault - Home</title>
      {/* === Banner === */}
      <Banner></Banner>

      {/* === Featured Artifacts === */}
      <section className=" md:px-6">
        <div>
          <FeaturedArtifacts></FeaturedArtifacts>
        </div>
      </section>

      {/* === Why Choose Us Section === */}
      <section className="bg-yellow-100 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-yellow-900 mb-4">
            Why Choose ArtifactVault?
          </h2>
          <p className="text-yellow-800 mb-6 max-w-2xl mx-auto">
            Our platform is designed for historians, collectors, and
            institutions to safely archive, manage, and showcase valuable
            historical items with ease.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="p-4 bg-white rounded-lg shadow hover:shadow-md">
              <h3 className="font-semibold text-yellow-900 mb-2">
                Secure Storage
              </h3>
              <p className="text-yellow-700 text-sm">
                All artifact data is safely stored in the cloud with backup and
                encryption.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow hover:shadow-md">
              <h3 className="font-semibold text-yellow-900 mb-2">
                Easy Access
              </h3>
              <p className="text-yellow-700 text-sm">
                Access your collection anytime, anywhere with a responsive
                design.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow hover:shadow-md">
              <h3 className="font-semibold text-yellow-900 mb-2">
                Community Driven
              </h3>
              <p className="text-yellow-700 text-sm">
                Join a network of enthusiasts and researchers to collaborate and
                explore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Latest Discoveries Section (Icon-Based) === */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl text-center font-bold text-yellow-900 mb-4">
          Latest Discoveries
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Discovery 1 */}
          <div className="flex items-start gap-4 p-5 bg-yellow-50 rounded-lg shadow hover:shadow-md transition-all">
            <FaGlobe className="text-3xl text-yellow-700 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800">
                Lost Civilization Traced
              </h3>
              <p className="text-sm text-yellow-700">
                New data suggests a previously unknown civilization may have
                existed in the region.
              </p>
            </div>
          </div>

          {/* Discovery 2 */}
          <div className="flex items-start gap-4 p-5 bg-yellow-50 rounded-lg shadow hover:shadow-md transition-all">
            <FaScroll className="text-3xl text-yellow-700 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800">
                Ancient Scroll Decoded
              </h3>
              <p className="text-sm text-yellow-700">
                A rare parchment reveals long-lost trade routes used during the
                2nd century BCE.
              </p>
            </div>
          </div>

          {/* Discovery 3 */}
          <div className="flex items-start gap-4 p-5 bg-yellow-50 rounded-lg shadow hover:shadow-md transition-all">
            <FaUniversity className="text-3xl text-yellow-700 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800">
                New Exhibit Opened
              </h3>
              <p className="text-sm text-yellow-700">
                The National Heritage Museum now showcases rare Southeast Asian
                artifacts from the 1200s.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Explore Artifact Categories Section === */}
      <section className="bg-amber-100 py-12 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-yellow-900 mb-4">
            Explore Artifact Categories
          </h2>
          <p className="text-yellow-800 mb-6 max-w-2xl mx-auto">
            Discover the diverse types of artifacts preserved in our vault —
            from tools and writings to ancient relics and rare documents.
          </p>
          <div className="grid md:grid-cols-4 gap-6 mt-8 text-left">
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-yellow-900">Tools</h3>
              <p className="text-sm text-yellow-700">
                From primitive hand axes to complex devices like the Antikythera
                mechanism.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-yellow-900">Weapons</h3>
              <p className="text-sm text-yellow-700">
                Explore ancient swords, spears, and defense gear used by
                historical civilizations.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-yellow-900">
                Writings
              </h3>
              <p className="text-sm text-yellow-700">
                Scrolls, manuscripts, and carvings that offer a glimpse into the
                minds of the past.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-yellow-900">
                Documents
              </h3>
              <p className="text-sm text-yellow-700">
                Legal codes, treaties, and rare declarations that shaped
                civilizations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
