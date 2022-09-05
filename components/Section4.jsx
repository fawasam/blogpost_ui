import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "./_child/Author";
import Fetcher from "lib/fetcher";
import Spinner from "./_child/Spinner";
import ErrorSpinner from "./_child/ErrorSpinner";

const Section4 = () => {
  const { data, isLoading, isError } = Fetcher("api/popular");
  if (isLoading) return <Spinner />;
  if (isError) return <ErrorSpinner />;
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12 text-center">Business</h1>
          <div className="flex flex-col gap-6">
            {data.data[1] ? <Post data={data.data[1]} /> : <></>}
            {data.data[2] ? <Post data={data.data[2]} /> : <></>}
            {data.data[3] ? <Post data={data.data[3]} /> : <></>}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12 text-center">Travel</h1>
          <div className="flex flex-col gap-6">
            {data.data[4] ? <Post data={data.data[4]} /> : <></>}
            {data.data[5] ? <Post data={data.data[5]} /> : <></>}
            {data.data[1] ? <Post data={data.data[1]} /> : <></>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;

function Post({ data }) {
  const { id, title, subtitle, category, img, published, author } = data;

  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              src={img || ""}
              alt={id}
              width={300}
              height={250}
              loading="lazy"
              className="rounded hover:scale-110 transition"
            />
          </a>
        </Link>
      </div>

      <div className="info flex justify-center flex-col">
        <Link href={`/posts/${id}`}>
          <a className="text-orange-600 hover:text-orange-800">
            {category || "unknown"}
          </a>
        </Link>
        <Link href={`/posts/${id}`}>
          <a className="text-gray-800 hover:text-gray-600">
            {" "}
            {published || "unknown"}
          </a>
        </Link>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <a className="text-xl   font-bold text-gray-800 hover:text-gray-600">
              {title || "unknown"}
            </a>
          </Link>
          {author ? <Author {...author} /> : ""}
        </div>
      </div>
    </div>
  );
}
