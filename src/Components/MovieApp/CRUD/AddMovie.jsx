import { useState } from "react";
import { createMovie } from "../../../movieCrud";
import { useFormik } from "formik";

const initialState = {
  title: "",
  year: "",
  images: "",
  category: "",
  trailer: "",
};

const AddMovie = () => {
  // Create a new movie object using the current state(UserState)
  const [moviesAdd, setMoviesAdd] = useState(initialState);

 

  const handleChange = (e) => {
    // setMoviesAdd({...moviesAdd, [e.target.name]: e.target.value });
    const { name, value } = e.target;
    setMoviesAdd((preMovie) => ({ ...preMovie, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(moviesAdd);
    createMovie(moviesAdd);
    setMoviesAdd(initialState);
  };
  return (
    <>
      {/* <!-- Comment Form --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
              Movie Add
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
                  value={moviesAdd.title}
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
                  value={moviesAdd.year}
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
                  value={moviesAdd.images}
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

                <select
                  id="newsletter"
                  onChange={handleChange}
                  name="category"
                  value={moviesAdd.category}
                >
                  <option value="">--</option>
                  <option value="Comdey">Comdey</option>
                  <option value="Romance">Romance</option>
                  <option value="Action">Action</option>
                  <option value="ScienceFuction">ScienceFuction</option>
                </select>
                <input
                  type="text"
                  name="category"
                  value={moviesAdd.category}
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
                  value={moviesAdd.trailer}
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
      {/* <!-- End Comment Form --> */}
    </>
  );
};

export default AddMovie;
