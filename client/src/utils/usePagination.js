import { useNavigate, useSearchParams } from 'react-router-dom';

export const usePagination = (defaultPageSize = 5, count = 5) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    // URL'den sayfa numarasını ve sayfa boyutunu alın
    const page = parseInt(searchParams.get('page')) || 1;
    const pageSize = parseInt(searchParams.get('pageSize')) || defaultPageSize;

    const totalPages = count && Math.floor(count / pageSize);

    const handlePageChange = (newPage) => {
        searchParams.set('page', newPage);
        searchParams.set('pageSize', pageSize);
        navigate(`?${searchParams.toString()}`);
    };

    return { page, pageSize, handlePageChange, totalPages };
};