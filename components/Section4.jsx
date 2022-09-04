import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "./_child/Author";

const Section4 = () => {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12 text-center">Business</h1>
          <div className="flex flex-col gap-6">
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12 text-center">Travel</h1>
          <div className="flex flex-col gap-6">
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;

function Post() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"}>
          <a>
            <Image
              src={"/images/img1.jpg"}
              width={300}
              height={250}
              loading="lazy"
              className="rounded hover:scale-110 transition"
            />
          </a>
        </Link>
      </div>

      <div className="info flex justify-center flex-col">
        <Link href={"/"}>
          <a className="text-orange-600 hover:text-orange-800">
            Business, Travel
          </a>
        </Link>
        <Link href={"/"}>
          <a className="text-gray-800 hover:text-gray-600">July 3,2022</a>
        </Link>
        <div className="title">
          <Link href={"/"}>
            <a className="text-xl   font-bold text-gray-800 hover:text-gray-600">
              Your most happy customers are your geatest source of learning
            </a>
          </Link>
          <Author />
        </div>
      </div>
    </div>
  );
}
