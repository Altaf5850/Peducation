import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#325843] text-white py-10 font-merienda">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center lg:justify-between">
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h2 className="text-xl md:text-2xl font-semibold font-merienda mb-4 uppercase hover:scale-105 duration-300">
              About PEducation
            </h2>
            <p className="mb-2">
              Our company is dedicated to providing the best service and
              products in the industry. We value customer satisfaction above all
              and strive to meet the highest standards in every aspect of our
              business. Education about.
            </p>
          </div>

          <div className="w-full lg:w-1/3 mb-6 lg:mb-0 pl-4 md:pl-20">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 hover:scale-105 duration-300">
              Subjects
            </h2>
            <ul>
              <li className="mb-2 hover:underline hover:scale-105 duration-300 hover:text-[#00df9a]">
                Software Engineering
              </li>
              <li className="mb-2 hover:underline hover:scale-105 duration-300 hover:text-[#00df9a]">
                Web Development
              </li>
              <li className="mb-2 hover:underline hover:scale-105 duration-300 hover:text-[#00df9a]">
                Data Science
              </li>
              <li className="mb-2 hover:underline hover:scale-105 duration-300 hover:text-[#00df9a]">
                Artificial Intelligence
              </li>
              <li className="mb-2 hover:underline hover:scale-105 duration-300 hover:text-[#00df9a]">
                Cloud Computing
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 hover:scale-105 duration-300">
              Subscribe to our newsletter
            </h2>
            <form className="flex flex-col md:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-3/4 p-2 rounded-xl bg-gray-100 border border-gray-600 focus:outline-none focus:border-gray-400"
              />
              <button
                type="submit"
                className="w-full md:w-1/4 p-2 bg-blue-600 text-white rounded-xl hover:bg-transparent hover:text-blue-600 border border-blue-600 hover:border-blue-600 duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-between items-center border-t border-gray-700 pt-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Follow us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              className="text-blue-500 hover:text-blue-400"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              className="text-blue-400 hover:text-blue-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              className="text-pink-500 hover:text-pink-400"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-blue-700 hover:text-blue-600"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <div className="p-5 text-center ">
            <p className="text-sm">© 2024 Company Name. All rights reserved.</p>
            <p className="text-sm">Support: support@company.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
