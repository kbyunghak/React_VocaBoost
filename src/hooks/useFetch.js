import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([]);
    
    url = url.replace("http://localhost:3001", "http://localhost:8080/api");
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