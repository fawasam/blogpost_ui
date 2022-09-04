import React from "react";

const NewsLetter = () => {
  return (
    <section className="bg-gray-50 mt-20">
      <div className="container mx-auto md:px-20 py-16 text-center">
        <h1 className="font-bold text-3xl">Subscribe Newsletter</h1>
        <div className="py-4">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="shadow border w-9/12 p-3 mt-1   bg-white  border-slate-300 rounded-full text-sm  placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500;"
          />
        </div>
        <button className="bg-orange-400 px-20 py-3 rounded-full text-gray-50">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default NewsLetter;
