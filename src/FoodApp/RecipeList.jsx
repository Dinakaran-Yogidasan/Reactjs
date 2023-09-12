import RecipeCard from "./RecipeCard";

function RecipeList({ recipes }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-12">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;

// const Spinner = () => {
//   return (
//     <div>
//       {/* <!-- Spinner Start --> */}
//       <div
//         id="spinner"
//         className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
//       >
//         <div
//           className="spinner-border text-primary"
//           role="status"
//           style={{ width: "3rem", height: "3rem" }}
//         ></div>
//       </div>
//       {/* <!-- Spinner End --> */}
//     </div>
//   );
// };

// export default Spinner;
