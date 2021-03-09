const {List} = require('immutable');

function translatApiResponse(data) {
  const movies = List(data.results);
  return movies.take(10).map((movie) => ({
    movie_id: movie.id,
    title: movie.title,
    poster_image_url: `https://image.tmdb.org/t/p/w185/${movie.poster_path}`,
    popularity_summary: `${movie.popularity} out of ${movie.vote_count}`,
  }));
}

module.exports = {translatApiResponse};