import data from "../data";

// api/trending
export default function handler(req, res) {
  const { postId } = req.query;
  const { Posts } = data;
  if (postId) {
    const post = Posts.find((value) => value.id == postId);
    return res.status(200).json({ success: true, data: post });
  }

  return res.status(404).json({ success: false, error: "Post not found" });
}
