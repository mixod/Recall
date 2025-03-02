import { useContext } from "react";
import { NewContext } from "../DataContent";
import { NavLink } from "react-router-dom";

function Home() {
  const { state, theme } = useContext(NewContext);
  return (
    <div
      style={{
        color: theme.color,
        background: theme.background,
        height: "100%",
        width: "100%",
      }}
    >
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
                <NavLink to={"/home/" + item.id}>
                  <h2>{item.title}</h2>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
