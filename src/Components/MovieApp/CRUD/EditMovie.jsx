import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getMovie, updateMovie } from "../../../movieCrud";

const initialState = {
  title: "",
  year: "",
  images: "",
  category: "",
  trailer: "",
};
const EditMovie = () => {
  const [params] = useSearchParams();

  const [editMovie, setEditMovie] = useState(initialState);

  const navigate  =  useNavigate();

  useEffect(() => {
    editMoviesData();
  }, []);

  // const editMoviesData = async () => {
  //   const response = await getMovies(params.get("id"));
  //   setEditMovie(response);
  // };
  const editMoviesData = async () => {
    const response = await getMovie(params.get("id"));
    setEditMovie(response);
    console.log(response);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditMovie((preMovie) => ({ ...preMovie, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(editMovie);
    updateMovie(params.get('id'), editMovie)
    navigate("/movies/home")
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
            Movie Edit
          </h2>
        </div>

        {/* <!-- Card --> */}
        <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700">
          <form>
            <div className="mb-4 sm:mb-8">
              <label
                htmlFor="hs-feedback-post-comment-name-1"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                value={editMovie.title}
                onChange={handleChange}
                id="hs-feedback-post-comment-name-1"
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 mt-5 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-blue-500 dark:border-blue-600 dark:hover:border-blue-700"
                placeholder="Movie Title"
              />
            </div>

            <div className="mb-4 sm:mb-8">
              <label
                htmlFor="hs-feedback-post-comment-email-1"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Year
              </label>
              <input
                type="text"
                name="year"
                value={editMovie.year}
                onChange={handleChange}
                id="hs-feedback-post-comment-email-1"
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 mt-5 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-blue-500 dark:border-blue-600 dark:hover:border-blue-700"
                placeholder="Movie Year"
              />
            </div>
            <div className="mb-4 sm:mb-8">
              <label
                htmlFor="hs-feedback-post-comment-email-1"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Images
              </label>
              <input
                type="text"
                name="images"
                value={editMovie.images}
                onChange={handleChange}
                id="hs-feedback-post-comment-email-1"
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 mt-5 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-blue-500 dark:border-blue-600 dark:hover:border-blue-700"
                placeholder="Images"
              />
            </div>
            <div className="mb-4 sm:mb-8">
              <label
                htmlFor="hs-feedback-post-comment-email-1"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Category
              </label>
              <input
                type="text"
                name="category"
                value={editMovie.category}
                onChange={handleChange}
                id="hs-feedback-post-comment-email-1"
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 mt-5 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-blue-500 dark:border-blue-600 dark:hover:border-blue-700"
                placeholder="Category"
              />
            </div>
            <div className="mb-4 sm:mb-8">
              <label
                htmlFor="hs-feedback-post-comment-email-1"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Trailer
              </label>
              <input
                type="text"
                name="trailer"
                value={editMovie.trailer}
                onChange={handleChange}
                id="hs-feedback-post-comment-email-1"
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 mt-5 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-blue-500 dark:border-blue-600 dark:hover:border-blue-700"
                placeholder="Trailer"
              />
            </div>

            <div className="mt-6 grid">
              <button
                type="submit"
                onClick={handleSubmit}
                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* <!-- End Card --> */}
      </div>
    </div>
  );
};

export default EditMovie;
