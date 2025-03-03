import React from "react";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Content/MainLayout";
import MainRoute from "./Pages/Home/Routing/MainRoute";
import Register from "./Protected/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" element={<MainRoute />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
