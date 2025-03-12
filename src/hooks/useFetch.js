import { useEffect, useState } from "react";


export default function useFetch(url) {
    console.log("API URL:", process.env.REACT_APP_API_URL);
    const [data, setData] = useState([]);
    console.log(url);
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, [url]);  // []: Runs only once initially
                // [url]: Runs whenever 'url' changes
    return data
}