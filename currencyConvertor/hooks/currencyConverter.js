import { useEffect, useState } from "react";

function currencyConverter(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch exchange rates");
                }
                const result = await response.json();
                setData(result.rates); // Fix: Correctly accessing exchange rates
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        };

        fetchData();
    }, [currency]);

    return data;
}

export default currencyConverter;
