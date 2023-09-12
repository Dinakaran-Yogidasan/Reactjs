import { useState } from "react";

const Storage = () => {
  const [first, setfirst] = useState("");

  const localStorageMethods = () => {
    const exixtestItem = localStorage.getItem("value")
      ? JSON.parse(localStorage.getItem("value"))
      : [];
    const newArr = [...exixtestItem, first];
    localStorage.setItem("value", JSON.stringify(newArr));
    console.log(newArr);
  };
  // const addStorage = () => {
  //   // To store data
  //   console.log(localStorage.setItem("Key", JSON.stringify(first)));
  //   localStorage.setItem("Key", first);
  //   // console.log(localStorage.setItem("value", JSON.stringify({ name: first })));
  //   // localStorage.setItem("value", JSON.stringify({ name: first }));

  //   // const exixtestItem = localStorage.getItem("val")
  //   //   ? JSON.parse(localStorage.getItem("val"))
  //   //   : [];
  //   // console.log(JSON.parse(localStorage.getItem([...exixtestItem, first])));
  //   setfirst("");
  // };
  return (
    <div>
      {first}
      <input
        type="text"
        name="title-First"
        // value={moviesAdd.title}
        onChange={(e) => setfirst(e.target.value)}
        id="hs-feedback-post-comment-name-1"
        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 mt-5 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-blue-500 dark:border-blue-600 dark:hover:border-blue-700"
        placeholder="Movie Title - First"
      />

      <button
        className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500"
        onClick={localStorageMethods}
      >
        Local STORAGE
      </button>
      <button
        className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500"
        onClick={localStorage.clear()}
      >
        Remove
      </button>
    </div>
  );
};

export default Storage;
