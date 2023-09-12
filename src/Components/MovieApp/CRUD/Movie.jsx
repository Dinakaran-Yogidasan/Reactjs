/**
 * Components that contain the movie list
 * Trailer, Title and Categories year
 *
 */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteMovie, getMovie } from "../../../movieCrud";

const Movie = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});

  const loadMovie = async () => {
    const response = await getMovie(movieId);
    setMovieData(response);
    console.log(response);
  };

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  //   useEffect(() => {
  //     const fetchMovie = async () => {
  //       try {
  //         const response = await fetch(`http://localhost:3000/movie/${movieId}`);
  //         if (!response.ok) {
  //           throw new Error("Movie not found");
  //         }
  //         const movieData = await response.json();
  //         setMovieData(movieData);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };

  //     fetchMovie();
  //   }, [movieId]);

  //   if (!movieData) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div>
      <h1>Movie Details {movieData.title}</h1>
      <h2>Movie Id: {movieId}</h2>
      <h1>{movieData.title}</h1>
      <iframe
        title={movieData.title}
        src={`https://www.youtube.com/embed/${movieData.trailer}`}
        width={420}
        height={345}
      ></iframe>
    </div>
  );
};

export default Movie;
