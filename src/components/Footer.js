// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1F3634] py-12 px-6 text-[#637e7cff]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h1 className="text-white text-2xl font-bold">zuno®</h1>
        </div>

        <div>
          <h3 className="text-gray-400 font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li>About Zuno</li>
            <li>Learn</li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-400 font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>Careers</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-400 font-semibold mb-4">Follow us</h3>
          <ul className="space-y-2 mb-6">
            <li>Instagram</li>
            <li>TikTok</li>
            <li>Twitter</li>
          </ul>

          <h3 className="text-gray-400 font-semibold mb-2">Newsletter</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-3 py-2 rounded-l bg-gray-800 text-white focus:outline-none"
            />
            <button className="bg-white text-black px-4 py-2 rounded-r font-semibold">
              &rarr;
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-sm  text-left">
        Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere
        erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est
        non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
        nec elit. Nulla vitae elit libero, a pharetra augue.. © Zuno {new Date().getFullYear()}. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
