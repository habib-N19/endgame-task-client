/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  if (loading) {
    return <h2>Loading....</h2>
  }
  if (user) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default PrivateRoute
