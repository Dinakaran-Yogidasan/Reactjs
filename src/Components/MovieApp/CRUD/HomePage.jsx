import { useEffect, useState } from "react";
import { deleteMovie, getMovies } from "../../../movieCrud";
import { Link } from "react-router-dom";
import { axiosCreateMovies, axiosGetMovies } from "../../../movieAxios";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const loadMovies = async () => {
    const response = await getMovies();
    setMovies(response);
    console.log(response);
  };

  const deleteMovies = async (movieId) => {
    const response = await deleteMovie(movieId);
    const newMovies = movies.filter(({ id }) => movieId !== id);
    setMovies(newMovies);
    console.log(response);
    console.log(newMovies);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <>
      <div className="h-screen">
        <button
          type="button"
          onClick={() => axiosGetMovies()}
          className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500"
        >
          Movie Axios
        </button>
        <button
          type="button"
          onClick={() => axiosCreateMovies()}
          className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500"
        >
          CreateMovies Axios
        </button>

        <div
          // className="grid grid-cols-2 md:grid-cols-5 grid-rows-5 md:grid-rows-2 gap-4 h-3/6 w-4/5 mx-auto"
          className=" m-10 container m-auto grid grid-cols-4 gap-10  h-3/6 w-4/5 mx-auto"
        >
          {movies.map((movie) => (
            <div className=" row-span-1 col-span-1" key={movie.id}>
              {/* Query Params edit?id=${movie.id} */}
              <Link to={`/movies/edit?id=${movie.id}`}>
                <button
                  type="button"
                  className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500"
                >
                  Edit
                </button>
              </Link>
              <button
                type="button"
                onClick={() => deleteMovies(movie.id)}
                className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500"
              >
                Delete
              </button>

              <h2 className="font-semibold text-xl pt-4 text-gray-800">
                {movie.title}
              </h2>
              <p className="text-gray-600">{movie.year}</p>
              <p className="text-sm text-gray-500 mt-2">{movie.category}</p>
              <Link to={`/movies/${movie.id}`}>
                <div className="mt-2">
                  <a
                    href={`https://www.youtube.com/watch?v=${movie.category}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Watch Trailer
                  </a>
                  <img
                    src={movie.images}
                    alt={movie.title}
                    className="w-full h-40 object-cover"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
