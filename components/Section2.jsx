import fetcher from "lib/fetcher";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "./_child/Author";
import Spinner from "./_child/Spinner";
import ErrorSpinner from "./_child/ErrorSpinner";

const Section2 = () => {
  const { data, isLoading, isError } = fetcher("api/posts");
  if (isLoading) return <Spinner />;
  if (isError) return <ErrorSpinner />;

  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Post</h1>

      {/* grid columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.data.map((value, i) => (
          <Post data={value} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Section2;

function Post({ data }) {
  const { id, title, subtitle, category, img, published, author } = data;
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <a>
            <Image
              src={img || ""}
              alt={id}
              width={500}
              height={350}
              loading="lazy"
              className="rounded hover:scale-110 transition"
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <Link href={"/"}>
          <a className="text-orange-600 hover:text-orange-800">
            {category || "unknown"}
          </a>
        </Link>
        <Link href={"/"}>
          <a className="text-gray-800 hover:text-gray-600">
            {published || "unknown"}
          </a>
        </Link>
      </div>
      <div className="title">
        <Link href={"/"}>
          <a className="text-xl  font-bold text-gray-800 hover:text-gray-600">
            {title || "Title"}
          </a>
        </Link>
      </div>
      <p className="text-gray-500 py-3">{subtitle || "Subtitle"}</p>
      {author ? <Author /> : ""}
    </div>
  );
}
