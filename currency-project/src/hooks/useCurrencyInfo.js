import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result[currency]) {
          console.log("Currency data loaded successfully");
          setData(result[currency]);
        } else {
          console.error("Invalid API response format:", result);
        }
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    console.log("Fetching data for currency:", currency);
    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;