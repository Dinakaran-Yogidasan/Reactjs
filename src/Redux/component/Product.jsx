import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/Actions/cartActions";

const Product = ({ id, name, price }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = () => {
    const item = {
      id,
      name,
      price,
    };
    dispatch(addToCart(item));
    console.log(addToCart(item));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
    console.log(dispatch(removeFromCart(itemId)));
  };

  return (
    <div>
      <h1>Product List</h1>
      <h3>{name}</h3>
      <h3>{price}</h3>
      <button type="button" onClick={handleAddToCart}>
        ADD TO CART
      </button>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => handleRemoveFromCart(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Product;
