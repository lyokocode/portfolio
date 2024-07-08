import axios from 'axios';


export const handleInputChange = (e, formData, setFormData, setImgSrc) => {
    const { name, type, checked, files, value } = e.target;
    const newValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
    if (type === 'file' && files[0]) {
        setImgSrc(URL.createObjectURL(files[0])); // Dosyayı görüntülemek için imgSrc state'ini güncelle
    }
    setFormData({
        ...formData,
        [name]: newValue,
    });
};


export const handleSubmitForm = async (formData, UserId, api, navigate) => {
    try {
        const form = new FormData();
        form.append('UserId', UserId);

        for (const key in formData) {
            form.append(key, formData[key]);
        }

        await axios.post(`${import.meta.env.VITE_REACT_BASE_URL}${api}`, form, { withCredentials: true });
        navigate("/users");
    } catch (error) {
        console.error('Error:', error);
    }
};