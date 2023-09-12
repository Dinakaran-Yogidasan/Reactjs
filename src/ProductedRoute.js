import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const ProductedPage = (path, element) => {
  const loginReducer = useSelector((state) => state.loginReducer);
  if (loginReducer.isLoggedIn) {
    element;
  } else {
    // <Navigate to={"/login"} replace></Navigate>;
  }
};

export default ProductedPage;
