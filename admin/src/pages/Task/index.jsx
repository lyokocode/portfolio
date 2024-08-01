// pages/Task.js
import { TaskCard } from '@/components';
import { createModal, useModals } from "@/utils/modal";
import Modal from "@/modals";
import useFetch from "@/hooks/useFetch";
import "./task.scss";

export const Task = () => {

    const { data, loading, error, reFetch } = useFetch(`task`);
    const modals = useModals();
    if (error) return "error"
    console.log(data)
    return (
        <div className="taskPage">
            {modals.length > 0 && <Modal />}

            <header className="header">
                <button
                    onClick={() => {
                        createModal("createTask");
                    }}
                    className="link"
                >
                    <h1>Yeni görev oluştur</h1>
                </button>

                <button onClick={() => reFetch()} className="refetch">
                    Yenile
                </button>
            </header>
            <div className="taskList">
                {data && !loading && data?.map(task => (
                    <TaskCard key={task.id} task={task} reFetch={reFetch} />
                ))}
            </div>
        </div>
    );
};