import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import lightmode from "./brightness.png";
import darkmode from "./night-mode.png";
import Notecontext from "../../Context/Notes/Notecontext";

const Navigation = () => {
 
  const value = useContext(Notecontext)
  const { loggedin, setloggedin } = useContext(Notecontext);
  const navigate = useNavigate();
  const [show, setshow] = useState(true);
  const [dark, setdark] = useState();


  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setdark(false);
      return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setdark(true);
  };

  const onclickhandler = () => {
    setshow(!show);
  };
  const onlogouthandler = () => {
    setloggedin(false);
    navigate("/");
    value.setverified(false)
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap dark:bg-gray-800  dark:text-white pt-4 lg:py-3 lg:px-12 ">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2  border-gray-300 pb-5 lg:pb-0">
          <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
            <span className="font-semibold text-xl tracking-tight dark:text-white">
              Vaibhav Mohanalkar
            </span>
          </div>

          <div className="lg:hidden flex space-x-4 items-center justify-center ">
            <span className=" lg:hidden cursor-pointer " onClick={themeSwitch}>
              <img
                alt="light and dark mode toggle here"
                className={`h-6 w-6 ${dark ? "invert" : "invert-0"}`}
                src={dark ? lightmode : darkmode}
              />
            </span>
            <div className="block lg:hidden ">
              <button
                onClick={onclickhandler}
                id="nav"
                className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
              >
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {show && (
          <div className="menu w-full  flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
            <div className="text-md font-bold text-blue-700 lg:flex-grow dark:text-white flex flex-col justify-center items-center lg:flex-row  lg:justify-start">
              <Link
                href="#responsive-header"
                className="block  mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
                to="/"
              >
                Home
              </Link>
              <Link
                href="#responsive-header"
                className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
                to="/blogs"
              >
                Blogs
              </Link>
              {loggedin && (
                <Link
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
                  to="/BLogSubmitForm"
                >
                  Add new
                </Link>
              )}
              {!loggedin && (
                <button
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-gray-700 mr-2"
                  onClick={() => {
                    alert("Login or Register to add blog");
                  }}
                >
                  Add new
                </button>
              )}
              <Link
                href="#responsive-header"
                className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
                to="/Projects"
              >
                Projects
              </Link>
            </div>

            <div className="relative mx-auto text-gray-600 lg:block hidden">
              <input
                className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-3 mr-2 animate-bounce"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
              </button>
            </div>
            {!loggedin && (
              <div className="flex lg:justify-center justify-center">
                <Link
                  to="/Auth/Login"
                  className="dark:text-white block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
                >
                  Sign in
                </Link>
              </div>
            )}
            {loggedin && (
              <div className="flex lg:justify-center cursor-pointer">
                <span
                  onClick={onlogouthandler}
                  className=" dark:text-white block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
                >
                  Logout
                </span>
              </div>
            )}
            <span
              className="lg:flex lg:items-center cursor-pointer invisible lg:visible"
              onClick={themeSwitch}
            >
              <img
                alt="light and dark mode toggle here"
                className={`h-6 w-6 ${dark ? "invert" : "invert-0"}`}
                src={dark ? lightmode : darkmode}
              />
            </span>
          </div>
        )}
      </nav>
    </>
  );
};
export default Navigation;
