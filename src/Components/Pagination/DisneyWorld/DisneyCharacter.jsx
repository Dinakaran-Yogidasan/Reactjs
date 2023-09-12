import React, { useEffect, useState } from "react";

const DisneyCharacter = () => {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  //   Fnctions for calling the disney api

  const fetchCharacters = async () => {
    try {
      const response = await fetch(
        `https://api.disneyapi.dev/character?page=${page}&pageSize=5`
      );
      const { data } = await response.json();
      setCharacter(data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  //   Mounting Phase get the first page characters
  //   update phase get the first page is updated
  useEffect(() => {
    fetchCharacters();
  }, [page]);
  console.log(character);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error...</div>
      ) : (
        <div>
          {character.map((character) => (
            <div key={character._id}>
              <h1>{character.name}</h1>
              <img src={character.imageUrl} alt={character.name} />
            </div>
          ))}
          <button
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            disabled={page === 1 ? true : false}
            onClick={() => setPage(page - 1)}
          >
            Previous Page
          </button>
          <button
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            onClick={() => setPage(page + 1)}
          >
            Next Page
          </button>
          <p>Page: {page}</p>
        </div>
      )}
    </>
  );
};

export default DisneyCharacter;
