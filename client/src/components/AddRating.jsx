import React, { useState } from 'react'
import axios from 'axios';

const AddRating = ({movieid}) => {
    const [Rating, SetRating] = useState(0);
    const [Review, SetReview] = useState("");
    const userId = localStorage.getItem("userId") || null;
    const movieId = movieid;
    console.log(movieId)

    const handleratings = (e) => {

        const payload = {
            userId: userId,
            movieId: movieId,
            rating: Rating,
            review: Review
        };
        try {
            const response = axios.post(`https://movie-dashboard-2.onrender.com/api/auth/movies/${movieId}/rating`, payload);
            alert("Rating submitted successfully");
            window.location.href = `/movies`;
        } catch (err) {
            console.log(err);
            alert("Error submitting rating");
            window.location.href = `/movies/${movieId}`;
        }

    }

    return (
        <div>
            {
                userId && (
                    <div className="ratings text-white flex flex-col justify-center items-center gap-3">
                        <h2 className='text-2xl'>Ratings</h2>
                        <div className="a-rating flex flex-row gap-2 text-3xl">
                            {
                                [1, 2, 3, 4, 5].map((star) => (
                                    <span key={star} className={star <= Rating ? "text-amber-300" : "text-gray-500"} onClick={() => SetRating(star)}>&#9733;</span>
                                ))
                            }
                        </div>

                        <div className="r-container border border-gray-400 rounded-lg p-2 mt-3">
                            <input type='text' placeholder='Write your review here' value={Review} onChange={(e) => SetReview(e.target.value)} className='w-80 text-center'></input>
                        </div>
                        <button className='btn bg-gray-900 px-4 py-1.5 rounded-lg mt-2' onClick={handleratings}>Submit</button>
                    </div>
                )
            }
        </div>
    )
}

export default AddRating