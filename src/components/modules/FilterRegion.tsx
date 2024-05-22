import React from 'react'

const FilterRegion = () => {
  return (
    <div className="flex justify-center items-center bg-white p-2 rounded text-gray-400 outline-transparent">
      <select name="region" className='w-full md:w-40'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  )
}

export default FilterRegion