import PropTypes from 'prop-types';
import { toast } from "react-toastify";
import "./action.scss"
import useDelete from '@/hooks/useDelete';
export const Action = ({ reFetch, setModalVisible, endpoint, title }) => {

    const { deleteData } = useDelete();

    const handleDelete = async () => {
        try {
            await deleteData(`${endpoint}`);
            toast.success(`${title} has been deleted`, {
                position: "bottom-right"
            });
            reFetch()
        } catch (err) {
            toast.error(err?.response?.data?.message || err?.response?.data, {
                position: "bottom-right",
            });
        }
    };

    return (
        <div className="actionContainer">
            <button className="actionButton update" onClick={setModalVisible} >
                Update
            </button>

            <button className="actionButton delete" onClick={() => handleDelete()}>
                Delete
            </button>
        </div>
    )
}

Action.propTypes = {
    reFetch: PropTypes.func.isRequired,
    setModalVisible: PropTypes.func.isRequired,
    endpoint: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};