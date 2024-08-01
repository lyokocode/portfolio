import { useState, useCallback } from "react";
import axios from 'axios';

const useUpdate = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateData = useCallback(async (url, formData) => {
        setLoading(true);
        try {
            const res = await axios.put(`${import.meta.env.VITE_REACT_BASE_URL}${url}`, formData, { withCredentials: true });
            return res.data;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    return { updateData, loading, error };
};

export default useUpdate;