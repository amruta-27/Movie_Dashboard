const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie", 
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    review: {
      type: String,
      maxlength: 1000, 
    },
  },
  { timestamps: true } 
);

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = Rating;
