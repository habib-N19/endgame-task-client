import useColleges from '../../hooks/useColleges'
import AdmissionForm from './AdmissionForm'

const Admission = () => {
  const [colleges] = useColleges()
  return (
    <div className='grid w-2/4 grid-cols-1 gap-2 mx-auto mt-12 md:gap-3'>
      {colleges.map(college => (
        <>
          <label
            key={college._id}
            htmlFor={college._id}
            className='text-lg font-semibold cursor-pointer'
          >
            {college.college_name}
          </label>
          <input type='checkbox' id={college._id} className='modal-toggle' />
          <div className='modal'>
            <div className='w-3/4 mx-auto modal-box'>
              <h3 className='text-lg font-bold'>
                College Name {college.college_name}!
              </h3>
              <AdmissionForm college={college} />
            </div>
            <label className='modal-backdrop' htmlFor={college._id}>
              Close
            </label>
          </div>
        </>
      ))}
    </div>
  )
}

export default Admission
