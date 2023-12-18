import React, { useState, useEffect, useCallback } from "react";
import { getByID } from "../hooks/useMovieData";
import { useDispatch } from "react-redux";
import { addFav, removeFav } from "../features/favorite/favSlice";

const MovieCard = ({ movieData, isWatchListButtonDisabled = false }) => {
  const dispatch = useDispatch();
  const addMovie = useCallback(async (node) => {
    if (node !== null) {
      const id = node.target.dataset.id;
      const data = await getByID(id);
      const favorite = {
        Title: data.Title,
        Year: data.Year,
        imdbID: data.imdbID,
        Poster: data.Poster,
      };
      dispatch(addFav(favorite));
    }
  });
  const removeMovie = useCallback(async (node) => {
    if (node !== null) {
      const id = node.target.dataset.id;
      dispatch(removeFav(id));
    }
  });

  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-4  rounded-lg">
        {movieData &&
          movieData.map((data, index) => (
            <div key={index} className="card card-side bg-zinc-900 shadow-xl  hover: transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 :scale-110 hover:duration-300...">
              <figure>
                <img src={data.Poster} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.Title}</h2>
                <p>{data.Year}</p>
                {isWatchListButtonDisabled ? (
                  <button
                    type="button"
                    onClick={removeMovie}
                    data-id={`${data.imdbID}`}
                    className="btn btn-info text-white "
                  >
                    Remove
                  </button>
                ) : (
                  <div className="card-actions justify-end">
                    <button
                      type="button"
                      onClick={addMovie}
                      data-id={`${data.imdbID}`}
                      className="btn btn-info text-white "
                    >
                      Add to WatchList
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default MovieCard;
