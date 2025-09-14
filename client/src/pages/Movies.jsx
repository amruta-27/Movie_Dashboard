import React, { useEffect, useState } from 'react'
import './Movies.css'
import axios from 'axios'
import Card from '../components/Card';
import NavBar from '../components/NavBar';



const Movies = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://movie-dashboard-2.onrender.com/api/auth/movies');
        setMovies(response.data);
      } catch (error) {
        console.log("Error fetching movies", error);
      }
    }
    fetchMovies();
  }, []);

  const filteredMovies = movies.filter(m => {
    const matchesSearch = m.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre ? m.genres.includes(selectedGenre) : true;
    return matchesSearch && matchesGenre;
  });

  return (
    <>
      <div className='m-main-page bg-gray-800'>
        <div className="movies-containe px-20 bg-gray-800">
          <NavBar />
          <div className="m-section-1 m-10">
            <div className="m-sub-section-1 flex flex-col items-start ">
              <h1 className="m-head text-white text-4xl font-bold">Featured Movies</h1>
              <h2 className="m-sub-head text-white text-xl">Curated selection of critically acclaimed films</h2>
            </div>
            <div className="m-headers flex flex-row gap-4 justify-between">
              <input
                type="text"
                placeholder="Search movies..."
                className="mt-4 p-2 rounded w-80 text-white border border-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <select
                className="mt-4 p-2 rounded w-60 border border-gray-400 text-white bg-gray-700"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
              >
                <option value="">All Genres</option>
                <option value="Drama">Drama</option>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="Romance">Romance</option>
              </select>
          </div>
          <Card movies={filteredMovies} />
        </div>
      </div>
    </div >
    </>
  )
}

export default Movies