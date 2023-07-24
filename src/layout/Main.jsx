import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../pages/shared/NavBar/NavBar'

const Main = () => {
  const location = useLocation()
  const logInPage = location.pathname === '/login'
  const signUpPage = location.pathname === '/signup'

  return (
    <div className='bg-base-100'>
      {!(logInPage || signUpPage) && <NavBar />}
      <Outlet></Outlet>
    </div>
  )
}

export default Main
