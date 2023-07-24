const CardTemplate = () => {
  return (
    <div className='w-96'>
      <div className='w-96'>
        <img
          src='https://source.unsplash.com/random/350x350'
          alt=' college image'
          className='object-cover object-center w-full rounded-lg shadow-md'
        />

        <div className='relative px-4 -mt-16 '>
          <div className='p-6 bg-white rounded-lg shadow-lg'>
            <div className='flex items-baseline'>
              <span className='inline-block px-2 text-xs font-semibold tracking-wide text-teal-800 uppercase bg-teal-200 rounded-full'>
                Admission Date
              </span>
            </div>

            <h4 className='mt-1 text-xl font-semibold leading-tight uppercase truncate'>
              College Name
            </h4>

            <div className='mt-1'>
              <div className='ml-2 text-xs font-semibold tracking-wider text-gray-600 uppercase'>
                Research history &bull; Events
              </div>
            </div>
            <div className='mt-1'>
              <div className='ml-2 text-xs font-semibold tracking-wider text-gray-600 uppercase'>
                Sports
              </div>
            </div>
            <div className='mt-4'>
              <span className='font-semibold text-teal-600 text-md'>
                4/5 ratings
              </span>
              <span className='text-sm text-gray-600'>
                (based on 234 ratings)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardTemplate
