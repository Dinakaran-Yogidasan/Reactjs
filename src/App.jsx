import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./pages/Counter";
import Form from "./Components/Basic/Form";
import Todo from "./Components/Basic/Todo";
import Card from "./Components/Card/Card";
// import Content from "./Layout/Content";
import Footer from "./Layout/Footer";
// import Header from "./Layout/Header";
import LifeCycle from "./Components/Basic/LifeCycle";
import Table from "./Components/Pagination/Table";
import Flag from "./Components/Pagination/Flag";
import DisneyCharacter from "./Components/Pagination/DisneyWorld/DisneyCharacter";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/MovieCRUD/Home";
import Add from "./Components/MovieCRUD/Add";
import Edit from "./Components/MovieCRUD/Edit";
import PageNotFound from "./Components/MovieCRUD/PageNotFound";
import CityMovies from "./Components/MovieCRUD/CityMovies";
import ThemeContext from "./Layout/Context/ThemeContext";
import Sidebar from "./Components/MovieApp/Layout/Sidebar";
import Header from "./Components/MovieApp/Layout/Header";
import Content from "./Components/MovieApp/Layout/Content";
import AddMovie from "./Components/MovieApp/CRUD/AddMovie";
import HomePage from "./Components/MovieApp/CRUD/HomePage";
import EditMovie from "./Components/MovieApp/CRUD/EditMovie";
import Movie from "./Components/MovieApp/CRUD/Movie";
import FormikAddMovie from "./Components/MovieApp/CRUD/FormikAddMovie";
import Storage from "./Components/MovieApp/CRUD/Storage";
import { Provider } from "react-redux";
import Login from "./pages/Login";
import Recipe from "./FoodApp/Recipe";
import store from "./store/store";
import Admin from "./pages/Admin";
import ProductedRoute from "./ProductedRoute";
import ProductedPage from "./ProductedRoute";
import("preline");
// import Pricing from "./Components/Pricing/Pricing";

function App() {
  // const [theme, setTheme] = useState("light");
  // const toggleTheme = () => setTheme(!theme);
  // console.log(theme);

  // const [wishList, setWishList] = useState([]);

  // const [lifeCycle, setLifeCycle] = useState(false);

  // const handleLifeCycle = () => {
  //   setLifeCycle(!lifeCycle);
  // };

  // const addWishList = (item) => {
  //   setWishList([...wishList, item]);
  // };
  // const removeWishList = (item) => {
  //   setWishList(wishList.filter((wishItem) => wishItem !== item));
  // };

  // console.log(wishList);

  return (
    <>
      {/* <Pricing/> */}
      {/* <Card name={cardData.name} /> */}
      {/* {cardData.map(({ id, name, info, link }) => (
        <Card key={id} name={name} info={info} link={link} />
      ))} */}
      {/* <Card name={cardData.name}/> */}
      {/* {cardData.map(({ id, name, info, link }) => (
        <Card key={id} id={id} name={name} info={info} link={link} />
      ))} */}
      {/* <Home/>
      <Counter/> */}
      {/* <Todo/> */}
      {/* <Form/> */}
      {/* <Header
        wishCount={wishList.length}
        title={wishList.map((movie) => movie.Title)}
      /> */}
      {/* Passing state modify function as a property value {PROPS} */}
      {/* <Content addWishList={addWishList} removeWishList={removeWishList} /> */}

      {/* <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          LifeCycle Of A Component
        </h2>
      </div>

      <button
        onClick={handleLifeCycle}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {lifeCycle ? " Add" : "Remove"} Lifecycle to the DOM
      </button>
      {!lifeCycle && <LifeCycle />} */}

      {/* <Footer /> */}
      {/* <Table/> */}
      {/* <Flag/> */}
      {/* <DisneyCharacter/> */}

      {/* <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/movies">
          <Route index element={<Home />} />
          <Route path="add" element={<Add />} />
          <Route path="edit" element={<Edit />} />
          <Route path=":city" element={<CityMovies />} />
        </Route>
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
        {/* <Route path="*" element={"404 Page"} /> */}
      {/* <h1>Home Page</h1>
        <h1>ADD Page</h1>
        <h1>EDIT Page</h1> */}
      {/* </Routes> */}

      {/* <ThemeContext.Provider value={{theme, toggleTheme}}>
        <button onClick={toggleTheme} >
          {" "}
          {theme ? "Dark" : "light"} Mode
          <h1>Dark Moder App</h1>
        </button>
      </ThemeContext.Provider> */}
      {/* <AddMovie/> */}
      {/* <div>
        <h1>Home Page</h1>
        <Link to="/">
          <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <button className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">
              Home
            </button>
          </div>
        </Link>
        <Link to="/movies/home">
          <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <button className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">
              Home Page
            </button>
          </div>
        </Link>
        <Link to="/movies/add">
          <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <button className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">
              ADD Page
            </button>
          </div>
        </Link>
        <Link to="/movies/edit">
          <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <button className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">
              EDIT Page
            </button>
          </div>
        </Link>
        <Link to="/movies/:city">
          <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <button className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">
              City Page
            </button>
          </div>
        </Link>
        <Link to="/movies/addFormik">
          <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <button className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">
              addFormik
            </button>
          </div>
        </Link>
        <Link to="/storage">
          <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <button className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">
              Storage
            </button>
          </div>
        </Link>
      </div> */}
      {/* <Routes> */}
      <>
        {/* <Route index path="/" element={<Home />} />
        <Route path="/movies/home" element={<HomePage />} />
        <Route path="/movies/add" element={<AddMovie />} />
        <Route path="/movies/addFormik" element={<FormikAddMovie />} />
        <Route path="/movies/edit" element={<EditMovie />} />
        <Route path="/movies/:movieId" element={<Movie />} />
        <Route path="/storage" element={<Storage />} /> */}

        {/* <Route path="/movies/:movieId" element={<CityMovies />} /> */}
        {/* <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to={"/"} replace />} /> */}
        {/* <Route path="*" element={"404 Page"} /> */}
        {/* <Recipe/> */}
        {/* <Flag/> */}
      </>
      {/* </Routes> */}
      <Provider store={store}>
        <Routes>
          <Route index path="/" element={<Admin />} />
          <Route index path="/login" element={<Login />} />
          <Route
            path="/login"
            element={<ProductedPage element={<Login />} />}
          />

          <Route path="/counter" element={<Counter />} />
          <Route path="/storage" element={<Storage />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
