export const handleSubmit = async (formData, updateData, endpoint, onClose, reFetch) => {
    try {
        const form = new FormData();
        for (const key in formData) {
            form.append(key, formData[key]);
        }

        await updateData(endpoint, form);
        reFetch();
        onClose();
    } catch (error) {
        console.log(error);
    }
};