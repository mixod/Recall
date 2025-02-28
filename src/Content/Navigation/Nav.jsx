import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
function Nav() {
  const [ShowMediaIcons, setShowMediaIcons] = useState(false);
  const handleMenuClick = () => {
    setShowMediaIcons(false);
  };
  return (
    <>
      <div className="bg-gray-100 shadow shadow-gray-200 h-10">
        <div
          className={
            ShowMediaIcons
              ? " flex flex-col flex-wrap justify-center align-center h-10  top-14 fixed w-full lg:static"
              : "hidden lg:flex justify-end"
          }
        >
          <ul className="flex justify-center gap-10 max-w-6xl mx-auto p-4 ">
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
          </ul>
        </div>
        <div className="flex lg:hidden p-5 justify-end ">
          <div onClick={() => setShowMediaIcons(!ShowMediaIcons)}>
            <GiHamburgerMenu className="fixed" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
