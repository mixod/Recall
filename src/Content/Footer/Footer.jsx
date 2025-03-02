import { useContext } from "react";
import { NewContext } from "../../Pages/DataContent";
import { useStore } from "zustand";

function Footer() {
  const { theme } = useContext(NewContext);
  const { number, increase } = useStore();
  return (
    <div style={{ color: theme.color, backgroundColor: theme.background }}>
      <div>
        Current NUmber:{number}
        <br />
        <button onClick={increase}>Click</button>
      </div>
      Footer
    </div>
  );
}

export default Footer;
