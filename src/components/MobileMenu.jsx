/* eslint-disable */

import { Link } from "react-router-dom";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 bg-[#2b374d] z-40 flex flex-col items-center justify-center transition-discrete duration-300 ease-in-out
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-black text-3xl focus:outline-none cursor-pointer"
        aria-label="close menu"
      >
        &times;
      </button>

      <Link
        to="/"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-black my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" :"opacity-0 translate-y-5"}`}
      >
        HOME
      </Link>

      <Link 
        to="/portfolio"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-black my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" :"opacity-0 translate-y-5"}`}
      >
        PORTFOLIO
      </Link>
      
    </div>
  );
};
