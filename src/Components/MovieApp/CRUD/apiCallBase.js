// API URL for the User
const users = "https://dummyjson.com/users";

// Get all users
const getUsers = async () => {
  const response = await fetch(users);
  const usersData = await response.json();
  return usersData;
};
getUsers();

// Create a new user
const createUser = async (usersData) => {
  const response = await fetch(`${users}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usersData),
  });
  const createdUsers = await response.json();
  return createdUsers;
};

createUser();
// createUser({
//     "id": 101,
//     "firstName": "Muhammad",
//     "lastName": "Ovi",
//     "age": 250,
//     /* other user data */
//   });

// Update or Edit a new user
const updateUser = async (userId, usersData) => {
  const response = await fetch(`${users}/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usersData),
  });
  const editUsers = await response.json();
  return editUsers;
};
updateUser();
// updateUser(1, {
//     "id": 101,
//     "firstName": "Muhammad",
//     "lastName": "Ovi",
//     "age": 250,
//     /* other user data */
//   });

// Delete or Edit a new user
const deleteUser = async (userId) => {
  const response = await fetch(`${users}/${userId}`, {
    method: "DELETE",
  });
  const deleteUsers = await response.json();
  return deleteUsers;
};
deleteUser();

// deleteUser(1);
