import { useState, useCallback, useMemo } from "react";
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const res = await axios.get(url);
            setData(res.data);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    }, [url]);

    useMemo(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error };
};

export default useFetch;
