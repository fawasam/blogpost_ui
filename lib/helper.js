// endpoin :api/posts

const baseUrl = "http://localhost:3000/api/posts";

export default async function getPost(id) {
  const res = await fetch(baseUrl);
  const posts = await res.json();
  if (id) {
    return posts.data.find((value) => value.id == id);
  } else {
    return posts;
  }
}
