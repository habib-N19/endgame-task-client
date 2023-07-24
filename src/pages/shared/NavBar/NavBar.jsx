import Headroom from 'react-headroom'
import { NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import SearchCollege from '../../Home/SearchCollege/SearchCollege'

const NavBar = () => {
  const { user } = useAuth()
  const navItems = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/colleges'>Colleges</NavLink>
      </li>
      <li>
        <NavLink to='/admission'>Admission</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to='/my_college'>My College</NavLink>
          </li>
        </>
      )}
    </>
  )
  return (
    <Headroom>
      <nav className='grid grid-cols-3 px-4 items-center justify-between w-full mb-2 h-[60px]  max-w-screen md:mb-6'>
        <div>
          {user && (
            <button className='rounded-full btn hover:btn-primary '>
              <NavLink to='/user-profile'>{user.displayName}</NavLink>
            </button>
          )}
        </div>
        <ul className='flex justify-center px-6 py-3 mx-auto font-semibold rounded-full shadow-lg glass md:gap-4 '>
          {navItems}
        </ul>
        <div className='w-full ml-auto'>
          <SearchCollege />
        </div>
      </nav>
    </Headroom>
  )
}

export default NavBar
