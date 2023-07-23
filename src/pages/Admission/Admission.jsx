import AdmissionForm from './AdmissionForm'

const Admission = () => {
  const colleges = [
    { _id: '1', name: 'Harvard University' },
    { _id: '2', name: 'Stanford University' },
    { _id: '3', name: 'Massachusetts Institute of Technology (MIT)' },
    { _id: '4', name: 'University of Oxford' },
    { _id: '5', name: 'California Institute of Technology (Caltech)' },
    { _id: '6', name: 'University of Cambridge' }
  ]
  return (
    <div className='grid w-2/4 grid-cols-1 gap-2 mx-auto md:gap-3'>
      {colleges.map(college => (
        <>
          <label
            key={college._id}
            htmlFor={college._id}
            className='text-lg font-semibold cursor-pointer'
          >
            {college.name}
          </label>
          <input type='checkbox' id={college._id} className='modal-toggle' />
          <div className='modal'>
            <div className='w-3/4 mx-auto modal-box'>
              <h3 className='text-lg font-bold'>
                College Name {college.name}!
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
