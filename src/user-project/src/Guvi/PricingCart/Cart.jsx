import React, { useState } from "react";

const Cart = () => {
  const [rating, setRating] = useState();
  const handleChange = (e) => {
    setRating(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(rating);
    setRating("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Ratings</label>
        <input type="text" placeholder="Ratings" onChange={handleChange} />
        <button onClick={handleSubmit}>Rating</button>
        <h1>Ratings {rating}</h1>
      </form>
      <div>
        {}
        <button>Show Header</button>
      </div>
    </>
  );
};

export default Cart;
