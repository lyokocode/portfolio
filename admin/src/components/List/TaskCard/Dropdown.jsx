import PropTypes from 'prop-types';

export const Dropdown = ({ onEdit, onDelete, onComplete, taskCompleted }) => {
    return (
        <div className="dropdown">
            <ul>
                <li onClick={onEdit}>Düzenle</li>
                <li onClick={onDelete}>Sil</li>
                <li onClick={onComplete}>{taskCompleted ? "Görevi kapat" : "Görevi aç"}</li>
            </ul>
        </div>
    )
}

Dropdown.propTypes = {
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired,
    taskCompleted: PropTypes.bool.isRequired
};