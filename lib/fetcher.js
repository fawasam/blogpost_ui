import useSwr from "swr";
const baseUrl = "http://blogpost-ui.vercel.app/";

const response = (...args) => fetch(...args).then((res) => res.json());

export default function Fetcher(endpoint) {
  const { data, error } = useSwr(`${baseUrl}${endpoint}`, response);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
