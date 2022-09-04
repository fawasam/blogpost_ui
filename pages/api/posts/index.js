import data from "../data";

// api/trending
export default function handler(req, res) {
  const { Posts } = data;
  if (Posts)
    return res
      .status(200)
      .json({ success: true, count: Posts.length, data: Posts });
  return res.status(404).json({ success: false, error: "Data not found" });
}
