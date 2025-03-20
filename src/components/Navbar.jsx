/* eslint-disable */
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen])
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.2)] backdrop-blur-sm ">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <a href="/" className=" text-xl font-bold text-white">
            INIOLUWA ADELEYE
          </a>

          {/* mobile menu */}
          <div className="w-9 h-7 relative cursor-pointer z-40 text-2xl md:hidden"
          onClick={()=>setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>
          {/* desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white hover:border-b hover:border-[#22CD6E]"
            >
              HOME
            </Link>
            
            {/* <a
              href="#about"
              className="text-gray-300 hover:text-white hover:border-b hover:border-[#22CD6E]"
            >
              ABOUT
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white hover:border-b hover:border-[#22CD6E]"
            >
              CONTACT
            </a> */}
            <Link
              to="/portfolio"
              className="text-gray-300 hover:text-white hover:border-b hover:border-[#22CD6E]"
            >
              PORTFOLIO
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
