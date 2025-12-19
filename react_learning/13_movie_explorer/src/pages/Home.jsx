import {useState, useEffect, useRef} from 'react'
import MovieList from '../component/MovieList'

const Home = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const inputRef = useRef()

    const fetchMovies = async (query)=>{
        setLoading(true)
        const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=1a66161e&s=${query}`)
        const data = await res.json();
        console.log(data)
        setMovies(data.Search || [])
        setLoading(false)
    }

    useEffect(()=>{
        const loadMovies = async () => {
            await fetchMovies("Avengers")
        }
        loadMovies()
    }, [])

    function handleSearch(e){
        e.preventDefault();
        const query = inputRef.current.value.trim();
        if (query) fetchMovies(query)
    }

  return (
    <div className='flex flex-col gap-3 justify-center items-center bg-gray-900 text-white min-h-screen'>
        
        <div className='text-center'>
            <h2 className='text-3xl font-bold mb-4'>Welcome to Movie Explorer</h2>
            <p className='text-gray-400'>Discover movies, TV shows, and actors. Use the search bar above to get started!</p>
        </div>

        <form onSubmit={handleSearch} className='flex justify-center items-center mt-5'>
            <input ref={inputRef} type="text" placeholder='Search for movies, TV shows, actors...' className='p-3 rounded-lg w-96 text-gray-100 border border-gray-100' />
            <button type='submit' className='bg-blue-600 p-3 rounded-lg ml-2 hover:bg-blue-700'>Search</button>
        </form>

        {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
    </div>
  )
}

export default Home
