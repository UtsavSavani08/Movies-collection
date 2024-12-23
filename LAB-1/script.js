const movies = [
    { title: "Inception", genre: "Sci-Fi", year: 2010, rating: 8.8 },
    { title: "The Dark Knight", genre: "Action", year: 2008, rating: 9.0 },
    { title: "Interstellar", genre: "Sci-Fi", year: 2014, rating: 8.6 },
    { title: "Parasite", genre: "Drama", year: 2019, rating: 8.6 },
    { title: "The Godfather", genre: "Crime", year: 1972, rating: 9.2 }
];

function display(content, targetId) {
    const targetDiv = document.getElementById(targetId);
    targetDiv.textContent = '';
    if (typeof content === 'string') {
        targetDiv.textContent = content;
    } else if (Array.isArray(content)) {
        content.forEach(item => targetDiv.appendChild(item));
    } else {
        targetDiv.appendChild(content);
    }
}

function createMovieElement(movie) {
    const movieDiv = document.createElement("div");
    movieDiv.className = "movie";
    const title = document.createElement("strong");
    title.textContent = `Title: ${movie.title}`;
    const genre = document.createElement("p");
    genre.textContent = `Genre: ${movie.genre}`;
    const year = document.createElement("p");
    year.textContent = `Release Year: ${movie.year}`;
    const rating = document.createElement("p");
    rating.textContent = `Rating: ${movie.rating}`;
    movieDiv.appendChild(title);
    movieDiv.appendChild(document.createElement("br"));
    movieDiv.appendChild(genre);
    movieDiv.appendChild(year);
    movieDiv.appendChild(rating);
    return movieDiv;
}

function displayAllMovies() {
    const allMovies = movies.map(createMovieElement);
    display(allMovies, "allMovies");
}

document.getElementById("addMovieButton").addEventListener("click", function () {
    const title = document.getElementById("movieTitle").value;
    const genre = document.getElementById("movieGenre").value;
    const year = parseInt(document.getElementById("movieYear").value);
    const rating = parseFloat(document.getElementById("movieRating").value);

    if (title && genre && !isNaN(year) && !isNaN(rating)) {
        const newMovie = { title, genre, year, rating };
        movies.push(newMovie);
        displayAllMovies();
        display([createMovieElement(newMovie)], "Result");
    } else {
        display("Please fill in all fields correctly.", "Result");
    }
});

document.getElementById("filterGenreButton").addEventListener("click", function () {
    const genre = document.getElementById("filterGenre").value.toLowerCase();
    if (genre) {
        const filteredMovies = movies.filter(movie => movie.genre.toLowerCase() === genre);
        const elements = filteredMovies.map(createMovieElement);
        display(elements.length > 0 ? elements : [document.createTextNode(`No movies found in Genre "${genre}".`)], "Result");
    } else {
        display("Please enter a genre.", "Result");
    }
});

document.getElementById("filterYearButton").addEventListener("click", function () {
    const year = parseInt(document.getElementById("filterYear").value);
    if (!isNaN(year)) {
        const filteredMovies = movies.filter(movie => movie.year > year);
        const elements = filteredMovies.map(createMovieElement);
        display(elements.length > 0 ? elements : [document.createTextNode(`No movies found released after ${year}.`)], "Result");
    } else {
        display("Please enter a valid year.", "Result");
    }
});

document.getElementById("displayTitlesButton").addEventListener("click", function () {
    const titles = movies.map(movie => movie.title);
    display(titles.length > 0 ? [document.createTextNode(`All Movie Titles: ${titles.join(", ")}`)] : [document.createTextNode("No movies to display.")], "Result");
});

document.getElementById("highestRatedButton").addEventListener("click", function () {
    if (movies.length === 0) {
        display("No movies in the collection.", "Result");
        return;
    }
    const highestRatedMovie = movies.reduce((prev, current) => (prev.rating > current.rating ? prev : current));
    display([createMovieElement(highestRatedMovie)], "Result");
});

displayAllMovies();
