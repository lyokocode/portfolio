import { useState } from 'react';
import { FaExclamationTriangle, FaExclamationCircle, FaCheckCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { CiMenuKebab } from "react-icons/ci";
import useDelete from '@/hooks/useDelete';
import { Dropdown } from './Dropdown';
import { UpdateTaskModal } from '@/modals/Update/UpdateTask';
import useUpdate from '@/hooks/useUpdate';
import PropTypes from 'prop-types';
import './taskCard.scss';

export const TaskCard = ({ task, reFetch }) => {

    const [showDropdown, setShowDropdown] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const { deleteData } = useDelete();
    const { updateData } = useUpdate()

    const handleComplete = async (id) => {
        try {
            await updateData(`task/complete/${id}`, { withCredentials: true });
            toast.success("Görev durumu güncellendi", { position: "bottom-right" });
            reFetch();
        } catch (err) {
            toast.error(err?.response?.data?.message || err?.response?.data, { position: "bottom-right" });
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteData(`task/${id}`);
            toast.success("Görev silindi", { position: "bottom-right" });
            reFetch();
        } catch (err) {
            toast.error(err?.response?.data?.message || err?.response?.data, { position: "bottom-right" });
        }
    };

    return (
        <>
            <div className={`taskCard ${task.completed ? 'completed' : 'notCompleted'}`} >
                <button className='editBtn' onClick={() => setShowDropdown(!showDropdown)}>
                    <CiMenuKebab size={22} />
                </button>
                {showDropdown && (
                    <Dropdown
                        onEdit={() => setShowModal(true)}
                        onDelete={() => handleDelete(task.id)}
                        onComplete={() => handleComplete(task.id)}
                        taskCompleted={task.completed}
                    />
                )}

                <div className="header">
                    <h2>{task.title}</h2>
                    <div className="priority">
                        {renderPriorityIcon(task.priority)}
                    </div>
                </div>

                <p className="description">{task.description}</p>
                <p className="category">Kategori: {task.TaskCategory.name}</p>
                <p className="dueDate">Son Tarih: {new Date(task.dueDate).toLocaleDateString()}</p>
                <h3>Atanan Kullanıcılar:</h3>
                <div className="assignedUsers">
                    {task.Users.map(user => (
                        <div key={user.id} className="userInitials" title={user.fullName}>
                            {getInitials(user.fullName)}
                        </div>
                    ))}
                </div>
            </div>
            {showModal && (
                <UpdateTaskModal
                    task={task}
                    reFetch={reFetch}
                    closeModal={() => setShowModal(false)}
                />
            )}
        </>
    );
};

const renderPriorityIcon = (priority) => {
    switch (priority) {
        case 'düşük':
            return <FaCheckCircle className="priorityIcon low" />;
        case 'orta':
            return <FaExclamationCircle className="priorityIcon medium" />;
        case 'yüksek':
            return <FaExclamationTriangle className="priorityIcon high" />;
        default:
            return null;
    }
};


const getInitials = (fullName) => {
    const names = fullName.split(' ');
    return names.map(name => name[0]).join('').toUpperCase();
};


TaskCard.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        dueDate: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        priority: PropTypes.oneOf(['düşük', 'orta', 'yüksek']).isRequired,
        TaskCategory: PropTypes.shape({
            name: PropTypes.string.isRequired
        }).isRequired,
        Users: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                fullName: PropTypes.string.isRequired
            })
        ).isRequired
    }).isRequired,
    reFetch: PropTypes.func.isRequired
};