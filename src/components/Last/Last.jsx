import React from 'react';
import { AiOutlineEnvironment, AiOutlinePhone, AiOutlineMail, AiOutlineSkype } from 'react-icons/ai';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Last = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Get In Touch</h2>

          {/* Contact Form and Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white shadow-lg p-8 rounded-lg">
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="mt-1 p-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Id</label>
                  <input
                    type="email"
                    placeholder="john@gmail.com"
                    className="mt-1 p-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 555-0123"
                    className="mt-1 p-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    rows="5"
                    placeholder="I have an app idea for iOS and Android and also need a website for a logistic solution..."
                    className="mt-1 p-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Location */}
              <div className="flex items-center space-x-4">
                <AiOutlineEnvironment className="text-blue-600 text-3xl" />
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Location</h4>
                  <p className="text-gray-600">
                    437, Opera Business Hub, Lajamni Chowk, Mota Varachha, Surat, Gujarat, India - 395006
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <AiOutlinePhone className="text-red-600 text-3xl" />
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Phone No.</h4>
                  <p className="text-gray-600">+91 9904444091</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <AiOutlineMail className="text-green-600 text-3xl" />
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Email ID</h4>
                  <p className="text-gray-600">hr@codeinfosys.com</p>
                </div>
              </div>

              {/* Skype */}
              <div className="flex items-center space-x-4">
                <AiOutlineSkype className="text-blue-500 text-3xl" />
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Skype</h4>
                  <p className="text-gray-600">CodeInfosys</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Contact Us */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
              <p className="flex items-center space-x-2 mb-2">
                <AiOutlineEnvironment className="text-blue-600 text-xl" />
                <span>437, Opera Business Hub, Lajamni Chowk, Surat, Gujarat</span>
              </p>
              <p className="flex items-center space-x-2 mb-2">
                <AiOutlinePhone className="text-red-600 text-xl" />
                <span>+91 9904444091</span>
              </p>
              <p className="flex items-center space-x-2 mb-2">
                <AiOutlineMail className="text-green-600 text-xl" />
                <span>hr@codeinfosys.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <AiOutlineSkype className="text-blue-500 text-xl" />
                <span>CodeInfosys</span>
              </p>
            </div>

            {/* HR Inquiry */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">HR Inquiry</h4>
              <p className="flex items-center space-x-2 mb-2">
                <AiOutlineMail className="text-green-600 text-xl" />
                <span>hr@codeinfosys.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <AiOutlinePhone className="text-red-600 text-xl" />
                <span>+91 9904444091</span>
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                <li>Taxi Booking App Development</li>
                <li>E-Scooter App Development</li>
                <li>Uber Like App</li>
                <li>On-Demand Food Delivery App</li>
              </ul>
            </div>

            {/* Latest Blog */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Latest From Our Blog</h4>
              <ul className="space-y-2">
                <li>What are the Types of Digital Marketing?</li>
                <li>Best CSS Optimization Tips for Faster Websites</li>
                <li>Artificial Intelligence and the Future in Web Design?</li>
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-8 flex justify-center space-x-6">
            <a href="https://www.linkedin.com" className="text-gray-400 hover:text-blue-600 transition">
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400 transition">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://www.facebook.com" className="text-gray-400 hover:text-blue-700 transition">
              <FaFacebookF className="text-2xl" />
            </a>
            <a href="https://www.instagram.com" className="text-gray-400 hover:text-pink-600 transition">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          © 2024 Code Infosys Pvt Ltd. All rights reserved. | Privacy Policy
        </div>
      </footer>
    </div>
  );
};

export default Last;
