const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  genres: [{ type: String }],
  cast: [{ type: String }],
  storyline: { type: String },
  poster_url: { type: String }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;   // ✅ now works with require()


// --- Insert 30 movies ---
// export const moviesData = [
//   {
//     title: "The Shawshank Redemption",
//     year: 1994,
//     genres: ["Drama"],
//     cast: ["Tim Robbins", "Morgan Freeman"],
//     storyline: "Two imprisoned men bond over years, finding solace and eventual redemption.",
//     poster_url: "https://picsum.photos/400/600?random=1"
//   },
//   {
//     title: "The Godfather",
//     year: 1972,
//     genres: ["Crime", "Drama"],
//     cast: ["Marlon Brando", "Al Pacino"],
//     storyline: "An organized crime dynasty's aging patriarch transfers control to his reluctant son.",
//     poster_url: "https://picsum.photos/400/600?random=2"
//   },
//   {
//     title: "The Dark Knight",
//     year: 2008,
//     genres: ["Action", "Crime", "Drama"],
//     cast: ["Christian Bale", "Heath Ledger"],
//     storyline: "Batman battles the Joker, a criminal mastermind who seeks to plunge Gotham into chaos.",
//     poster_url: "https://picsum.photos/400/600?random=3"
//   },
//   {
//     title: "Inception",
//     year: 2010,
//     genres: ["Action", "Sci-Fi", "Thriller"],
//     cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
//     storyline: "A thief steals corporate secrets through dream-sharing technology.",
//     poster_url: "https://picsum.photos/400/600?random=4"
//   },
//   {
//     title: "Fight Club",
//     year: 1999,
//     genres: ["Drama"],
//     cast: ["Brad Pitt", "Edward Norton"],
//     storyline: "An insomniac and a soap maker form an underground fight club that evolves into something more.",
//     poster_url: "https://picsum.photos/400/600?random=5"
//   },
//   {
//     title: "Forrest Gump",
//     year: 1994,
//     genres: ["Drama", "Romance"],
//     cast: ["Tom Hanks", "Robin Wright"],
//     storyline: "The life of a slow-witted man who witnesses defining moments of 20th century America.",
//     poster_url: "https://picsum.photos/400/600?random=6"
//   },
//   {
//     title: "Interstellar",
//     year: 2014,
//     genres: ["Adventure", "Drama", "Sci-Fi"],
//     cast: ["Matthew McConaughey", "Anne Hathaway"],
//     storyline: "A team of explorers travel through a wormhole in space to save humanity.",
//     poster_url: "https://picsum.photos/400/600?random=7"
//   },
//   {
//     title: "The Matrix",
//     year: 1999,
//     genres: ["Action", "Sci-Fi"],
//     cast: ["Keanu Reeves", "Laurence Fishburne"],
//     storyline: "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
//     poster_url: "https://picsum.photos/400/600?random=8"
//   },
//   {
//     title: "Gladiator",
//     year: 2000,
//     genres: ["Action", "Drama"],
//     cast: ["Russell Crowe", "Joaquin Phoenix"],
//     storyline: "A betrayed Roman general fights his way back as a gladiator to take revenge.",
//     poster_url: "https://picsum.photos/400/600?random=9"
//   },
//   {
//     title: "Titanic",
//     year: 1997,
//     genres: ["Drama", "Romance"],
//     cast: ["Leonardo DiCaprio", "Kate Winslet"],
//     storyline: "A love story unfolds aboard the ill-fated Titanic.",
//     poster_url: "https://picsum.photos/400/600?random=10"
//   },
//   {
//     title: "Avatar",
//     year: 2009,
//     genres: ["Action", "Adventure", "Fantasy"],
//     cast: ["Sam Worthington", "Zoe Saldana"],
//     storyline: "A paraplegic Marine is sent to Pandora and becomes torn between duty and protecting its people.",
//     poster_url: "https://picsum.photos/400/600?random=11"
//   },
//   {
//     title: "Avengers: Endgame",
//     year: 2019,
//     genres: ["Action", "Adventure", "Sci-Fi"],
//     cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
//     storyline: "The Avengers assemble once more to undo Thanos' destruction.",
//     poster_url: "https://picsum.photos/400/600?random=12"
//   },
//   {
//     title: "Iron Man",
//     year: 2008,
//     genres: ["Action", "Adventure", "Sci-Fi"],
//     cast: ["Robert Downey Jr.", "Gwyneth Paltrow"],
//     storyline: "Billionaire engineer Tony Stark builds a high-tech suit to fight evil.",
//     poster_url: "https://picsum.photos/400/600?random=13"
//   },
//   {
//     title: "Black Panther",
//     year: 2018,
//     genres: ["Action", "Adventure", "Sci-Fi"],
//     cast: ["Chadwick Boseman", "Michael B. Jordan"],
//     storyline: "T'Challa returns to Wakanda as king and faces a challenger to the throne.",
//     poster_url: "https://picsum.photos/400/600?random=14"
//   },
//   {
//     title: "Doctor Strange",
//     year: 2016,
//     genres: ["Action", "Adventure", "Fantasy"],
//     cast: ["Benedict Cumberbatch", "Chiwetel Ejiofor"],
//     storyline: "A surgeon learns the mystic arts after a car crash changes his life.",
//     poster_url: "https://picsum.photos/400/600?random=15"
//   },
//   {
//     title: "Spider-Man: No Way Home",
//     year: 2021,
//     genres: ["Action", "Adventure", "Fantasy"],
//     cast: ["Tom Holland", "Zendaya"],
//     storyline: "Spider-Man seeks help from Doctor Strange after his identity is revealed.",
//     poster_url: "https://picsum.photos/400/600?random=16"
//   },
//   {
//     title: "The Lion King",
//     year: 1994,
//     genres: ["Animation", "Adventure", "Drama"],
//     cast: ["Matthew Broderick", "James Earl Jones"],
//     storyline: "A lion cub prince flees his kingdom after the murder of his father.",
//     poster_url: "https://picsum.photos/400/600?random=17"
//   },
//   {
//     title: "Frozen",
//     year: 2013,
//     genres: ["Animation", "Adventure", "Comedy"],
//     cast: ["Kristen Bell", "Idina Menzel"],
//     storyline: "A princess sets out to find her sister whose powers trapped the kingdom in eternal winter.",
//     poster_url: "https://picsum.photos/400/600?random=18"
//   },
//   {
//     title: "Toy Story",
//     year: 1995,
//     genres: ["Animation", "Adventure", "Comedy"],
//     cast: ["Tom Hanks", "Tim Allen"],
//     storyline: "A cowboy doll feels threatened when a new space toy arrives.",
//     poster_url: "https://picsum.photos/400/600?random=19"
//   },
//   {
//     title: "Finding Nemo",
//     year: 2003,
//     genres: ["Animation", "Adventure", "Comedy"],
//     cast: ["Albert Brooks", "Ellen DeGeneres"],
//     storyline: "A timid clownfish sets out on a journey to rescue his captured son.",
//     poster_url: "https://picsum.photos/400/600?random=20"
//   },
//   {
//     title: "Shrek",
//     year: 2001,
//     genres: ["Animation", "Adventure", "Comedy"],
//     cast: ["Mike Myers", "Eddie Murphy"],
//     storyline: "An ogre sets out to rescue a princess with the help of a talkative donkey.",
//     poster_url: "https://picsum.photos/400/600?random=21"
//   },
//   {
//     title: "Up",
//     year: 2009,
//     genres: ["Animation", "Adventure", "Comedy"],
//     cast: ["Edward Asner", "Jordan Nagai"],
//     storyline: "An elderly man attaches balloons to his house and flies to South America with a young boy.",
//     poster_url: "https://picsum.photos/400/600?random=22"
//   },
//   {
//     title: "Inside Out",
//     year: 2015,
//     genres: ["Animation", "Adventure", "Comedy"],
//     cast: ["Amy Poehler", "Bill Hader"],
//     storyline: "The emotions of a young girl help her navigate life's challenges.",
//     poster_url: "https://picsum.photos/400/600?random=23"
//   },
//   {
//     title: "Coco",
//     year: 2017,
//     genres: ["Animation", "Adventure", "Family"],
//     cast: ["Anthony Gonzalez", "Gael García Bernal"],
//     storyline: "A boy journeys to the Land of the Dead to discover his family's history.",
//     poster_url: "https://picsum.photos/400/600?random=24"
//   },
//   {
//     title: "Moana",
//     year: 2016,
//     genres: ["Animation", "Adventure", "Comedy"],
//     cast: ["Auli'i Cravalho", "Dwayne Johnson"],
//     storyline: "A young girl sails out on a daring mission to save her people.",
//     poster_url: "https://picsum.photos/400/600?random=25"
//   },
//   {
//     title: "Frozen II",
//     year: 2019,
//     genres: ["Animation", "Adventure", "Comedy"],
//     cast: ["Idina Menzel", "Kristen Bell"],
//     storyline: "Elsa and Anna set out to uncover the origin of Elsa's powers.",
//     poster_url: "https://picsum.photos/400/600?random=26"
//   },
//   {
//     title: "Zootopia",
//     year: 2016,
//     genres: ["Animation", "Adventure", "Comedy"],
//     cast: ["Ginnifer Goodwin", "Jason Bateman"],
//     storyline: "In a city of anthropomorphic animals, a bunny cop and a sly fox solve a mystery.",
//     poster_url: "https://picsum.photos/400/600?random=27"
//   },
//   {
//     title: "The Incredibles",
//     year: 2004,
//     genres: ["Animation", "Action", "Adventure"],
//     cast: ["Craig T. Nelson", "Holly Hunter"],
//     storyline: "A family of superheroes must save the world while living undercover.",
//     poster_url: "https://picsum.photos/400/600?random=28"
//   },
//   {
//     title: "Monsters, Inc.",
//     year: 2001,
//     genres: ["Animation", "Adventure", "Comedy"],
//     cast: ["Billy Crystal", "John Goodman"],
//     storyline: "Monsters generate power by scaring children until one little girl changes everything.",
//     poster_url: "https://picsum.photos/400/600?random=29"
//   },
//   {
//     title: "Ratatouille",
//     year: 2007,
//     genres: ["Animation", "Adventure", "Comedy"],
//     cast: ["Patton Oswalt", "Ian Holm"],
//     storyline: "A rat with culinary dreams forms an alliance with a young kitchen worker.",
//     poster_url: "https://picsum.photos/400/600?random=30"
//   }
// ];

// Movie.insertMany(moviesData);