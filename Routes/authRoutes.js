const axios = require('axios');
const express = require('express');
const router = express.Router();
const {getMovies, getMovieById, loginuser, getProfile,postratings, deleteRating }=require('../Controllers/authController');

// User registration
router.get('/movies',getMovies);
router.get('/movies/:id',getMovieById);
router.post('/login',loginuser)
router.get('/profile/:id', getProfile)
router.post('/movies/:id/rating', postratings)
router.delete('/ratings/:id', deleteRating)


module.exports = router;