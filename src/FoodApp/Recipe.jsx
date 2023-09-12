import { useEffect, useState } from "react";
import RecipeList from "./RecipeList";

const Recipe = () => {
  const [searchRecipe, setSearchRecipe] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleChange = (e) => {
    setSearchRecipe(e.target.value);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearchRecipe = async (e) => {
    e.preventDefault();
    console.log(searchRecipe);
    searchRecipe === "" && alert("No food Found");
    handleSearch();
  };

  const handleSearch = async () => {
    const response = await fetch(
      ` https:www.themealdb.com/api/json/v1/1/search.php?s=${searchRecipe}`
    );
    const { meals } = await response.json();
    setRecipes(meals);
    console.log(meals);
  };

  return (
    <>
      <div className="max-w-6xl pt-16 pb-10 px-4 sm:px-6 lg:px-8 md:pt-20 lg:pt-0 lg:pb-20 mx-auto">
        <div className="bg-gray-100 relative rounded-xl p-5 sm:py-16 before:absolute before:top-0 before:left-0  before:bg-no-repeat before:bg-top before:bg-contain before:w-2/3 before:h-full before:z-0 dark:bg-[#151c2f] dark:before:bg-[url('../svg/component/banner-bg-dark.svg')]">
          <div className="max-w-xl relative z-10 text-center mx-auto">
            <div className="mb-5">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
                MealsDB
              </h2>
            </div>

            <div id="mc_embed_signup">
              <form>
                <div>
                  <div className="grid sm:flex gap-3">
                    <input
                      type="text"
                      value={searchRecipe}
                      name="recipe"
                      className="block w-full border-gray-200 sm:text-sm shadow-sm rounded-md p-3 dark:bg-[#151c2f] dark:border-gray-800 dark:text-gray-400"
                      placeholder="Recipe"
                      onChange={handleChange}
                    />
                    <button
                      type="submit"
                      name="subscribe"
                      onClick={handleSearchRecipe}
                      className="inline-block text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-100 transition py-2.5 px-6 dark:focus:ring-offset-[#151c2f]"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <RecipeList recipes={recipes} />
    </>
  );
};

export default Recipe;
