import { useState } from "react";

const StudentDetails = [
  {
    id: 1,
    name: "arun",
    gender: "Male",
    physics: 88,
    maths: 87,
    english: 78,
  },
  {
    id: 2,
    name: "rajesh",
    gender: "Male",
    physics: 96,
    maths: 100,
    english: 95,
  },
  {
    id: 3,
    name: "usha",
    gender: "Female",
    physics: 67,
    maths: 45,
    english: 78,
  },

  {
    id: 4,
    name: "Jenifer",
    gender: "Female",
    physics: 67,
    maths: 88,
    english: 90,
  },
];

const Form = () => {
  return (
    <div>
      <h1>StudentDetails</h1>
      {StudentDetails.map(({ id, name, gender, physics, maths, english }) => (
        <div key={id}>
          <p>{name}</p>
          <p>{gender}</p>
          <p>{physics}</p>
          <p>{maths}</p>
          <p>{english}</p>
        </div>
      ))}
    </div>
  );
};

export default Form;
