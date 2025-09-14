import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css';
import axios from 'axios';
import { MoveLeft } from "lucide-react";


const Login = () => {

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const handlelogin = async (e) => {
        e.preventDefault();
        console.log("clicked");

        try {
            const loginData = {
                username,
                password
            };
            const res = await axios.post('https://movie-dashboard-2.onrender.com/api/auth/login', loginData);
            const data=res.data.user;
            const userId=data._id;
            const userName=data.username;
            localStorage.setItem('username', userName);
            localStorage.setItem('userId', userId);
            alert("Login successful");
            window.location.href = `/${userId}`;
        } catch (error) {
            console.log("Error logging in", error);
            alert("Login failed. Please check your credentials.");
        }
    }


    return (
        <div>
            <div className="l-main bg-gray-800">
                <Link className="cm-back text-white text-2xl pt-5 pl-20 flex gap-3 content-center" to="/movies"> <MoveLeft className='self-center' />Go back</Link>

                <section className="l-login flex flex-col items-center justify-center my-20">
                    <div className="l-login-container bg-gray-900 px-40 py-10 flex flex-col text-white rounded-2xl">
                        <h1 className="l-head text-center text-4xl font-bold mb-10">Login</h1>
                        <form action="" className="l-login-form flex flex-col gap-5 mb-5" onSubmit={handlelogin}>

                            <input type="text" placeholder="Email" value={username}
                                onChange={(e) => setusername(e.target.value)}
                                className="l-login-input border border-b-gray-200 p-3 text-x w-80 rounded-3xl" />

                            <input type="password" placeholder="Password" value={password}
                                onChange={(e) => setpassword(e.target.value)}
                                className="l-login-input border border-gray-200 p-3 text-x w-80 rounded-3xl" />

                            <button className="l-login-button bg-blue-600 p-2 rounded-3xl text-md hover:bg-blue-700">Log In</button>
                        </form>
                        <div className='l-login-links flex justify-center gap-3'>
                            <Link to="/" className="l-login-link">Forgot password ?</Link>
                            <Link to="/" className="l-login-link text-blue-400">Sign up</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Login