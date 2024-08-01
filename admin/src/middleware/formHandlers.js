import { useState } from 'react';

const useFormHandler = (updateData, url, reFetch, onClose) => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, type, checked, files, value } = e.target;
        const newValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;

        setFormData(prev => ({
            ...prev,
            [name]: newValue,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const form = new FormData();

            for (const key in formData) {
                if (Array.isArray(formData[key])) {
                    formData[key].forEach((file, index) => {
                        form.append(`${key}_${index}`, file);
                    });
                } else {
                    form.append(key, formData[key]);
                }
            }

            await updateData(url, form);

            reFetch();
            onClose();
        } catch (error) {
            console.error(error);
        }
    };

    return { formData, handleChange, handleSubmit };
};

export default useFormHandler;
