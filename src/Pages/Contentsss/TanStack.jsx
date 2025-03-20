import { useQuery } from "@tanstack/react-query";
import { Button } from "antd";
import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";

const getFunction = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};
// const postFunction = async (productData) => {
//   const { data } = await axios.post(
//     "https://fakestoreapi.com/products",
//     productData
//   );
//   return data;
// };

function TanStack() {
  const { data } = useQuery({ queryKey: ["id"], queryFn: getFunction });
  // const mutation = useMutation({
  //   mutationFn: postFunction,
  //   onSuccess: (res) => {
  //     console.log("respo", res);
  //   },
  //   onError: (error) => {
  //     console.log(error);
  //   },
  // });

  // const handleSubmit = () => {
  //   const productData = {
  //     title: "dnckdscs",
  //     price: "15",
  //     description: "jkafvf vaflvjfv oacfvlsv aj ",
  //     image: "fvdblfdhvb ",
  //     category: "sdahvjs",
  //   };
  //   mutation.mutate(productData);
  // };
  return (
    <div className="grid grid-cols-3 justify-center items-center max-w-6xl mx-auto">
      <div>
        <Button>CLickkk</Button>
      </div>
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
