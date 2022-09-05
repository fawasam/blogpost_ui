import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "./Author";

import Spinner from "./Spinner";
import ErrorSpinner from "./ErrorSpinner";
import usefetcher from "lib/fetcher";

const Related = () => {
  const { data, isLoading, isError } = usefetcher("api/posts");
  if (isLoading) return <Spinner />;
  if (isError) return <ErrorSpinner />;
  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10 text-center">Related</h1>
      <div className="flex flex-col gap-10">
        {data.data.map((value, i) => (
          <RelatedPost data={value} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Related;

function RelatedPost({ data }) {
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
              height={200}
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
          <a className="text-gray-800 hover:text-gray-600">July 3,2022</a>
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
