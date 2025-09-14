import React, { useState, useEffect } from 'react'
import './Profile.css'
import axios from 'axios'
import { MoveLeft, Star, Delete } from "lucide-react";
import { Link } from 'react-router-dom'


const Profile = () => {

    const userId = localStorage.getItem('userId');
    const [userData, setUserData] = useState({});
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`https://movie-dashboard-2.onrender.com/api/auth/profile/${userId}`);
                console.log(response.data.ratings);
                setUserData(response.data.user);
                setRatings(response.data.ratings);
            } catch (err) {
                console.log("Error fetching user data", err);
            }
        }
        fetchUserData();
    }, [])


    const handlelogout = () => {
        localStorage.clear();
        alert("Logged out successfully");
        window.location.href = "/";
    }

    const handledlte = (ratingId) => {
        const deleterating = async () => {
            try {
                const response = await axios.delete(`https://movie-dashboard-2.onrender.com/api/auth/ratings/${ratingId}`);
                alert("Rating deleted successfully");
                setRatings(ratings.filter(r => r._id !== ratingId))
            } catch (err) {
                console.log(err);
                alert("Error deleting rating");
            }
        }
        deleterating();

    }

    return (
        <div>
            <div className="p-main bg-gray-800 px-20 py-5">
                <Link className="cm-back text-white text-2xl pt-5 pl-20 flex gap-3 m-5 content-center" to={`/${userId}`}> <MoveLeft className='self-center' />Go back</Link>

                <div className="p-section flex flex-row gap-20">
                    <section className="p-profile  bg-gray-900 w-90 h-140 flex flex-col content-center items-center rounded-tl-4xl shadow-lg py-10 justify-around">
                        <div className="p-section-1">
                            <div className="p-profile-img ">
                                <img src={userData.profilePic} alt="" className='h-50 w-50 rounded-tl-4xl' />
                            </div>
                        </div>
                        <hr className='w-70 text-gray-700' />
                        <div className="p-section-2 text-center">
                            <div className="p-profile-content p-3">
                                <h2 className='text-white text-2xl'>{userData.username}</h2>
                            </div>
                            <div className="p-profile-logout p-3">
                                <button className='bg-blue-700 hover:bg-blue-800 p-3 text-lg text-white rounded-2xl w-50' onClick={handlelogout}>Log Out</button>
                            </div>
                        </div>
                    </section>

                    <section className="p-profile  bg-gray-900 w-full h-140 flex flex-col items-center rounded-tl-4xl shadow-lg py-10 ">
                        <div className="p-section-1 flex flex-col justify-center items-center w-full h-full">
                            <h2 className='text-white text-2xl text-center'>Rate & Review History</h2>
                            <hr className='w-150 text-gray-700 my-10 justify-center' />
                            <div className="p-history overflow-y-scroll flex flex-row flex-wrap justify-center items-center gap-5">
                                {
                                    ratings.map((r, index) => {
                                        return (
                                            <>
                                                <div key={index} className='bg-gray-800 w-90 m-5 p-5 rounded-2xl text-white h-40'>
                                                    <div className='flex flex-row justify-between items-center mb-3'>
                                                        <h1 className='text-xl text-blue-400 font-bold'>{r.movieId.title}</h1>
                                                        <span className='flex flex-row  items-center'><Star className='h-4 text-amber-300 content-center' />{r.rating}</span>
                                                    </div>
                                                    <div className='flex flex-row justify-between items-start gap-3'>
                                                        <h1 className='text'>{r.review}</h1>
                                                        <button className='' key={r._id} onClick={() => handledlte(r._id)}><Delete /></button>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }

                            </div>
                            {
                                ratings.length === 0 && <h1 className='text-white text-center flex justify-center text-2xl'>No ratings yet</h1>
                            }
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Profile