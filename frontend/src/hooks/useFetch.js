import {useState, useEffect, useRef} from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const dataRef = useRef(data);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const res = await axios({
                    method : "get",
                    url
                })
                setLoading(false);
                setData(res.data.data);
            }
            fetchData();
        } catch (err) {
            console.log(err)
        }
    }, [url, dataRef])

    return ({loading, data, setData})
}

export default useFetch;