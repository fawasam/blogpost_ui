import data from "./data";

// api/trending
export default function handler(req, res) {
  const { Trending } = data;
  if (Trending) return res.status(200).json({ success: true, data: Trending });
  return res.status(404).json({ success: false, error: "Data not found" });
}
