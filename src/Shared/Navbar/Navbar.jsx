import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar  z-10 bg-[#07332F] text-white px-5 lg:px-28 xl:px-40">
      <div className="flex-1 py-3 md:py-6">
        <Link>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="flex-none">
        <div className="flex items-center justify-between md:hidden">
          {isMenuOpen ? (
            <div className="">
              <ul className="p-5 space-y-2 absolute  left-0 top-20 w-full flex flex-col px-1">
                <li className="inline-block py-2 px-4 rounded-lg w-auto">
                  <Link to="/">Home</Link>
                </li>
                <li className="inline-block  py-2 px-4 rounded-lg w-auto">
                  <Link>About</Link>
                </li>
                <li className="inline-block  py-2 px-4 rounded-lg w-auto">
                  <Link>Appointment</Link>
                </li>
                <li className="inline-block  py-2 px-4 rounded-lg w-auto">
                  <Link>Login</Link>
                </li>
              </ul>
            </div>
          ) : null}
          <button
            type="button"
            className="hamburger-menu z-10"
            onClick={handleMenuClick}
          >
            {isMenuOpen ? (
              <HiXMark className="h-6 w-6 text-white flex items-center justify-center"></HiXMark>
            ) : (
              <span>
                <HiBars3 className="h-6 w-6 text-white flex items-center justify-center"></HiBars3>
              </span>
            )}
          </button>
        </div>
        <div className="flex-none hidden md:block">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link>Abdfadout</Link>
            </li>
            <li>
              <Link>Appointment</Link>
            </li>
            <li>
              <Link>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
