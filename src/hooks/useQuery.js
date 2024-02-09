import { useState, useEffect } from "react";

function useQuery(url) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsLoaded(false);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoaded(false);
      });
  }, [url]);

  return { data, isLoaded };
}

export default useQuery;
