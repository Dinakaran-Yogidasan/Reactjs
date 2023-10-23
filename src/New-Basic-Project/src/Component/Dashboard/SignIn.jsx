import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect, useRef, useState } from "react";
import api from "../../api/api";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import TopBar from "./TopBar";
import { toast } from "react-toastify";
import { VisibilityOff } from "@mui/icons-material";
import Visibility from "@mui/icons-material/Visibility";
import { IconButton, InputAdornment } from "@mui/material";
import { red } from "@mui/material/colors";

export default function SignIn({ formData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const handleClickShowPassword = () => setshowPassword((show) => !show);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email) {
      return setError(" Required");
    }
    if (!password) {
      return setError("Password is Required");
    }
    try {
      const response = await api.get("/user", email, password);
      const existingUser = response.data.find(
        (user) => user.email === email && user.password === password
      );
      if (existingUser) {
        // Existing user:    to dashboard or perform desired action
        console.log(
          "Existing user: Navigate to dashboard or perform desired action"
        );
        navigate("/dashboard");
      } else {
        // New user: Redirect to SignUp page or perform desired action
        console.log(
          "New user: Redirect to SignUp page or perform desired action"
        );
        navigate("/signUp");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <TopBar />
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            px: 4,
            py: 6,
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
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
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
            <Box color="red">{error}</Box>

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <Box color="red">{error}</Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link variant="body2" to={"/SignUp"}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
