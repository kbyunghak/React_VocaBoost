import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, [url]);  // []: Runs only once initially
                // [url]: Runs whenever 'url' changes
    return data
}