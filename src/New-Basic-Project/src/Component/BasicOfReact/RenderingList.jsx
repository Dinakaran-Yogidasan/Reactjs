import React from "react";
const product = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

const RenderingList = () => {
  const listItems = product.map((item) => (
    <li
      key={item.id}
      style={{
        color: item.isFruit ? "green" : "red",
      }}
    >
      {item.title}
    </li>
  ));
  return (
    <div>
      <div>RenderingList</div>
      <h1>{listItems}</h1>
    </div>
  );
};

export default RenderingList;
