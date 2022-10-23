import { useEffect, useState } from "react";

const useApi = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url).then(res => res.json())
    .then(res => {
      setIsLoading(false);
      setData(res.message)
    }).catch(err => {
      setIsLoading(false);
      throw new Error(`Error occured while fetching from url ${url}`);
    })
  }, [url])
  return [data, isLoading]
}

export default useApi;