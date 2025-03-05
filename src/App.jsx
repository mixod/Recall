import React from "react";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Content/MainLayout";
import MainRoute from "./Pages/Home/Routing/MainRoute";
import Register from "./Protected/Register";
import Login from "./Protected/Login";
import ProtectedRoute from "./Protected/ProtectedRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/:id" element={<MainRoute />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Route>
      </Routes>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
