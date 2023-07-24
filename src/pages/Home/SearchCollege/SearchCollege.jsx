import { useState } from 'react'

const SearchCollege = () => {
  const [showInput, setShowInput] = useState(false)
  const handleSearchIconClick = () => {
    setShowInput(!showInput)
  }

  return (
    <div className='w-full mr-auto text-right'>
      <di className='relative mx-auto join'>
        {showInput ? (
          <>
            <input
              className='w-full rounded-full input input-bordered join-item'
              placeholder='Search for a college...'
            />
            <button className='rounded-full w-fit btn join-item'>Search</button>
          </>
        ) : (
          <div
            className='right-0 px-4 py-2 mx-auto border w-fit bg-base-200'
            onClick={handleSearchIconClick}
          >
            Search
          </div>
        )}
      </di>
      {/* so a component will be here of card  */}
    </div>
  )
}

export default SearchCollege
