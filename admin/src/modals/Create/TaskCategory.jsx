import { useState } from "react";
import "./category.scss";
import { MdOutlineClose } from "react-icons/md";
import { toast } from "react-toastify";
import axios from "axios";

export const TaskCategory = ({ setShow, reFetch }) => {
    const [categoryName, setCategoryName] = useState("");

    const handleSubmitCategory = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`https://aelita-portfolio-server.vercel.app/api/task-category`, {
                name: categoryName,
            }, { withCredentials: true });

            toast.success("Kategori oluşturuldu", {
                position: "bottom-right"
            });

            setShow(false)
            reFetch()
        } catch (err) {
            toast.error(err?.response?.data?.message || err?.response?.data, {
                position: "bottom-right",
            });
        }
    };

    return (
        <div className="expenseCategory">
            <button onClick={() => setShow(false)} className="modalCloseBtn">
                <MdOutlineClose size={25} />
            </button>

            <h1 className="title">Yeni Bir Kategori Oluştur</h1>

            <form className="expenseForm" onSubmit={handleSubmitCategory}>
                <div>
                    <label htmlFor="name">Kategori ismi:</label>
                    <input
                        type="text"
                        id="name"
                        className="expenseInput"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submitBtn">Kategori Oluştur</button>
            </form>
        </div>
    );
};