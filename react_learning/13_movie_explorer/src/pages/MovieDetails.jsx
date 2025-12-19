import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(()=>{
        async function getMovie(){
            const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=1a66161e&i${id}`)
            const data = await res.json();
            setMovie(data)
            console.log(data)
            console.log(id)
        }
        getMovie()
        
    }, [id])

  return (
    <div className='min-h-screen flex flex-col justify-start items-center bg-gray-900 text-white p-4'>
      {movie ? (
        <div className='bg-gray-900 text-white p-6'>
          <div>
            <img src={movie.Poster} alt={movie.Title} className='w-64 h-auto mb-4' />
          </div>
          <h2 className='text-2xl font-bold mb-4'>{movie.Title}</h2>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default MovieDetails
