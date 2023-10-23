// import axios from "axios";

// async function movies() {
//   const { data: users } = await axios.("https://dummyjson.com/users");
//   console.log(users);
// }
// export { movies };

// Configration the api url for movies {default}

import axios from "axios";

// Movie instances
const movieInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: { "X-Custom-Header": "Movies" },
});

// Add a request interceptor
movieInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log(config);
    return config;
  },
  function (error) {
    // Do something with request error
    console.log(error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
movieInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export { movieInstance };
