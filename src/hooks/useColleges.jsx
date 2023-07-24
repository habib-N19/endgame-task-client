import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useColleges = () => {
  const { data: colleges = [], refetch } = useQuery({
    queryKey: ['colleges'],

    queryFn: async () => {
      const res = await axios.get(
        'https://end-game-server-two.vercel.app/colleges'
      )

      return res.data
    }
  })
  return [colleges, refetch]
}

export default useColleges
