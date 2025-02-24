import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleNavClick = (id, title) => {
    setActive(title);
    setToggle(false);

    let element;
    if (id === "contact") {
      element = document.querySelector("footer");
    } else if (id === "work") {
      element = document.querySelector("#experience");
    } else {
      element = document.querySelector(`#${id}`);
    }

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 backdrop-blur-md bg-white/70 shadow-sm`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="text-3xl font-bold text-blue-600">ht</div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-blue-600" : "text-gray-800"
              } hover:text-blue-400 text-lg font-medium 
                uppercase tracking-[3px] cursor-pointer transition-colors`}
              onClick={() => handleNavClick(nav.id, nav.title)}
            >
              <span>{nav.title}</span>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            className="text-gray-800 p-2"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 w-screen h-screen bg-white transform transition-transform duration-300 ease-in-out ${
              toggle ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end p-6">
              <button
                className="text-gray-800"
                onClick={() => setToggle(!toggle)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col items-center justify-center h-full gap-8 -mt-20">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-blue-600" : "text-gray-800"
                  } text-4xl font-medium uppercase tracking-wider cursor-pointer`}
                  onClick={() => handleNavClick(nav.id, nav.title)}
                >
                  <span>{nav.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
