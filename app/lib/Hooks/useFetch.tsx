"use client";

import { useEffect, useState } from "react";

interface FetchData {
  url: string;
}

//améliorer le type "any" ci-dessous

const useFetch = ({ url }: FetchData) => {
  const [data, setData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { isLoading, data, error };
};

export default useFetch;
