import { useParams } from 'react-router-dom'
import useColleges from '../../hooks/useColleges'

const CollegeCard = () => {
  const { id } = useParams()
  const [colleges] = useColleges()
  console.log(id)
  const college = colleges?.find(college => college._id == id)
  console.log(college)

  return (
    <div className='grid w-10/12 grid-cols-1 mx-auto rounded-lg md:gap-4 md:grid-cols-2 bg-base-200'>
      <div>
        <img src={college.college_image_link} alt='' />
      </div>
      <div className='space-y-3'>
        <h2 className='my-4 text-2xl font-bold text-center'>
          {college.college_name}
        </h2>

        <div>
          <p className='text-lg font-semibold text-primary'>
            Admission Process
          </p>
          <p>{college.admission_process}</p>
        </div>

        <div>
          <p className='text-lg font-semibold text-primary'>Events Details</p>
          <p>{college.events_details}</p>
        </div>
        <div>
          <p className='text-lg font-semibold text-primary'>Research Works</p>
          <p>{college.research_works}</p>
        </div>
        <div>
          <p className='text-lg font-semibold text-primary'>
            Sports Categories
          </p>
          <ul>
            {college.sports_available.map((sport, index) => (
              <li key={index}>{sport}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CollegeCard
