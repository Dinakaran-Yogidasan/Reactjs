// // // // // // import React, { createContext, useState } from "react";
// // // // // // import ComponentA from "./ReactProjects/ComponentA";

// // // // // // export const NameContext = createContext();
// // // // // // export const ColorContext = createContext();

// // // // // // const App = () => {
// // // // // //   const [first, setfirst] = useState("Dinakaran");

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h1>Context Hooks</h1>
// // // // // //       <button onClick={() => setfirst("King")}>Change Name</button>

// // // // // //       <NameContext.Provider value={first}>
// // // // // //         <ColorContext.Provider value={"red"}>
// // // // // //           <ComponentA />
// // // // // //         </ColorContext.Provider>
// // // // // //       </NameContext.Provider>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default App;

// // // // // import React, { createContext, useReducer } from "react";
// // // // // import Counter from "./ReactProjects/useReducer/Counter";
// // // // // import ComponentA from "./ReactProjects/useReducer/ComponentA";

// // // // // export const CounterContext = createContext();
// // // // // const initialState = {
// // // // //   counter: 0,
// // // // // };

// // // // // const reducerFunction = (state, action) => {
// // // // //   switch (action.type) {
// // // // //     case "incrememnt":
// // // // //       return {
// // // // //         //  ...state, ...payload
// // // // //         ...state,
// // // // //         counter: state.counter + 1,
// // // // //       };
// // // // //     case "decrememnt":
// // // // //       return {
// // // // //         // ...state, ...payload
// // // // //         ...state,
// // // // //         counter: state.counter - 1,
// // // // //       };
// // // // //     case "reset":
// // // // //       return initialState;
// // // // //     default:
// // // // //       return state;
// // // // //   }
// // // // // };
// // // // // const App = () => {
// // // // //   const [state, dispatch] = useReducer(reducerFunction, initialState);
// // // // //   return (
// // // // //     <div>
// // // // //       {/* <Counter /> */}
// // // // //       <CounterContext.Provider value={{ counter: state.counter, dispatch }}>
// // // // //         <ComponentA />
// // // // //       </CounterContext.Provider>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default App;

// // // // import {
// // // //   Avatar,
// // // //   Chip,
// // // //   Divider,
// // // //   List,
// // // //   ListItem,
// // // //   ListItemAvatar,
// // // //   ListItemText,
// // // //   Stack,
// // // //   Typography,
// // // // } from "@mui/material";
// // // // import axios from "axios";
// // // // import React from "react";
// // // // import { useEffect } from "react";
// // // // import { useReducer } from "react";

// // // // const initialState = {
// // // //   loading: true,
// // // //   error: "",
// // // //   todos: [],
// // // // };

// // // // const apiReducer = (state, action) => {
// // // //   switch (action.type) {
// // // //     case "SET_DATA":
// // // //       return { loading: false, error: "", todos: action.payload };
// // // //     case "SET_ERROR":
// // // //       return { loading: false, error: "Some Error", todos: [] };
// // // //     default:
// // // //       return state;
// // // //   }
// // // // };

// // // // const App = () => {
// // // //   const [state, dispatch] = useReducer(apiReducer, initialState);

// // // //   useEffect(() => {
// // // //     axios
// // // //       .get("https://jsonplaceholder.typicode.com/todos")
// // // //       .then((response) => {
// // // //         console.log(response.data);
// // // //         dispatch({ type: "SET_DATA", payload: response.data });
// // // //         // console.log("first", JSON.stringify(response, null, 2));
// // // //       })
// // // //       .catch((err) => {
// // // //         dispatch({ type: "SET_ERROR" });
// // // //       });
// // // //     return () => {
// // // //       console.log("Clean Up");
// // // //     };
// // // //   }, []);

