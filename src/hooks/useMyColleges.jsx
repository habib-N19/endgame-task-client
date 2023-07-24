import axios from 'axios'
import useAuth from './useAuth'
import { useQuery } from '@tanstack/react-query'

const useMyColleges = () => {
  const { user, loading } = useAuth()
  const { refetch, data: myColleges = [] } = useQuery({
    queryKey: ['myColleges', user?.email],
    enabled: loading,
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/submissions/email=${user?.email}`
      )
      return res.data
    }
  })
  return [myColleges, refetch]
}

export default useMyColleges
