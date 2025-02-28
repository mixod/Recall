import { useContext } from "react";
import { NewContext } from "../DataContent";

function Home() {
  const { state } = useContext(NewContext);
  return (
    <div className="max-w-6xl mx-auto justify-center items-center p-5 px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {state.map((item) => (
          <div key={item.id}>
            <div>
              <img
                src={item.image}
                alt={item.title}
                className=" w-48 h-48 flex mb-2"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
