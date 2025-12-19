
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {

    if(movies.length ===0){
        return <p>No Movies Found.</p>
    }

    return (
        
        <div className='flex flex-wrap justify-center items-center mt-5'>
            {movies.map((movie)=>(
                <MovieCard key={movie.imdbId} movie={movie}  />
            ))}
        </div>
    )
}

export default MovieList