// // // //   const userData = (
// // // //     <>
// // // //       {state.todos.map((user) => (
// // // //         <List
// // // //           key={user.id}
// // // //           sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
// // // //         >
// // // //           <ListItem alignItems="flex-start">
// // // //             <ListItemAvatar>
// // // //               <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
// // // //             </ListItemAvatar>
// // // //             <ListItemText
// // // //               primary={user.title}
// // // //               secondary={
// // // //                 <Stack direction="row" spacing={1}>
// // // //                   {user.completed ? (
// // // //                     <Chip label="Completed" color="success" />
// // // //                   ) : (
// // // //                     <Chip label="Not Completed" color="error" />
// // // //                   )}
// // // //                 </Stack>
// // // //               }
// // // //             />
// // // //           </ListItem>
// // // //           <Divider variant="inset" component="li" />
// // // //         </List>
// // // //       ))}
// // // //     </>
// // // //   );
// // // //   return (
// // // //     <>{state.loading ? "LOADING" : state.error ? state.error : userData}</>
// // // //   );
// // // // };

// // // // export default App;

// // // import React, { useCallback, useMemo, useState } from "react";
// // // import MemoValue from "./ReactProjects/useMemo/MemoValue";
// // // import Reference from "./ReactProjects/useRef/Reference";
// // // import Component from "./ReactProjects/useRef/Component";

// // // const functionCounter = new Set();
// // // const App = () => {
// // //   // const [first, setfirst] = useState(0);
// // //   const [count, setCount] = useState(0);
// // //   const [counter, setCounter] = useState(0);

// // //   const increase = useCallback(() => {
// // //     console.log("Increase", increase);
// // //     setCount(count + 1);
// // //   }, [count]);

// // //   const increase1 = () => {
// // //     console.log("Increase1", increase1);

// // //     setCounter((counter) => counter + 1);
// // //   };

// // //   functionCounter.add(increase);
// // //   functionCounter.add(increase1);
// // //   console.log(functionCounter);

// // //   // const memoComponentA = useMemo(() => {
// // //   //   return <MemoValue first={first} />;
// // //   // }, [first]);

// // //   return (
// // //     <div>
// // //       {/* <h1>{first}</h1>
// // //       <button onClick={increase}>ADD</button> */}
// // //       <h1>{count}</h1>
// // //       <button onClick={increase}>INCREASE</button>
// // //       <button onClick={() => count === 0 || setCount(count - 1)}>
// // //         DECREASE
// // //       </button>

// // //       <h1>{counter}</h1>
// // //       <button onClick={increase1}>INCREASE</button>
// // //       <button onClick={() => setCounter(counter - 1)}>DECREASE</button>
// // //       {/* <h1>{memoComponentA}</h1> */}
// // //       {/* <MemoValue /> */}
// // //       <Reference />
// // //       <Component />
// // //     </div>
// // //   );
// // // };

// // // export default App;

// // // Router Examples
// // import React from "react";
// // import Topbar from "./ReactProjects/ReactRouter/Topbar";
// // import { Route, Router, Routes } from "react-router";
// // import Home from "./ReactProjects/ReactRouter/Home";
// // import About from "./ReactProjects/ReactRouter/About";
// // import Contact from "./ReactProjects/ReactRouter/Contact";
// // import Post from "./ReactProjects/ReactRouter/Post";

// // const App = () => {
// //   return (
// //     <div>
// //       <Topbar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/contact" element={<Contact />} />
// //         {/* <Route path="/:post_id" element={<Post />} /> */}
// //         <Route path="/posts/:post_id" element={<Post />} />
// //         {/* <Route path="/post.id" element={<Post />} /> */}
// //       </Routes>
// //     </div>
// //   );
// // };

// // export default App;

// import React, { useMemo } from "react";
// import { useState, useEffect } from "react";
// import StopWatch from "./ReactJS/Hooks/StopWatch";
// import SearchFilter from "./ReactJS/MapFilter/SearchFilter";
// import RestApi from "./ReactJS/Hooks/RestApi";
// import FirstComponent from "./ReactJS/Hooks/Context/FirstComponent";
// import SecondComponent from "./ReactJS/Hooks/Context/SecondComponent";
// import { UserData } from "./ReactJS/Hooks/Context/GlobalContext";
// import Project from "./ReactJS/Hooks/Project";
// import StateHook from "./ReactJS/Hooks/StateHook";
// const names = ["Brian", "Paul", "Krug", "Halley"];
// const items = [
//   { id: 1, text: "Item 1" },
//   { id: 2, text: "Item 2" },
// ];

