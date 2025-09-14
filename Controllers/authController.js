const Movie = require('../Models/movies');
const User = require('../Models/users');
const Rating = require('../Models/rating');

const getMovies = async (req, res) => {
    try {
        const response = await Movie.find();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: "Error fetching movies" });
    }
}

const getMovieById = async (req, res) => {
    try {
        const movieId = req.params.id;
        const response = await Movie.findById(movieId);

        const ratings = await Rating.find({ movieId })
            .populate('userId', 'username');

        if (!response) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.status(200).json({response, ratings});

    } catch (error) {
        res.status(500).json({ message: "Error fetching movie by ID" });
    }
}

const loginuser = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (user.length === 0) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        res.status(200).json({ message: "Login successful", user: user });

    } catch (error) {
        res.status(500).json({ message: "Error logging in" });
    }
}

const getProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);

        const ratings = await Rating.find({ userId })
            .populate('movieId', 'title poster_url year');

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ user, ratings });
    } catch (error) {
        res.status(500).json({ message: "Error fetching profile" });
    }
}

const postratings = async (req, res) => {
    try {
        const { userId, movieId, rating, review } = req.body;
        console.log(req.body)
        const newRating = new Rating({
            userId,
            movieId,
            rating,
            review
        });
        await newRating.save();
        res.status(201).json({ message: "Rating posted successfully", rating: newRating });
    } catch (error) {
        res.status(500).json({ message: "Error posting ratings" });
    }
}

const deleteRating = async (req, res) => {
    try {
        const ratingId = req.params.id;
        const deletedRating = await Rating.findByIdAndDelete(ratingId);
        if (!deletedRating) {
            return res.status(404).json({ message: "Rating not found" });
        }
        res.status(200).json({ message: "Rating deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting rating" });
    }
}

module.exports = { getMovies, getMovieById, loginuser, getProfile, postratings, deleteRating };
