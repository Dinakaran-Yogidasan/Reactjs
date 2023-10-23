import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const email = "devdanny28@proton.me";
const password = "Dannydina28";

const Login = () => {
  const dispatch = useDispatch();
  const loginReducer = useSelector((state) => state.loginReducer);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    if (formData.email === email && formData.password === password) {
      alert("User Logged in Successfully");
      dispatch({
        type: "user_login",
        data: {
          name: "Dinakaran",
          role: "ReactJs Developer",
          email: email,
          password: password,
        },
      });
      <Navigate to={"/counter"} replace />;
    } else {
      alert("Invalid UserName or Password");
    }
  };

  if (loginReducer.isLoggedIn) {
    <Navigate to={"/counter"} replace />;
  }
  const handleLogOut = () => {
    dispatch({ type: "user_logut" });
  };

  return (
    <>
      <div className="h-full">
        <div className="flex h-full items-center py-16">
          <div className="w-full max-w-md mx-auto p-6">
            <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div className="p-4 sm:p-7">
                <div className="text-center">
                  <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                    Sign in
                  </h1>
                </div>

                <div className="mt-5">
                  {/* <!-- Form --> */}
                  <div className="grid gap-y-4">
                    {/* <!-- Form Group --> */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm mb-2 dark:text-white"
                      >
                        Email address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="py-3 px-4 block border border-gray-200 w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                          required
                          aria-describedby="email-error"
                          onChange={handleChange}
                          value={formData.email}
                        />
                      </div>
                    </div>
                    {/* <!-- End Form Group --> */}

                    {/* <!-- Form Group --> */}
                    <div>
                      <div className="flex justify-between items-center ">
                        <label
                          htmlFor="password"
                          className="block  text-sm mb-2 dark:text-white"
                        >
                          Password
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="py-3 px-4 border border-gray-200 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                          required
                          aria-describedby="password-error"
                          onChange={handleChange}
                          value={formData.password}
                        />
                      </div>
                    </div>
                    {/* <!-- End Form Group --> */}

                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                      Sign in
                    </button>
                    <button
                      type="submit"
                      onClick={handleLogOut}
                      className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                      Log Out
                    </button>
                  </div>
                  {/* <!-- End Form --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
