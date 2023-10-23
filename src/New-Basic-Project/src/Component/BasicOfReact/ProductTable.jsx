import React, { useState } from "react";
const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];
const ProductTable = () => {
  const [search, setSearch] = useState("");
  function getImageUrl(person) {
    return "https://i.imgur.com/" + person.imageId + "s.jpg";
  }

  const searchList = people
    .filter((user) => {
      if (search === "") {
        return user;
      } else if (user.name.toLowerCase().includes(search.toLowerCase())) {
        return user;
      }
    })
    .map((person) => (
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    ));
  return (
    <div>
      <h1>Product Table</h1>
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search}
      <button>Search</button>
      <article>
        <h1>Scientists</h1>
        <ul>{searchList}</ul>
      </article>
    </div>
  );
};

export default ProductTable;
