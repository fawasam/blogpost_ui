import Link from "next/link";
import React from "react";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import NewsLetter from "./_child/NewsLetter";

const Footer = () => {
  const bg = {
    background: "url('/images/footer.png') no-repeat",
    backgroundPosition: "bottom left",
  };
  return (
    <footer className="bg-gray-50" style={bg}>
      <NewsLetter />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href="/">
              <ImFacebook className="social-media" />
            </Link>
            <Link href="/">
              <ImTwitter className="social-media" />
            </Link>
            <Link href="/">
              <ImYoutube className="social-media" />
            </Link>
          </div>
          <p className="py-5 text-gray-400">
            Copyright © 2022 All rights reserved
          </p>
          <p className="text-gray-400 text-center">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
