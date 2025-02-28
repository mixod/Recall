/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from "react";
export const NewContext = createContext();

const themes = {
  Light: {
    color: "black",
    background: "white",
  },
  Dark: {
    color: "white",
    background: "black",
  },
};
export function DataContent({ children }) {
  const [state, setState] = useState([]);
  const [theme, setTheme] = useState(themes.Light);
  const toggleTheme = () => {
    theme === themes.Light ? setTheme(themes.Dark) : setTheme(themes.Light);
  };
  async function fetchdata() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setState(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      <NewContext.Provider
        value={{ state, setState, theme, setTheme, toggleTheme }}
      >
        {children}
      </NewContext.Provider>
    </div>
  );
}
