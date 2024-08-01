
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