import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "./_child/Author";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCode, { Autoplay, Navigation } from "swiper";
import Fetcher from "lib/fetcher";
import Spinner from "./_child/Spinner";
import ErrorSpinner from "./_child/ErrorSpinner";

const Section1 = () => {
  SwiperCode.use([Autoplay]);
  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };
  const { data, isLoading, isError } = Fetcher("api/popular");
  if (isLoading) return <Spinner />;
  if (isError) return <ErrorSpinner />;
  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20 ">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          navigation
        >
          {data.data.map((value, i) => (
            <SwiperSlide key={i}>
              <Slide data={value} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Section1;

function Slide({ data }) {
  const { id, title, subtitle, category, img, published, author } = data;

  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={`/posts/${id}`}>
          <a>
            <Image src={img || ""} alt={id} width={600} height={450} />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="category">
          <Link href={`/posts/${id}`}>
            <a className="text-orange-600 hover:text-orange-800">
              {category || "unknown"}
            </a>
          </Link>
          <Link href={`/posts/${id}`}>
            <a className="text-gray-800 hover:text-gray-600 ml-2">
              {published || "unknown"}
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
              {title || "unknown"}
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">{subtitle || "unknown"}</p>
        {author ? <Author {...author} /> : ""}
      </div>
    </div>
  );
}