// const App = () => {
//   const Employee = useMemo(
//     () =>
//       function Employee({ name }) {
//         return (
//           <>
//             <p>Name: {name}</p>
//           </>
//         );
//       },
//     []
//   );
//   const [counter, setCounter] = useState(0);
//   const [name, setName] = useState("Dinakaran");

//   useEffect(() => {
//     mainFn();
//   }, []);

//   const handleIncrease = () => {
//     setCounter((count) => count + 1);
//   };
//   const handleDecrease = () => {
//     if (counter > 0) {
//       setCounter((count) => count - 1);
//     }
//   };
//   const handleReset = () => {
//     setCounter(0);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(name);
//   };
//   const listName = names.map((name) => (
//     <div>
//       <b>{name}</b>
//     </div>
//   ));

//   const listItems = items.map((item) => (
//     <div key={item.id}>
//       <b>{item.text}</b>
//     </div>
//   ));

//   const nameChange = () => {
//     setName("Danny");
//   };

//   const fuArray = [
//     function fn(a, b) {
//       return a + b;
//     },
//     function fn(a, b) {
//       return a - b;
//     },
//     function fn(a, b) {
//       return a * b;
//     },
//     function fn(a, b) {
//       return a / b;
//     },
//   ];

//   const mainFn = () => {
//     let result = fuArray.map((data) => {
//       return data(2, 5);
//     });
//     console.log(result);
//   };

//   return (
//     <div>
//       <Employee name={name}/>

//       {/* <h1>Counter {counter}</h1>
//       <button onClick={handleIncrease}>+</button>
//       <button onClick={handleDecrease}>-</button>
//       <button onClick={handleReset}>Reset</button>
//       <b>{listName}</b>
//       <b>{listItems}</b>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Data</button>

//       <StopWatch name={name} handleSubmit={handleSubmit} /> */}
//       {/* <button onClick={nameChange}>ChangeNAme</button>
//       <SearchFilter name={name} /> */}
//       {/* <RestApi/> */}
//       <UserData.Provider value={{ name, setName }}>
//         <FirstComponent />
//         <SecondComponent />
//       </UserData.Provider>
//       <Project name={name}/>
//       <StateHook/>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import { alertName, userName, default as sample } from "./Guvi/function";
import * as ulitiy from "./Guvi/function";
import CardLink from "./Guvi/CardLink/CardLink";
import "./App.css";
import Basic from "./Guvi/Basic";
import { green } from "@mui/material/colors";
import Cart from "./Guvi/PricingCart/Cart";
// import Dashboard from './Components/Dashboard/Dashboard'

const cardData = [
  {
    name: "Dinakaran",
    info: "Thinking about the future",
    link: "https://www.material-react-table.com/",
  },
  {
    name: "Developer Danny",
    info: "Live of Die",
    link: "https://www.material-react-table.com/",
  },
];

const showFooter = false;

const App = () => {
  console.log(ulitiy);
  console.log(<CardLink />);
  return (
    <>
      <b>{ulitiy.userName}</b>
      <p>{userName}</p>
      <button onClick={alertName}>Alert ME</button>
      <button onClick={sample}>sample</button>
      <div className="container">
        {/* <CardLink
          name="Dinakaran"
          info="Thinking about the future"
          link="https://www.material-react-table.com/"
        />
        <CardLink name="Developer Danny" info="Thinking about the future" />
        <CardLink name="Dev" info="Thinking about the future" />
        <CardLink name="Hacker" info="Thinking about the future" /> */}
        {/* <Basic /> */}

        {/* Conditional Rendering && if its true after this && content will display and execute */}
        {!showFooter && <h1>Conditional Rendering</h1>}
        {/* Conditional Rendering Ternery Operators syntax: variable  ? 'true' : 'false' */}
        {showFooter ? <h1>Ternery True</h1> : <h1>Ternery False</h1>}
        <div style={{ backgroundColor: green }}>
          {cardData.map(({ name, info, link }) => (
            <CardLink name={name} info={info} link={link} />
          ))}
        </div>
        <b>
          <Cart/>
        </b>
      </div>
    </>
  );
};

export default App;
