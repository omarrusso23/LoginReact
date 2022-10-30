//React Imports
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signIn, log } from "../../redux/slices/login/authSlice";
import { useNavigate } from "react-router-dom";
import "./login.css";
//MUI Imports
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function Login() {
  useEffect(() => {
    document.title = "Login";
  });
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = () => {
    console.log(email, password);
    //Me daba un error con typescript el cual después de 6 horas no he conseguido arreglar es por eso que este archivo es js
    //pero con ts todo funciona excepto esto
    dispatch(signIn({ email, password })); //Error con ts--> Argument of type 'AsyncThunkAction<any, void, {}>' is not assignable to parameter of type 'AnyAction'.ts(2345)
    console.log(log);
    if (log) {
      navigate("/users");
    }
  };

  return (
    <React.Fragment>
      <Container component="main" maxWidth={false}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              type="email"
              className="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              className="Password"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
              className="btnLogin"
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Login;
