# FowlerPlex - A Movie-Finding App

## Description

FowlerPlex is a movie finding app that allows you to explore movies, search by title, and view detailed information about each movie. It offers an intuitive interface with a responsive design, making it easy to browse and find new movies to watch. It leverages the TMDB API to bring in any movie as it is displayed in the app or any movie you search for. This app uses a combination of TypeScript with the React framework.

## How to Run

In order to run this app, simply navigate to [crf36.github.io/FowlerPlex](https://crf36.github.io/FowlerPlex/). From there, you can scroll through movies that are grouped together by different categories, search for movies by title, and select a movie to view more details about it.

## API and Data Usage

As mentioned, this app leverages the TMDB API to gather all of its data. The data includes titles, descriptions, genres, ratings, images, and more.

This data is fetched from the TMDB API and stored locally. From there, the app manages the state of these variabled, and passes them to different components of the app as needed. Specifically, there are 3 places this app makes calls to TMDB:

### 1. Generating Content Galleries

The homepage of this app displays various categories of movies. Since these movies can be repeated across categories, the app stores the movies in a dictionary with the unique key being the movie id combined with the category tag. This ensures that there are no duplicate keys in the dictionary. A tag property is also added to each movie to make is easier to filter and display the galleries of movies.

### 2. Searching by Title

The search feature of this app leverages a branch of the TMDB that allows for limited filter searching by movie title. The query a user types in is sent to TMDB and returns the top 20 results. These are stored in a similar fashion, however the tag property is left blank (as it doesn't apply) and the key is simply the movie id (since there are no duplicate movies when searching).

### 3. Displaying Movie Details

The details page of this app receives a movie id (when a movie is selected) and fetches additional information about the movie from the API. This is stored in a movie details object which is an extention of the traditional movie object.

## Additional Features

This app implements custom hooks to help fetch data and provide context for it throughout the app. In addition, the app uses some tailwind to display the galleries on the main page of the app.
