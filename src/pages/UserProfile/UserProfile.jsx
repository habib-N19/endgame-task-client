import { FaRegPenToSquare } from 'react-icons/fa6'
import UpdateProfile from './UpdateProfile'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'
const UserProfile = () => {
  const { user } = useAuth()
  //   console.log(user)
  return (
    <div className='h-screen mt-6'>
      <div className='flex items-center justify-center w-full'>
        <div className='max-w-xs'>
          <div className='py-3 bg-white rounded-lg shadow-xl'>
            <div className='p-2 photo-wrapper'>
              <img
                className='w-32 h-32 mx-auto rounded-full'
                src='https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp'
                alt='John Doe'
              />
            </div>
            <div className='p-2'>
              <div className='flex items-center justify-center gap-6'>
                <h3 className='text-xl font-medium leading-8 text-center text-gray-900'>
                  Joh Doe
                </h3>

                <label
                  key={user?.displayName}
                  htmlFor={user?.displayName}
                  className='text-lg font-semibold cursor-pointer'
                >
                  <FaRegPenToSquare />
                </label>
                <input
                  type='checkbox'
                  id={user?.displayName}
                  className='modal-toggle'
                />
                <div className='modal'>
                  <div className='w-9/12 mx-auto border border-red-500 shadow-2xl modal-box'>
                    <h3 className='text-2xl font-bold text-center'>
                      Update User Information
                    </h3>
                    <UpdateProfile />
                  </div>
                  <label className='modal-backdrop' htmlFor={user?.displayName}>
                    Close
                  </label>
                </div>
              </div>

              <table className='my-3 text-sm'>
                <tbody>
                  <tr>
                    <td className='px-2 py-2 font-semibold text-gray-500'>
                      Email
                    </td>
                    <td className='px-2 py-2'>{user.email}</td>
                  </tr>
                  <tr>
                    <td className='px-2 py-2 font-semibold text-gray-500'>
                      Phone
                    </td>
                    <td className='px-2 py-2'>+977 9955221114</td>
                  </tr>
                  <tr>
                    <td className='px-2 py-2 font-semibold text-gray-500'>
                      Address
                    </td>
                    <td className='px-2 py-2'>Address Unavailable</td>
                  </tr>
                </tbody>
              </table>

              <div className='my-3 text-center'>
                <Link
                  to='/my_college'
                  className='text-xs italic font-medium text-indigo-500 hover:underline hover:text-indigo-600'
                >
                  View Added Colleges
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
