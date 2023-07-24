/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const CardTemplate = ({ college }) => {
  console.log(college)
  const {
    college_image_link,
    college_name,
    admission_date,
    research_amount,
    events
  } = college
  return (
    <div className='min-w-96'>
      <div className='min-w-96'>
        <img
          src={college_image_link}
          alt=' college image'
          className='object-cover object-center w-full rounded-lg shadow-md'
        />

        <div className='relative px-4 -mt-16 '>
          <div className='p-6 bg-white rounded-lg shadow-lg'>
            <div className='flex items-baseline'>
              <span className='inline-block px-2 text-xs font-semibold tracking-wide text-teal-800 uppercase bg-teal-200 rounded-full'>
                Admission Date {admission_date}
              </span>
            </div>

            <h4 className='mt-1 text-xl font-semibold leading-tight uppercase truncate'>
              {college_name}
            </h4>

            <div className='mt-1'>
              <div className='ml-2 text-xs font-semibold tracking-wider text-gray-600 uppercase'>
                Research history {research_amount} &bull; Events{' '}
                {events?.length}
              </div>
            </div>
            <div className='mt-1'></div>
            <div className='mt-4'>
              <span className='font-semibold text-teal-600 text-md'>
                4/5 ratings
              </span>
              <span className='text-sm text-gray-600'>
                (based on 234 ratings)
              </span>
            </div>
            <Link
              className='my-2 btn btn-primary'
              to={`/colleges/${college._id}`}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardTemplate
