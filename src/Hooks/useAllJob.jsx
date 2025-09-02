import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const useAllJob = () => {
     const { data:jobs = [], refetch,isLoading} = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:5000/jobs')
            return data
        }

    })
    return [jobs,refetch,isLoading]
};

export default useAllJob;