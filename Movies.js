//65130500024 Taspol Thuanchamnan
class Movies {
  constructor() {
    this.movies = [];
  }

  getAllMovies() {
    return [...this.movies];
  }

  addMovie(title, director, year, genre) {
    if (!title || !director || !year || !genre) return undefined; // Missing required details
    const existingMovie = this.movies.find(
      (movie) =>
        movie.title.toLowerCase() === title.toLowerCase() &&
        movie.director.toLowerCase() === director.toLowerCase()
    );
    if (existingMovie) return undefined; // Duplicate movie
    const newMovie = { title, director, year, genre };
    this.movies.push(newMovie);
    return newMovie;
  }

  updateMovie(title, updatedDetails) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.title.toLowerCase() === title.toLowerCase()
    );
    if (movieIndex === -1) return undefined;

    const updatedMovie = Object.assign(
      {},
      this.movies[movieIndex],
      updatedDetails
    );
    this.movies[movieIndex] = updatedMovie;
    return { ...updatedMovie }; // Return a copy of the updated movie object
  }

  deleteMovieByTitle(title) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.title.toLowerCase() === title.toLowerCase()
    );
    if (movieIndex === -1) return undefined;
    const deletedMovie = this.movies.splice(movieIndex, 1)[0];
    return deletedMovie;
  }
}

module.exports = Movies;
