import { useMemo } from "react";
import { useQuery } from "react-query";

const useAppQuery = ({ url, fetchInit = {}, reactQueryOptions }) => {
    const fetch = useMemo(() => {
        return async () => {
            const response = await fetch(url, fetchInit);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        };
    }, [url, JSON.stringify(fetchInit)]);

    return useQuery(url, fetch, {
        ...reactQueryOptions,
        refetchOnWindowFocus: false,
    });
};

export default useAppQuery;
