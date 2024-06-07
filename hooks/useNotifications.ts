import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useNotifications = (userId: string) => {
    const { data, error } = useSWR(userId ? `/api/notifications/${userId}` : null, fetcher);

    return {
        data,
        isLoading: !error && !data,
        isError: error
    };
};

export default useNotifications;