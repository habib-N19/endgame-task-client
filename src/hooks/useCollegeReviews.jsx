import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useCollegeReviews = () => {
  const { data: reviews = [], refetch } = useQuery({
    queryKey: 'reviews',
    queryFn: async () => {
      const res = await axios.get(
        'https://end-game-server-two.vercel.app/reviews'
      )
      return res.data
    }
  })
  return [reviews, refetch]
}

export default useCollegeReviews
