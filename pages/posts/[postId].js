import Author from "@/components/_child/Author";
import Related from "@/components/_child/Related";
import Spinner from "@/components/_child/Spinner";
import ErrorSpinner from "@/components/_child/ErrorSpinner";
import Layout from "layout/Layout";
import Fetcher from "lib/fetcher";
import getPost from "lib/helper";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";

export default function Page({ fallback }) {
  const router = useRouter();
  const { postId } = router.query;
  const { data, isLoading, isError } = Fetcher(`api/posts/${postId}`);
  const post = data?.data;

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorSpinner />;

  return (
    <SWRConfig value={{ fallback }}>
      <Article {...post} />
    </SWRConfig>
  );
}

function Article({ id, title, subtitle, img, author, description }) {
  return (
    <Layout>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          {author ? <Author {...author} /> : ""}
        </div>
        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center">
            {title || "unknown"}
          </h1>
          <p className="text-gray-500 text-xl text-center">
            {subtitle || "unknown"}
          </p>
          <div className="py-10">
            <Image src={img || ""} alt={id} width={900} height={600} />
          </div>
          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            {description || "unknown"}
          </div>
        </div>
        <Related />
      </section>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPost(params.postId);
  return {
    props: {
      fallback: {
        "/api/posts": posts,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPost();
  const paths = posts.data.map((value) => {
    return {
      params: {
        postId: value.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
