import React from 'react'
import './App.css';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieCard from './pages/MovieCard';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import AddRating from './components/AddRating';

const App = () => {
  return (
    <div className='main-container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movie/:id' element={<MovieCard />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path="/movies/:id/rating" element={<AddRating />} />
      </Routes>
    </div>
  )
}

export default App