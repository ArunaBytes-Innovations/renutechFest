import React from "react";
import "./styles/Footer.css";
import { Link } from "react-router-dom";

//imported icon from react icons
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";

//list of social media links
const socialLinks = [
  { url: "https://www.youtube.com/", icon: <SlSocialYoutube /> },
  { url: "https://twitter.com/", icon: <FaXTwitter /> },
  { url: "https://www.facebook.com/", icon: <FaFacebookF /> },
  { url: "https://in.linkedin.com/", icon: <FaLinkedinIn /> },
  { url: "https://www.instagram.com/", icon: <FaInstagram /> },
];

const SocialBtn = () => {
  return (
    <ul className="text-white flex ">
      {socialLinks.map((link, index) => (
        <li key={index} className="text-lg mr-5 ">
          <Link to={link.url} target="_blank">
            {link.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Footer = () => {
  return (
    <>
      <div className="sub_footer text-white flex flex-col md:flex-row justify-between items-center h-32 md:h-16">
        <h3 className="uppercase tracking-wide text-xl pt-2 ">Renutech</h3>
        <p className="md:hidden">
          <SocialBtn />
        </p>
        <div className="copy-right flex flex-col items-center md:ml-16">
          <p>&copy; 2024 RenuTech</p>
          <p>Developed by Arunabyte Innovations</p>
        </div>
        <p className="hidden md:block">
          <SocialBtn />
        </p>
      </div>
    </>
  );
};

export default Footer;
