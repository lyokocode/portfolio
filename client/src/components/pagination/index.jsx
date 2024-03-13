import "./pagination.scss";
import { GrPrevious, GrNext } from "react-icons/gr";

export const Pagination = ({ currentPage, onPageChange, totalPages }) => {


    return (
        <div className="pagination">
            <button className="button prev"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                style={{ backgroundColor: currentPage === 1 ? "gray" : "" }}
            >
                <GrPrevious />
                Prev
            </button>
            <span> {currentPage} / {totalPages}</span>
            <button className="button next"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                style={{ backgroundColor: currentPage === totalPages ? "gray" : "" }}

            >
                Next
                <GrNext />
            </button>
        </div>
    );
};