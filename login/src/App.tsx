import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/login/login";
import Users from "./Pages/users/user";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline></CssBaseline>
      <main>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/users" element={<Users></Users>}></Route>
          </Routes>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
