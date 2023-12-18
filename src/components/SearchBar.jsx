import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sData } from '../features/searchData/searchSlice'
// Use Redux Dispatch

const SearchBar = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sData(value))
    
  }


  return (
    <>
      <form onSubmit={handleSubmit} >
        <input type="text" placeholder="Search Movies"  className="input input-bordered input-info w-full max-w-xs placeholder-slate-500 "
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button className=' hidden' type='submit'></button>
      </form>
    </>
  )
}

export default SearchBar