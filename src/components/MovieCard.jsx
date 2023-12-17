import React from 'react'

const MovieCard = ({movieData}) => {
  return (
    <>
      <div className='grid grid-cols-3 gap-4 p-4'>
      {movieData && movieData.map((datas) => (
          <div key={datas.imdbID} className="card card-side bg-zinc-900 shadow-xl">
              <figure><img src={datas.Poster} alt="Movie"/></figure>
            <div className="card-body">
              <h2 className="card-title">{datas.Title}</h2>
              <p>{datas.Year}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-info text-white ">Add to WatchList</button>
              </div>
            </div>
          </div>  
            ))}
      </div>
    </>
  )
}

export default MovieCard