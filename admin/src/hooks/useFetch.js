import { useEffect, useState, useMemo } from "react";
import axios from 'axios';
import { toast } from "react-toastify";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`${import.meta.env.VITE_REACT_BASE_URL}${url}`, { withCredentials: true });

            setData(res.data);
        } catch (err) {
            toast.error(err?.response?.data?.message || err?.response?.data, {
                position: "bottom-right",
            });
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
            const res = await axios.get(`${import.meta.env.VITE_REACT_BASE_URL}${url}`, { withCredentials: true });
            setData(res.data);
        } catch (err) {
            setError(err);
            toast.error(err?.response?.data?.message || err?.response?.data, {
                position: "bottom-right",
            });
        }
        setLoading(false);
    };

    return useMemo(() => ({ data, loading, error, reFetch }), [data, loading, error, reFetch]);
};

export default useFetch;