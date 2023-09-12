function RecipeCard({ recipe }) {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="text-center">
        <img
          className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
        <div className="mt-2 sm:mt-4">
          <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
            {recipe.strMeal}
          </h3>

          <a
            href={recipe.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-100 transition py-2.5 px-6 dark:focus:ring-offset-[#151c2f]"
          >
            Watch Trailer
          </a>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
