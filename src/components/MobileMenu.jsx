/* eslint-disable */

export const MobileMenu = ( {menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 bg-[#22CD6E] z-40 flex flex-col items-center justify-center transition-discrete duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto": "h-0 opacity-0 pointer-events-none"}`}
    >

        <button onClick={()=>setMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
            aria-label="close menu">
            &times;
        </button>
        
            <a
              href="#home"
              onClick={() =>setMenuOpen(false)}
              className="text-black hover:text-black hover:border-b hover:border-[#22CD6E] mb-4 "
            >
              HOME
            </a>
           
            <a
              href="#portfolio"
              onClick={() =>setMenuOpen(false)}
              className="text-black hover:text-black hover:border-b hover:border-[#22CD6E] hover:border-b-2 mb-4"
            >
              PORTFOLIO
            </a>
            <a
              href="#about"
              onClick={() =>setMenuOpen(false)}
              className="text-black hover:text-black hover:border-b hover:border-[#22CD6E] mb-4"
            >
              ABOUT
            </a>
            <a
              href="#contact"
              onClick={() =>setMenuOpen(false)}
              className="text-black hover:text-black hover:border-b hover:border-[#22CD6E] mb-4"
            >
              CONTACT
            </a>
          






    </div>
  );
};
