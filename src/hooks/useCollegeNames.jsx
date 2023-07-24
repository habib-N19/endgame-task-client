import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useCollegeNames = () => {
  const {
    data: collegeData = [],
    isLoading: loading,
    refetch
  } = useQuery({
    queryKey: ['collegeData'],
    queryFn: async () => {
      const res = axios.get('https://end-game-server-two.vercel.app/colleges')
      return res.data
    }
  })

  return [collegeData, loading, refetch]
}

export default useCollegeNames
