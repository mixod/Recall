/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from "react";
export const NewContext = createContext();
export function DataContent({ children }) {
  const [state, setState] = useState([]);
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
      <NewContext.Provider value={{ state, setState }}>
        {children}
      </NewContext.Provider>
    </div>
  );
}
