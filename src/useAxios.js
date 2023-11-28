import axios from "axios";
import { useEffect, useState } from "react";

const instance = axios.create({
  baseURL: "https://react-mini-projects-api.classbon.com",
});

const useAxios = (axiosParams) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const result = await instance.request(axiosParams);
      setResponse(result.data);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [axiosParams.url]);

  return [response, isLoading, hasError];
};

export default useAxios;
