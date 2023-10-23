// import { useSelector, useDispatch } from "react-redux";
// import "./App.css";
// import Cart from "./component/Cart";
// import Product from "./component/Product";
// import { action } from "./store";

// function App() {
//   const counter = useSelector((state) => state.counter);
//   const dispatch = useDispatch();

//   const increment = () => {
//     dispatch(action.increment);
//     console.log("Counting");
//   };
//   const decrement = () => {
//     dispatch(action.decrement());
//     console.log("De-Counting");
//   };
//   return (
//     <div className="App">
//       <h1>Redux ToolKit</h1>
//       <h1>Counter</h1>
//       <h1>{counter}</h1>
//       <button onClick={increment}>INC</button>
//       <button onClick={decrement}>DEC</button>

//       {/* <Product id="1" name="Product 1" price="10" />
//       <Product id="2" name="Product 2" price="20" />
//       <Product id="3" name="Product 3" price="30" />
//       <Cart /> */}
//     </div>
//   );
// }

// export default App;

import React from 'react'
import Tasks from './Redux/TaskHandler/Tasks'
import TaskLists from './Redux/TaskHandler/TaskLists'

const App = () => {
  return (
    <div>
      <Tasks/>
      <TaskLists/>
    </div>
  )
}

export default App
