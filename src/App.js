import { useState } from "react";
import "./App.css";
import Homepage from "./components/homepage/Homepage";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function App() {
  const [login, setLogin] = useState(false);
  let navigate = useNavigate();

  function handleLogin() {
    setLogin(true);
    navigate("/");
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          login ? (
            <Homepage />
          ) : (
            <Login handleLogin={handleLogin} navigate={navigate} />
          )
        }
      ></Route>
      <Route
        path="/login"
        element={<Login handleLogin={handleLogin} navigate={navigate} />}
      ></Route>
      <Route
        path="/register"
        element={<Register navigate={navigate} />}
      ></Route>
    </Routes>
  );
}

export default App;
