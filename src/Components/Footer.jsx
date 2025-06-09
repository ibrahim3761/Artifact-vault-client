import React from 'react';
import { Link } from 'react-router';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-yellow-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between gap-10 text-sm">
        
        {/* Section 1: About */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">ArtifactVault</h2>
          <p className="opacity-80">
            Preserving history, one artifact at a time. ArtifactVault is your digital archive
            for managing and showcasing precious historical items.
          </p>
        </div>

        {/* Section 2: Social Links */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="hover:text-yellow-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="hover:text-yellow-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="hover:text-yellow-400" />
            </a>
          </div>
        </div>

        {/* Section 3: Contact */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>Email: support@artifactvault.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center py-4 border-t border-yellow-800 text-sm">
        © {new Date().getFullYear()} ArtifactVault. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
