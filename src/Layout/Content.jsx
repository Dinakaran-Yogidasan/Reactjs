import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard/MovieCard";
import FormModal from "../Components/MovieCard/FormModal";
// import { movies } from "../data/movies";

const Content = ({ addWishList, removeWishList }) => {
  const [moviesData, setMoviesData] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    year: "",
    language: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const handleModalChange = () => {
    setOpenModal(!openModal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.value]: e.target.value,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch(" http://localhost:3000/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.title,
        genre: formData.genre,
        year: formData.year,
        language: formData.language,
      }),
    });
  };


  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Title -->  */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            UpComming Movies
          </h2>
          <div className="text-center">
            <button
              type="button"
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              data-hs-overlay="#hs-modal-signin"
              onClick={handleModalChange}
            >
              Open modal
            </button>
          </div>
        </div>
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <div className="flex items-center justify-center">
            <div className="flex border-2 rounded">
              <input
                type="text"
                className="px-4 py-2 w-80"
                placeholder="Search..."
              />
              <button className="flex items-center justify-center px-4 border-l">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- End Title --> */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              addWishList={addWishList}
              removeWishList={removeWishList}
            />
          ))} */}
        </div>
        {openModal && (
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                className="px-4 py-2 w-80 flex border-2 rounded"
                placeholder="Title..."
                name={"title"}
                onChange={handleChange}
                value={formData.title}
              />
              <input
                type="text"
                className="px-4 py-2 w-80 flex border-2 rounded"
                placeholder="Genre..."
                name={"genre"}
                onChange={handleChange}
                value={formData.genre}
              />
              <input
                type="text"
                className="px-4 py-2 w-80 flex border-2 rounded"
                placeholder="Year..."
                name={"year"}
                onChange={handleChange}
                value={formData.year}
              />
              <input
                type="text"
                className="px-4 py-2 w-80 flex border-2 rounded"
                placeholder="Language..."
                name={"language"}
                onChange={handleChange}
                value={formData.language}
              />
              <button
                type="submit"
                onClick={handleSubmit}
                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              >
                Add New Movie
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default Content;

//       <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
