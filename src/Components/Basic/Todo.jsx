import { useState } from "react";

const Todo = () => {
  const [todoInput, setTodoInput] = useState();
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const createTodo = () => {
    // gets the value of the current Todo
    // gets the input value of TodoInput.

    // Push it into todos
    // Input value is stored in the todoInput state variable. And new Todo is enter into the input.
    const newTods = [...todos, todoInput];
    setTodos(newTods);
    // reset the values for todoInput
    setTodoInput("");
    console.log(todos);
  };

  const deleteTodo = (i) => {
    const oldTodo = [...todos];
    oldTodo.splice(i, 1);
    setTodos(oldTodo);
  };

  return (
    <div>
      <html className="h-full">
        <body className="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
          <main className="w-full max-w-md mx-auto p-6">
            <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div className="p-4 sm:p-7">
                <div className="text-center">
                  <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                    Todo
                  </h1>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <a
                      className="text-blue-600 decoration-2 hover:underline font-medium"
                      href="../examples/html/signin.html"
                    >
                      Day To Day Task
                    </a>
                  </p>
                </div>

                <div className="mt-5">
                  {/* <!-- Form --> */}
                  <form>
                    <div className="grid gap-y-4">
                      {/* <!-- Form Group --> */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm mb-2 dark:text-white"
                        >
                          Create A Todo
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="email"
                            name="email"
                            className="py-3 px-4  border-2 border-red-100 focus:caret-indigo-500  block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                            required
                            aria-describedby="email-error"
                            onChange={handleInputChange}
                            value={todoInput}
                          />
                          <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                            <svg
                              className="h-5 w-5 text-red-500"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Form Group --> */}
                      {todos.map((todoName, i) => (
                        <div key={i}>
                          <li>{todoName}</li>
                          <button
                            type="button"
                            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-red-200 font-semibold text-red-500 hover:text-white hover:bg-red-500 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                            onClick={deleteTodo}
                          >
                            Delete
                          </button>
                        </div>
                      ))}

                      <button
                        type="submit"
                        onClick={createTodo}
                        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                      >
                        Todo
                      </button>
                    </div>
                  </form>
                  {/* <!-- End Form --> */}
                </div>
              </div>
            </div>
          </main>
        </body>
      </html>
    </div>
  );
};

export default Todo;
