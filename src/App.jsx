import React from "react";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Content/MainLayout";
import { DataContent } from "./Pages/DataContent";
import MainRoute from "./Pages/Home/Routing/MainRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <DataContent>
                <Home />
              </DataContent>
            }
          />
          <Route
            path="/home"
            element={
              <DataContent>
                <Home />
              </DataContent>
            }
          />
          <Route path="/home/:id" element={<MainRoute />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
