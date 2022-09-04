import data from "./data";

// api/trending
export default function handler(req, res) {
  const { Popular } = data;
  if (Popular) return res.status(200).json({ success: true, data: Popular });
  return res.status(404).json({ success: false, error: "Data not found" });
}
