import { useState } from "react";
import React from "react";

const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

const chemist = people.filter(person=> person.profession === "physicist");
const Filter = () => {
  return (
    <>
      <h1>Filter</h1>
      <h2>Array filter methoed</h2>
      <div>
        {chemist.map((person) => (
          <ul key={person.id}>
            <li>{person.name}</li>
            <li>{person.profession}</li>
          </ul>
        ))}
      </div>
    </>
  );
};
export default Filter;
