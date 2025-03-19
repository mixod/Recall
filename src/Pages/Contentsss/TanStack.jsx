import axios from "axios";
import React from "react";

const getFunction = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};
function TanStack() {
  return (
    <div className="flex justify-center items-center max-w-6xl mx-auto">
      TanStack
    </div>
  );
}

export default TanStack;
