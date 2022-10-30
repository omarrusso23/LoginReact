//React Imports
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn, log } from "../../redux/slices/login/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = () => {
    console.log(email, password);
    dispatch(signIn({ email, password }));
    console.log(log);
    if (log) {
      navigate("/users");
    }
  };

  return (
    <div className="login">
      <div className="flex">
        <form className="form-login">
          <label>EMAIL</label>
          <input
            type="email"
            className="Email"
            autoComplete="on"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          ></input>
          <label>Password</label>
          <input
            type="password"
            className="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          ></input>
        </form>
        <button className="btn-Login" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
