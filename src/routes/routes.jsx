import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import ErrorPage from '../pages/shared/ErrorPage/ErrorPage'
import Home from '../pages/Home/Home/Home'
import Login from '../pages/Authentication/Login'
import Signup from '../pages/Authentication/Signup'
import Colleges from '../pages/Colleges/Colleges'
import Admission from '../pages/Admission/Admission'
import MyCollege from '../pages/MyCollege/MyCollege'
import MyProfile from '../pages/MyProfile/MyProfile'
import ForgetPassword from '../pages/Authentication/ForgetPassword'
import UserProfile from '../pages/UserProfile/UserProfile'
import CollegeCard from '../pages/Colleges/CollegeCard'
import PrivateRoute from './PrivateRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/reset',
        element: <ForgetPassword />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/colleges',
        element: <Colleges />
      },
      {
        path: '/colleges/:id',
        element: (
          <PrivateRoute>
            <CollegeCard />
          </PrivateRoute>
        )
      },
      {
        path: '/admission',
        element: <Admission />
      },
      {
        path: '/my_college',
        element: (
          <PrivateRoute>
            <MyCollege />
          </PrivateRoute>
        )
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        )
      },
      {
        path: '/user-profile',
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        )
      }
    ]
  }
])
export default router
