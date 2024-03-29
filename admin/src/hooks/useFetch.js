import { useEffect, useState, useMemo } from "react";
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url, { withCredentials: true });
            setData(res.data);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    const reFetch = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url);
            setData(res.data);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    };

    return useMemo(() => ({ data, loading, error, reFetch }), [data, loading, error, reFetch]);
};

export default useFetch;