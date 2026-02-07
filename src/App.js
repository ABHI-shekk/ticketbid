import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  // const isLoggedIn = true; // replace with real auth later

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={<Home />}
      />
    </Routes>
  );
}

export default App;