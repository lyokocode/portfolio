// pages/Task.js
import { TaskCard } from '@/components';
import { createModal, useModals } from "@/utils/modal";
import Modal from "@/modals";
import useFetch from "@/hooks/useFetch";
import "./task.scss";

export const Task = () => {
    const modals = useModals();
    const { data, loading, error, reFetch } = useFetch(`task/`);

    console.log(error)
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

                <button onClick={reFetch ? () => reFetch() : null} className="refetch">
                    Yenile
                </button>
            </header>

            {data.length > 0 && (
                <div className="taskList">
                    {data && !loading && data?.map(task => (
                        <TaskCard key={task.id} task={task} reFetch={reFetch} />
                    ))}
                </div>
            )}
        </div>
    );
};