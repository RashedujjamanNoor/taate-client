import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-secondary mt-8 pt-4 px-4 pb-4">
      <div className="grid grid-cols-2 md:grid-cols-3  justify-items-center content-center gap-4 ">
        <div>
          <h2 className="font-bold text-primary mb-2 text-lg">POLICIES</h2>
          <div className="text-sm font-medium text-gray-800 space-y-1">
            <Link className="block" to="/delivery-policy">
              Delivery Policy
            </Link>
            <Link className="block" to="/exchange-policy">
              Exchange Policy
            </Link>
            <Link className="block" to="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="block" to="/safty-policy">
              Safety Advisory
            </Link>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-primary mb-2 text-lg">Service</h2>
          <div className="text-sm font-medium text-gray-800 space-y-1">
            <p>+88019XXXXXXXX</p>
            <p>SUNDAY-THURSDAY (10:30 AM-5:00 PM)</p>
            <p>service@taate.net</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-primary mb-2 text-lg ">Social Links</h2>
          <div className="flex justify-center items-center gap-4">
            <p className="bg-white rounded-full">
              <FaFacebookF className="m-1.5 text-blue-700 text-lg" />
            </p>
            <p className="bg-white rounded-full">
              <FaInstagram className="m-1.5 text-pink-700 text-lg" />
            </p>
            <p className="bg-white rounded-full">
              <FaYoutube className="m-1.5 text-red-700 text-lg" />
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-3" />
      <div className="text-center text-xs mt-2 font-medium text-gray-800">
        <p>&copy; 2025 TAATE. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
