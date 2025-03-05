import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { NewContext } from "../../Pages/DataContent";
import { FaAffiliatetheme } from "react-icons/fa";
import { Button, Popconfirm } from "antd";

function Nav() {
  const { theme, toggleTheme } = useContext(NewContext);
  const [ShowMediaIcons, setShowMediaIcons] = useState(false);
  const handleMenuClick = () => {
    setShowMediaIcons(false);
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <div>
        <div
          className=" h-10"
          style={{
            color: theme.color,
            background: theme.background,
            height: "100%",
            width: "100%",
          }}
        >
          <div
            className={
              ShowMediaIcons
                ? " flex flex-col flex-wrap justify-center align-center h-50 lg:h-10  top-9 fixed w-fixed px-10 lg:static bg-blue-300"
                : "hidden lg:flex justify-end"
            }
          >
            <div className="flex"></div>
            <ul className="flex flex-col lg:flex-row justify-center gap-3 lg:gap-10 max-w-6xl mx-auto p-1 lg:p-4">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-amber-500" : ""
                  }
                  onClick={handleMenuClick}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-amber-500" : ""
                  }
                  onClick={handleMenuClick}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-amber-500" : ""
                  }
                  onClick={handleMenuClick}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <button onClick={toggleTheme}>
                  <FaAffiliatetheme />
                </button>
              </li>
              <li>
                <Popconfirm
                  title="logout"
                  description="Are you sure to logout?"
                  onConfirm={logout}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button>Logout</Button>
                </Popconfirm>
              </li>
            </ul>
          </div>
          <div className="flex lg:hidden p-5 justify-end ">
            <div onClick={() => setShowMediaIcons(!ShowMediaIcons)}>
              <GiHamburgerMenu className="fixed" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
