import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { MoveLeft, Star } from "lucide-react";
import AddRating from "../components/AddRating";

const MovieCard = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [ratings, setRatings] = useState([]);

    const userId = localStorage.getItem("userId") || null;

    console.log(id);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(
                    `https://movie-dashboard-2.onrender.com/api/auth/movies/${id}`
                );
                setMovieDetails(response.data.response);
                setRatings(response.data.ratings);
            } catch (err) {
                alert("Error fetching movie details");
                window.location.href = "/";
                console.log(err);
            }
        };
        fetchMovieDetails();
    }, [id]);

    return (
        <div className="bg-gray-800 min-h-screen">
            <Link
                className="text-white text-2xl pt-5 pl-5 flex gap-3 items-center"
                to="/movies"
            >
                <MoveLeft className="self-center" /> Go back
            </Link>

            <div className="flex flex-col justify-center items-center px-5 md:px-20 py-10">
                <div className="bg-gray-900 p-5 md:p-10 flex flex-col md:flex-row rounded-2xl w-full max-w-6xl">
                    {movieDetails && (
                        <div className="flex flex-col md:flex-row gap-8 w-full">
                            <img
                                src={movieDetails.poster_url}
                                alt={movieDetails.title}
                                className="rounded-2xl max-w-xs w-full h-auto mx-auto md:mx-0"
                            />

                            <div className="text-white flex-1">
                                <h2 className="text-2xl md:text-4xl font-bold mb-5">
                                    {movieDetails.title} ({movieDetails.year})
                                </h2>

                                <p>
                                    <strong className="text-lg">Genre:</strong>{" "}
                                    {movieDetails.genres.join(", ")}
                                </p>
                                <p>
                                    <strong className="text-lg">Cast:</strong>{" "}
                                    {movieDetails.cast.join(", ")}
                                </p>

                                <p className="text-base md:text-xl my-3">
                                    {movieDetails.storyline}
                                </p>

                                <div className="bg-gray-950 mt-6 rounded-2xl p-5 w-full">
                                    <h2 className="text-white text-xl md:text-2xl text-center">
                                        Rate & Review History
                                    </h2>
                                    <hr className="w-3/4 mx-auto border-gray-700 my-5" />

                                    <div className="flex flex-wrap gap-5 justify-center">
                                        {ratings.length > 0 ? (
                                            ratings.map((r, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-gray-800 w-full sm:w-72 p-5 rounded-2xl text-white"
                                                >
                                                    <div className="flex justify-between items-center mb-3">
                                                        <h1 className="text-lg md:text-xl text-blue-400 font-bold">
                                                            {r.userId.username}
                                                        </h1>
                                                        <span className="flex items-center gap-1">
                                                            <Star className="h-4 text-amber-300" /> {r.rating}
                                                        </span>
                                                    </div>
                                                    <p>{r.review}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <h1 className="text-white text-center text-lg md:text-2xl">
                                                No ratings yet
                                            </h1>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Add Rating Section */}
                <div className="flex flex-col md:flex-row gap-5 mt-6 w-full max-w-6xl">
                    <div className="bg-gray-950 w-full md:w-1/2 p-5 rounded-lg">
                        {userId ? (
                            <AddRating movieid={id}/>
                        ) : (
                            <div className="flex justify-center items-center">
                                <Link
                                    className="text-white text-lg bg-blue-600 px-4 py-2 rounded"
                                    to="/login"
                                >
                                    Log In
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
