import { useState } from 'react'

const SearchCollege = () => {
  const [showInput, setShowInput] = useState(false)
  const handleSearchIconClick = () => {
    setShowInput(!showInput)
  }

  return (
    <div className='w-full my-8 text-center'>
      <di className='relative w-2/5 mx-auto border border-black join'>
        {showInput ? (
          <>
            <input
              className='w-full input input-bordered join-item'
              placeholder='Search for a college...'
            />
            <button className='rounded-r-full btn join-item'>Search</button>
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
