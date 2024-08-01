import axios from 'axios';
import { toast } from 'react-toastify';

export const handleSubmit = async (formData, url, navigate) => {
    try {
        const form = new FormData();
        for (const key in formData) {
            form.append(key, formData[key]);
        }

        await axios.post(url, form, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
        });

        toast.success("Görev oluşturuldu", {
            position: "bottom-right"
        });
        navigate("..");
    } catch (err) {
        toast.error(err?.response?.data?.message || err?.response?.data, {
            position: "bottom-right",
        });
    }
};
