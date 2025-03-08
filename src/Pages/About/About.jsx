import { useContext } from "react";
import { NewContext } from "../DataContent";

function About() {
  const { theme } = useContext(NewContext);
  return (
    <>
      <div
        className="text-2xl"
        style={{ color: theme.color, backgroundColor: theme.background }}
      >
        About
      </div>
      <div
        className="text-2xl"
        style={{ color: theme.color, backgroundColor: theme.background }}
      >
        About
      </div>
    </>
  );
}

export default About;
