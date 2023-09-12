import { moviesUrl } from "./Config";

export const createMovie = async (movieData) => {
  const response = await fetch(`${moviesUrl}/movie`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movieData),
  });
  const movie = await response.json();
  return movie;
};

export const getMovies = async (movieData) => {
  const response = await fetch(`${moviesUrl}/movie`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movieData),
  });
  const movies = await response.json();
  return movies;
};
// export const updateMovie = async (movieData, movieId) => {
//   const response = await fetch(`${moviesUrl}/movie/${movieId}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(movieData),
//   });
//   const movies = await response.json();
//   return movies;
// };

export const updateMovie = async (movieId, movieData) => {
  const response = await fetch(`${moviesUrl}/movie/${movieId}`, {
    method: "PUT",
    body: JSON.stringify(movieData),
    headers: { "Content-Type": "application/json" },
  });
  const movies = await response.json();
  return movies;
};

export const getMovie = async (movieId) => {
  const response = await fetch(`${moviesUrl}/movie/${movieId}`);
  const movie = await response.json();
  return movie;
};

export const deleteMovie = async (movieId) => {
  const response = await fetch(`${moviesUrl}/movie/${movieId}`, {
    method: "DELETE",
  });
  const movie = await response.json();
  return movie;
};


