import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";

const getFunction = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};
function TanStack() {
  const { data } = useQuery({ queryKey: ["id"], queryFn: getFunction });
  return (
    <div className="grid grid-cols-3 justify-center items-center max-w-6xl mx-auto">
      {data?.map((item) => (
        <div key={item.id}>
          <div>
            <img
              src={item.image}
              alt={item.title}
              className=" w-48 h-48 flex mb-2"
            />
            <NavLink to={"/home/" + item.id}>
              <h2>{item.title}</h2>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TanStack;
