import { useState, useEffect } from "react";
import useFetch from "@/hooks/useFetch";
import axios from "axios";
import "./task.scss";
import { toast } from "react-toastify";
import { destroyModal } from "@/utils/modal";
import { TaskCategory } from "./TaskCategory";
import usePost from "@/hooks/usePost";

export const Task = () => {
    const [dueDate, setDueDate] = useState("");
    const [expenseName, setExpenseName] = useState("");
    const [priority, setPriority] = useState("");
    const [description, setDescription] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [userIds, setUserIds] = useState([]);
    const [show, setShow] = useState(false);
    const { postData } = usePost();

    const { data: categories, loading, error, reFetch } = useFetch("task-category");
    const { data: users, loading: userLoading, userError } = useFetch("users");

    useEffect(() => {
        if (userError) {
            toast.error("Kullanıcıları yüklerken bir hata oluştu", {
                position: "bottom-right"
            });
        }
    }, [userError]);

    const handleUserChange = (e) => {
        const options = e.target.options;
        const selectedUserIds = Array.from(options)
            .filter(option => option.selected)
            .map(option => option.value);
        setUserIds(selectedUserIds);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await postData(`task`, {
                title: expenseName,
                description,
                dueDate,
                categoryId: parseInt(categoryId),
                priority,
                userIds: userIds.map(id => parseInt(id))
            }, { withCredentials: true });

            toast.success("Görev oluşturuldu", {
                position: "bottom-right"
            });
            destroyModal();
        } catch (err) {

            toast.error(err?.response?.data?.message || err?.response?.data, {
                position: "bottom-right",
            });

        }
    };


    return (
        <div className="expenseContainer">
            <h1 className="title">Yeni Bir Görev Oluştur</h1>
            <form className="expenseForm" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Görev Başlığı:</label>
                    <input
                        type="text"
                        id="title"
                        className="expenseInput"
                        value={expenseName}
                        onChange={(e) => setExpenseName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Görev Açıklaması:</label>
                    <textarea
                        id="description"
                        className="expenseInput"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="date">Görev Tarihi:</label>
                    <input
                        type="date"
                        id="dueDate"
                        className="expenseInput"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="priority">Önem Derecesi:</label>
                    <select
                        id="priority"
                        className="expense-select"
                        onChange={(e) => setPriority(e.target.value)}
                        required
                    >
                        <option value="">Seçiniz</option>
                        <option value="düşük">düşük</option>
                        <option value="orta">orta</option>
                        <option value="yüksek">yüksek</option>
                    </select>
                    <button onClick={() => setShow(!show)} className="createBtn" type="button">Kategori Oluştur</button>
                </div>
                <div>
                    <label htmlFor="category">Görevin Kategorisi:</label>
                    <select
                        id="category"
                        className="expense-select"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                        required
                    >
                        <option value="">Kategori seçiniz</option>
                        {categories && !loading && categories?.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    <button onClick={() => setShow(!show)} className="createBtn" type="button">Kategori Oluştur</button>
                </div>
                <div>
                    <label htmlFor="users">Kullanıcılar:</label>
                    <select
                        id="users"
                        className="expense-select"
                        multiple
                        value={userIds}
                        onChange={handleUserChange}
                    >
                        <option value="">ctrl'ye basarak kullanıcı seçiniz</option>

                        {users && !userLoading && users?.map((user) => (
                            <option key={user.id} value={user.id} className="test">
                                {user.fullName}
                            </option>
                        ))}
                    </select>
                </div>
                <button className="submitBtn" type="submit">Görev Oluştur</button>
            </form>
            {show ? <TaskCategory setShow={setShow} reFetch={reFetch} /> : null}
        </div>
    );
};