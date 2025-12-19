import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({key, movie}) => {
  return (
    <div key={key} className="bg-black border border-gray-900 rounded-lg overflow-hidden shadow-lg m-4 w-64">
        <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
          <img src={movie.Poster} alt={movie.Title} className="w-full h-48 object-cover hover:scale-105 transition duration-500" />
        </div>
        <div className="p-4">
          <h2 className="text-white text-lg font-bold mb-2">{movie.Title}</h2>
          <p className="text-gray-400 text-sm">{movie.Year}</p>
          <Link to={`/movie/${movie.imdbID}`}>Details</Link>
        </div>
    </div>
  )
}

export default MovieCard
