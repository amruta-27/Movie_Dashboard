Here is the Overview of How Project actually works...

# Home Page

Home About Community - all have / route only which redirects to home page
Movies - redirects to movies page
Sign in - redirects to login page where 5 users are already stored in DB (Didn't add manual registration) which are listed belo (username , password)

Users : (exclude quotes)
  ["john_doe", "password123"],
  ["jane_smith", "secure456"],
  ["mike_lee", "qwerty789"],
  ["sara_khan", "mypassword"],
  ["alex_roy", "letmein123"]


# Movies

-There are list of movies with some data
-images which are shown as a movie posters are actually urls that are taken by chatgpt so they change everytime 
- Watch trailer button takes user to single movie card
- Rate & review button takes to single movie card
- click on movies also takes use to single movie card
-by searching movie you get appropriate movie
-filters will filter the movies as per filter category

# Movie Card

-information about the movie is listed 
-all review of that movie are listed
-user can add review
-if no user is logged in sign in button will be visible there by clicking on it user will redirect to log in page 
-there is a button Go back will return on movies page
-if user is already login then user can write review and rate as well out of 5

# Profile

-on logout user will logout from site
-all the reviews given by user are listed with movie name review and rating

# Databases

-users : dummy 5 users
-movies : all the movies are stored with url and other data
-rating : all the rating will be store here

# Stack Used

MERN stack
-Used localstorage for storing user 

#Responsive
- some pages may not be responsive due to style conflicts 

THANK YOU!!!
