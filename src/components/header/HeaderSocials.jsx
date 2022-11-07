import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaArtstation } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/gilbert-intabo-332ba81a9/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/gilbert-kiana" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.artstation.com/kiana_kaiser" target="_blank">
        <FaArtstation />
      </a>

      <a href="https://twitter.com/gilbert_intabo" target="_blank">
        <FiTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
