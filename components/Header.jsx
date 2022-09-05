import Link from "next/link";
import React from "react";

import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
const Header = () => {
  return (
    <div className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex:none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py">
          <input type="text" placeholder="Search..." className="input-text" />
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link href="/">
            <a className="font-bold uppercase text-3xl">BLOG-POST</a>
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex">
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
        </div>
      </div>
    </div>
  );
};

export default Header;
