import { useCallback, useEffect } from 'react';

export const useEscKeyListener = (callback) => {
    const handleKeyDown = useCallback((event) => {
        if (event.key === 'Escape') {
            callback();
        }
    }, [callback]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);
};