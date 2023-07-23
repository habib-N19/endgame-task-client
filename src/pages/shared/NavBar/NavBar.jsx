import Headroom from 'react-headroom'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  const navItems = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/colleges'>Colleges</Link>
      </li>
      <li>
        <Link to='/admission'>Admission</Link>
      </li>
      {
        <>
          <li>
            <Link to='/my-college'>My College</Link>
          </li>
        </>
      }
    </>
  )
  return (
    <Headroom>
      <nav className='mb-2 md:mb-6'>
        <ul className='flex justify-center px-6 py-3 mx-auto mt-5 font-semibold rounded-full shadow-lg w-fit md:gap-4'>
          {navItems}
        </ul>
      </nav>
    </Headroom>
  )
}

export default NavBar
