import { useState, useCallback } from "react";
import axios from 'axios';

const useDelete = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteData = useCallback(async (url, data = null) => {
        setLoading(true);
        try {
            const config = {
                withCredentials: true,
                ...(data && { data })
            };
            const res = await axios.delete(`${import.meta.env.VITE_REACT_BASE_URL}${url}`, config);
            return res.data;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    return { deleteData, loading, error };
};

export default useDelete;