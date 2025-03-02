import { useContext } from "react";
import { NewContext } from "../../Pages/DataContent";

function Footer() {
  const { theme } = useContext(NewContext);
  return (
    <div style={{ color: theme.color, backgroundColor: theme.background }}>
      Footer
    </div>
  );
}

export default Footer;
