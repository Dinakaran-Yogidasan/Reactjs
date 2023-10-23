import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { VisibilityOff } from "@mui/icons-material";
import Visibility from "@mui/icons-material/Visibility";
import { IconButton, InputAdornment } from "@mui/material";
import api from "../../api/api";
import { useNavigate } from "react-router";

const Login = () => {
  // Checking the username AND password using on state object
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });
  // Handling Api errors
  const [error, setError] = useState(null);
  // Handling Loading state
  const [loading, setLoading] = useState(false);
  // Toogle open and close password
  const [showPassword, setshowPassword] = useState(false);
  const handleClickShowPassword = () => setshowPassword((show) => !show);

  // navigate to different pages
  const navigate = useNavigate();

  // Handling the inputChange with name and value fields.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Api call for login verify with dummyjson server using axios.
  const loginVerify = async () => {
    try {
      const response = await api.post("/auth/login", userLogin);
      setLoading(false);
      setUserLogin(response.data);
      console.log(response.data);
      localStorage.setItem("stringify", JSON.stringify(response));
      localStorage.setItem("Mytoken", response.data.token);
      navigate("/dashboard"); //navigate to dashboard page
    } catch (error) {
      setLoading(false);
      if (error.response.status === 400) {
        setError(error.response.data.message); // getting error from backend and store it in state.
      } else {
        setError("Please try again later.");
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);
    loginVerify(); // calling the api while submit.
    setUserLogin(""); // reset the state to empty.
  };
  return (
    <>
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            px: 4,
            py: 6,
            marginTop: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {/* // Display the error message. */}
          <Typography component="h1" variant="h6" sx={{ color: "red" }}>
            {error && error}
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              variant="outlined"
              value={userLogin.username || ""}
              onChange={handleChange}
              type="text"
              autoComplete="username"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              value={userLogin.password || ""}
              onChange={handleChange}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {!showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
              value={loading ? "Loading..." : "Login"}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
      <div>
        <h4>kminchelle</h4>
        <h4>0lelplR</h4>
      </div>
    </>
  );
};

export default Login;
