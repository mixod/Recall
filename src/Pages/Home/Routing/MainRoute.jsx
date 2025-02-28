import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MainRoute() {
  const param = useParams();
  const [state, setState] = useState([]);
  async function fetchSingleData() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log("aaa:", data);
      setState(data);
    } catch (error) {
      console.log(error);
    }
  }
  const filterdatas = state.filter((item) => item.id === param.id);
  console.log(filterdatas);
  if (filterdatas === 0) {
    alert("there is no data in the array");
  }
  const filterdata = filterdatas[0];
  useEffect(() => {
    fetchSingleData();
  }, []);
  return (
    <div>
      {filterdata && (
        <div>
          <img
            src={filterdata.image}
            alt={filterdata.title}
            className=" w-48 h-48 flex mb-2"
          />
          <h1>{filterdata.title}</h1>
        </div>
      )}
    </div>
  );
}

export default MainRoute;
