import { useState, useCallback } from "react";
import axios from 'axios';

const usePost = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = useCallback(async (url, formData) => {
        setLoading(true);
        try {
            const res = await axios.post(`${import.meta.env.VITE_REACT_BASE_URL}${url}`, formData, { withCredentials: true });
            return res.data;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    return { postData, loading, error };
};

export default usePost;