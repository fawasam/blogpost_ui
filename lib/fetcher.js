import useSwr from "swr";
const baseUrl = "http://localhost:3000/";

const response = (...args) => fetch(...args).then((res) => res.json());

export default function usefetcher(endpoint) {
  const { data, error } = useSwr(`${baseUrl}${endpoint}`, response);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
