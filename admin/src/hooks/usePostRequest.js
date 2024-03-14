import { useState } from 'react';
import axios from 'axios';

const usePostRequest = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = async (postData) => {
        setLoading(true);
        try {
            const response = await axios.post(url, postData, { withCredentials: true });
            setLoading(false);
            return response.data;
        } catch (error) {
            setLoading(false);
            setError(error);
            throw error;
        }
    };

    return { loading, error, postData };
};

export default usePostRequest;
