import "./pagination.scss";
import { GrPrevious, GrNext } from "react-icons/gr";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {


    return (
        <div className="pagination">
            <button className="button prev"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                style={{ backgroundColor: currentPage === 1 ? "gray" : "" }}
            >
                <GrPrevious />
                Önceki
            </button>

            <button className="button next"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Sonraki
                <GrNext />
            </button>
        </div>
    );
};