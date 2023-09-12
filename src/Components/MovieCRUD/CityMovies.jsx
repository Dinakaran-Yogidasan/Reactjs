import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const CityMovies = () => {
  console.log(useParams());
  console.log(useSearchParams())
  const { city } = useParams();
  const [search, setSearch] = useSearchParams();
  return (
    <div>
      <h1>CityMovies {city}</h1>
    </div>
  );
};

export default CityMovies;
