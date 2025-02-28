import { Outlet } from "react-router-dom";
import Nav from "./Navigation/Nav";
import Footer from "./Footer/Footer";
import { DataContent } from "../Pages/DataContent";

function MainLayout() {
  return (
    <div>
      <DataContent>
        <Nav />
      </DataContent>
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
