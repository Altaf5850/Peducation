import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between h-16 text-black px-5 fixed z-50 w-full shadow-md ">
      <div className="flex items-center">
        <div className="text-3xl pt-2 md:font-merienda font-extrabold text-black">
          <h1 className="text-lg">PEDUCATION</h1>
          <h4 className="text-xs underline">ONLINE EDUCATION & LEARNING</h4>
        </div>
      </div>
      <div className="md:hidden ml-16">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? (
            <FaTimes size={25} className="ml-4" />
          ) : (
            <FaBars size={25} />
          )}
        </button>
      </div>
      <div
        className={` md:flex md:items-center md:gap-4 ${
          isOpen ? "block" : "hidden"
        } md:block w-full md:w-auto`}
      >
        <div className="font-merienda font-extrabold pl-8">
          <ul className="flex flex-col pt-64 md:pt-0 md:flex-row gap-3 text-black">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/team">
              <li>Team</li>
            </Link>
            <Link to="/courses">
              <li>Courses</li>
            </Link>
            <Link to="/admissions">
              <li>Admissions</li>
            </Link>
            <Link to="/students">
              <li>Students</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
