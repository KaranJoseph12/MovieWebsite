import React, { useState, useEffect } from 'react'

// Use Redux Dispatch

const SearchBar = () => {

 // On sbimit 
//  onSubmit use Dipatc h(searchresult//  useEffect(() => {
// searchMovies(search)
//  }, [search])

  return (
    <>
      <div >
        <input type="text" placeholder="Search Movies"  className="input input-bordered input-info w-full max-w-xs placeholder-slate-500 "
        />
      </div>
    </>
  )
}

export default SearchBar