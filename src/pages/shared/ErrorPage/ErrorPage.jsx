import Lottie from 'lottie-react'
import errorAnimation from '../../../assets/notFound.json'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div className='grid items-center grid-cols-1 bg-[#f2f2f2] md:grid-cols-3'>
      <div className='col-span-2 overflow-hidden'>
        <Lottie
          className='h-screen'
          animationData={errorAnimation}
          loop={true}
        />
      </div>
      <div className='col-span-1 pl-6 space-y-8 text-3xl italic font-bold text-blue-800'>
        {' '}
        <h1 className=''>Oops... </h1>
        <Link
          className='text-lg font-bold text-white transition duration-200 ease-in-out delay-150 bg-blue-800 hover:-translate-y-1 hover:scale-110 btn hover:bg-white hover:text-blue-800 hover:outline-blue-800 hover:outline'
          to='/'
        >
          Go Back
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
