import React, { useEffect, useState } from 'react'
import { Star, Play } from "lucide-react";

const Card = ({ movies }) => {

    if (!movies || movies.length === 0) {
        return <p className='loading text-white flex justify-center content-center text-4xl my-20'>No movies found...</p>
    }

    return (
        <div>
            <div>
                <div className="m-content flex flex-row flex-wrap place-items-center mt-10">
                    {movies.map((m, index) => {
                        return (
                            <div className="m-card max-h-150 max-w-100 bg-gray-900 place-items-center rounded-2xl p-10 mx-3 mb-10 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                            key={index} onClick={()=>{
                                window.location.href=`/movie/${m._id}`;
                            }}>

                                <div className="m-img">
                                    <img src={m.poster_url} alt="movie-pic" className='h-90 w-90 rounded-2xl' />
                                </div>

                                <div className="m-name mt-4 text-2xl font-bold text-white">
                                    <h3>{m.title} ({m.year})</h3>
                                </div>

                                <div className="m-details flex flex-row gap-4 m-2">
                                    {m.genres.map((g, index) => {
                                        return <span className='m-genre text-gray-200' key={index}>{g}</span>
                                    })}
                                </div>

                                <div className="m-btns mt-4 flex flex-row gap-4">
                                    <button className="m-btn bg-white px-3 py-1.5 text-100 rounded-lg mx-1  w-40 hover:bg-black hover:text-white flex content-center"> <Play className="w-4 h-4 mr-2 self-center" />Watch Trailer</button>
                                    <button className="m-btn bg-blue-500 text-white px-3 py-1.5 text-100 rounded-lg mx-1   hover:bg-blue-600">Rate & Review</button>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Card