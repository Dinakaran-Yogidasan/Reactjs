import { movieInstance } from "./axiosConfig";

// Movie instance for the movie
export const axiosCreateMovies = async (movieData) => {
  const { data } = await movieInstance.get("/movie", movieData);
  console.log(data);
};
export const axiosGetMovie = async () => {};
export const axiosGetMovies = async () => {
  const { data } = await movieInstance.get("/movie");
  console.log(data);
};
export const axiosUpdateMovies = async () => {};
export const axiosDeleteMovies = async () => {};
