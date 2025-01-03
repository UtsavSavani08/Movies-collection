# Movie Collection Script

This script manages a collection of movies and allows users to interact with the list through various features.

## Features

1. **Display All Movies**
   - Shows all the movies in the collection with details like title, genre, year, and rating.

2. **Add a Movie**
   - Allows users to add a new movie to the collection by entering:
     - Title
     - Genre
     - Release Year
     - Rating
   - Validates inputs to ensure correctness.

3. **Filter Movies by Genre**
   - Users can filter movies based on a specific genre.
   - If no matching movies are found, a message is displayed.

4. **Filter Movies by Year**
   - Filters and displays movies released after a specified year.
   - Displays a message if no movies match the criteria.

5. **Display All Titles**
   - Lists all movie titles in the collection as a single string.

6. **Find the Highest Rated Movie**
   - Identifies and displays the movie with the highest rating in the collection.

## Key Functions

### `display(content, targetId)`
- Updates the target HTML element with the provided content.
- Supports text, arrays, and HTML elements.

### `createMovieElement(movie)`
- Creates and returns an HTML element representing a movie with its details.

### `displayAllMovies()`
- Maps all movies to their HTML representation and displays them.

## Event Listeners

- **Add Movie Button**: Triggers the addition of a new movie.
- **Filter Genre Button**: Filters movies by genre.
- **Filter Year Button**: Filters movies released after a specified year.
- **Display Titles Button**: Displays all movie titles.
- **Highest Rated Button**: Shows the highest-rated movie.

## Initial Setup

- Calls `displayAllMovies()` to show the initial list of movies.

## Example HTML Structure

- Buttons and input fields like `addMovieButton`, `filterGenre`, etc., are assumed to exist in the HTML.
- A target element with IDs like `allMovies` and `Result` is used for displaying content.

## Usage

- Integrate this script into an HTML file with the corresponding buttons, input fields, and target divs.
- Users can interact through the provided buttons and input fields to manage and explore the movie collection.
