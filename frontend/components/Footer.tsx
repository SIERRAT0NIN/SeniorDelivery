import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-2xl font-bold mb-4">Company Name</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Street Name, City, State, 12345</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: info@company.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 mt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
