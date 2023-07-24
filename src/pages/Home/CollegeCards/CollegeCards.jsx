import { Link } from 'react-router-dom'
import useColleges from '../../../hooks/useColleges'

const CollegeCards = () => {
  const [colleges] = useColleges()
  const topColleges = colleges.slice(0, 3)
  console.log(topColleges)
  return (
    <div className='container grid grid-cols-3 p-4 mx-auto mt-32 md:grid-cols-1 md:p-0'>
      {/* <!-- Card wrapper --> */}
      {topColleges.map(college => (
        <div
          key={college._id}
          className='flex flex-wrap w-full mx-auto border border-black shadow-lg lg:w-4/5'
        >
          {/* <!-- Card image --> */}
          <div
            className='relative w-full h-64 bg-bottom bg-cover border md:w-1/3 md:h-auto'
            style={{
              'background-image': `url(${college.college_image_link})`
            }}
          ></div>
          {/* <!-- ./Card image --> */}

          {/* <!-- Card body --> */}
          <div className='w-full bg-white md:w-2/3'>
            {/* <!-- Card body - outer wrapper --> */}
            <div className='relative h-full px-6 mx-auto md:px-0 md:pt-6 md:-ml-6'>
              {/* <!-- Card body - inner wrapper --> */}
              {/* <div className='flex flex-wrap items-center mb-4 -mt-6 bg-white md:p-6 lg:h-full md:mt-0 md:mb-0 md:flex-wrap'> */}
              <div className='grid justify-between grid-cols-1 mb-4 -mt-6 bg-white md:p-6 lg:h-full md:mt-0 md:mb-0 md:grid-cols-4 md:gap-6'>
                {/* <!-- Card title and subtitle --> */}
                <div className='w-full text-center lg:w-full lg:border-right lg:border-solid md:text-left'>
                  <h3 className='font-bold'>{college.college_name}</h3>
                  <p className='mt-3 mb-0 text-sm italic text-orange-600 text-grey-dark'>
                    Admission Date: {college.admission_date}
                  </p>
                  <hr className='w-1/4 mt-4 border md:ml-0 lg:hidden' />
                </div>
                {/* <!-- ./Card title and subtitle --> */}

                {/* <!-- Card description --> */}
                <div className='grid w-full grid-cols-1 col-span-3 md:gap-3 md:grid-cols-2 lg:px-2'>
                  <div className='col-span-1'>
                    <h5 className='text-lg font-bold text-primary'>Events</h5>
                    <ul className='ml-4 '>
                      {college.events?.map((event, index) => (
                        <li
                          key={index}
                          className='px-1 transition-all rounded hover:bg-primary hover:text-white '
                        >
                          {event}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='col-span-1'>
                    <h5 className='text-lg font-bold text-primary'>Sports</h5>
                    <ul className='ml-4 '>
                      {college.sports_available.map((sport, index) => (
                        <li
                          key={index}
                          className='px-1 transition-all rounded hover:bg-primary hover:text-white '
                        >
                          {sport}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='col-span-2'>
                    Research History: {college.research_amount}
                  </div>
                </div>
                {/* <!-- ./Card description --> */}

                {/* <!-- Call to action button --> */}
                <div className='w-full col-span-4 mx-auto mt-6 text-center lg:w-3/5 lg:mt-0 lg:px-4 md:text-left'>
                  <Link
                    to={`/colleges/${college._id}`}
                    className='w-full py-2 border border-solid btn-primary btn hover:bg-grey-darker hover:text-white border-grey lg:w-full'
                  >
                    View Details
                  </Link>
                </div>
                {/* <!-- ./Call to action button --> */}
              </div>
              {/* <!-- ./Card body - inner wrapper --> */}
            </div>
            {/* <!-- ./Card body - outer wrapper --> */}
          </div>
          {/* <!-- ./Card body --> */}
        </div>
      ))}
      {/* <!-- ./Card wrapper --> */}
    </div>
  )
}

export default CollegeCards
