import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-secondary mt-8 ">
      <div>
        <div>
          <h2>POLICIES</h2>
          <div>
            <p>Delivery Policy</p>
            <p>Exchange Policy</p>
            <p>Privacy Policy</p>
            <p>Safety Advisory</p>
          </div>
        </div>
        <div>
          <h2>Customer Service</h2>
          <div>
            <p>+88019xxxxxxxx</p>
            <p>SUNDAY-THURSDAY (10:30 AM-5:00 PM)</p>
            <p>customerservice@taate.net</p>
          </div>
        </div>
        <div>
          <h2>Social Media Links</h2>
          <div>
            <p>
              <FaFacebookF />
            </p>
            <p>
              <FaInstagram />
            </p>
            <p>
              <FaYoutube />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
