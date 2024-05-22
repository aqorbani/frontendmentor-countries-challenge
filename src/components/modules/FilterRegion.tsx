import React from 'react'

const FilterRegion = () => {
  return (
    <div className="flex justify-center items-center bg-white rounded text-gray-400 outline-transparent my-4 w-full">
      <select name="region" className='w-full p-3 rounded'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  )
}

export default FilterRegion