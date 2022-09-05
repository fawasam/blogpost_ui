import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "./_child/Author";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCode, { Autoplay } from "swiper";
import fetcher from "lib/fetcher";
import Spinner from "./_child/Spinner";
import ErrorSpinner from "./_child/ErrorSpinner";

const Section3 = () => {
  SwiperCode.use([Autoplay]);
  const { data, isLoading, isError } = fetcher("api/trending");
  if (isLoading) return <Spinner />;
  if (isError) return <ErrorSpinner />;

  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

      <Swiper
        // slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 30 },
        }}
        spaceBetween={40}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {data.data.map((value, i) => (
          <SwiperSlide key={i}>
            <Post data={value} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Section3;

function Post({ data }) {
  const { id, title, subtitle, category, img, published, author } = data;
  return (
    <div className="item">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              src={img || ""}
              alt={id}
              width={600}
              height={400}
              loading="lazy"
              className="rounded hover:scale-110 transition"
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
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
      </div>
      <div className="title">
        <Link href={`/posts/${id}`}>
          <a className="text-3xl md:text-4xl   font-bold text-gray-800 hover:text-gray-600">
            {title || "unknown"}
          </a>
        </Link>
      </div>
      <p className="text-gray-500 py-3">{subtitle || "unknown"}</p>
      {author ? <Author {...author} /> : ""}
    </div>
  );
}
