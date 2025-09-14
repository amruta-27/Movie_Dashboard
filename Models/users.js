// Models/users.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String }
});

const User = mongoose.model("User", userSchema); 
module.exports = User;



// const dummyUsers = [
//   {
//     username: "john_doe",
//     password: "password123",
//     profilePic: "https://randomuser.me/api/portraits/men/10.jpg"
//   },
//   {
//     username: "jane_smith",
//     password: "secure456",
//     profilePic: "https://randomuser.me/api/portraits/women/20.jpg"
//   },
//   {
//     username: "mike_lee",
//     password: "qwerty789",
//     profilePic: "https://randomuser.me/api/portraits/men/30.jpg"
//   },
//   {
//     username: "sara_khan",
//     password: "mypassword",
//     profilePic: "https://randomuser.me/api/portraits/women/40.jpg"
//   },
//   {
//     username: "alex_roy",
//     password: "letmein123",
//     profilePic: "https://randomuser.me/api/portraits/men/50.jpg"
//   }
// ];

// const insertUsers = async () => {
//   try {
//     await User.insertMany(dummyUsers);
//     console.log("Dummy users inserted successfully!");
//   } catch (err) {
//     console.error("Error inserting users:", err);
//   }
// };

// insertUsers();
