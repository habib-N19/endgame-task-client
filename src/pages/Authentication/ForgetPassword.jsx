import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { useForm } from 'react-hook-form'

const ForgetPassword = () => {
  const { resetPassword } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()
  const onSubmit = data => {
    console.log(data)
    resetPassword(data.email)
      .then(result => {
        console.log(result)
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div className='max-h-screen mx-auto mt-20 w-96 '>
      <form
        className='flex flex-col items-center justify-center h-full py-6 shadow-lg bg-slate-100'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='relative w-full px-4 my-6 text-gray-400 focus-within:text-gray-600'>
          <input
            type='email'
            {...register('email', { required: true })}
            name='email'
            placeholder='Enter email'
            className='block w-full p-4 pl-10 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
          />
          {errors.email && (
            <span className='text-red-600'>Email is required</span>
          )}
        </div>
        <button
          type='submit'
          className='inline-flex items-center justify-center px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md w-fit focus:outline-none hover:bg-blue-700 focus:bg-blue-700'
        >
          Send Email
        </button>
      </form>
    </div>
  )
}

export default ForgetPassword
