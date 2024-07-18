import { useEffect, useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(url, { withCredentials: true });
                setData(res.data);
            } catch (err) {
                setError(err);
                toast.error(err?.response?.data?.message || err?.response?.data, {
                    position: "bottom-right",
                });
            }
            setLoading(false);
        };
        fetchData();
    }, [url]);

    const reFetch = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url, { withCredentials: true });
            setData(res.data);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    };

    return { data, loading, error, reFetch };
};