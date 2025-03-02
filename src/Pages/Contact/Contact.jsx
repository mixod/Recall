import { useContext } from "react";
import { NewContext } from "../DataContent";

function Contact() {
  const { theme } = useContext(NewContext);
  return (
    <div
      className="text-3xl "
      style={{ color: theme.color, backgroundColor: theme.background }}
    >
      Contact
    </div>
  );
}

export default Contact;
