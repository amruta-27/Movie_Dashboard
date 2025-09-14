import React from 'react'
import './Home.css'
import NavBar from '../components/NavBar'

const Home = () => {
    return (
        <>
            <div className='h-main bg-gradient-to-br from-gray-800 to-black text-white'>
                <div className="h-subcontainer px-5 md:px-30 lg:px-30 ">

                    <NavBar />

                    <div className="h-section-1 flex flex-row justify-between items-center mt-20 mb-10 gap-30 ">
                        <div className="h-sub-section-1">
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                                Rate, Review & Discover <span className="text-blue-500">Great Films</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8">
                                Join our community of movie lovers. Share your thoughts, discover new favorites, and never watch a bad movie again.
                            </p>
                            <div className="h-section-btn">
                                <button className="h-btn bg-blue-600 p-4 text-lg rounded-md hover:bg-blue-700 mr-4">Get Started</button>
                            </div>
                        </div>
                        <div className="h-sub-section-2">
                            <div className="h-image-container">
                                <img
                                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/03d1f2c0-a31d-4040-ba53-b8552c2375e4.png"
                                    alt="FilmRate app dashboard showing movie ratings and reviews with a clean interface"
                                    className="rounded-xl shadow-2xl w-170 h-120"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home