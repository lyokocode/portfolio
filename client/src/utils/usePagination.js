import { useNavigate, useSearchParams } from 'react-router-dom';

export const usePagination = (defaultPageSize, count) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const page = parseInt(searchParams.get('page')) || 1;
    const pageSize = parseInt(searchParams.get('pageSize')) || defaultPageSize;

    const totalPages = count && Math.ceil(count / pageSize);


    const handlePageChange = (newPage) => {
        searchParams.set('page', newPage);
        searchParams.set('pageSize', pageSize);
        navigate(`?${searchParams.toString()}`);
    };

    return { page, pageSize, handlePageChange, totalPages };
};