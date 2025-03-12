import { RevealOnScroll } from "../RevealOnScroll";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="min-h-screen">
      <RevealOnScroll>
        <div className="flex justify-between items-center  w-full px-8  mt-40 mb-8">
          <h5 className="w-1/4 md:text-sm text-xs">SELECTED WORKS</h5>
          <div className="w-3/4 bg-[#303130] h-[1px] "></div>
        </div>

        <div className="flex  gap-x-4 gap-y-20 px-8 grid grid-cols-2 md:grid-cols-3">
          <div className="relative  w-full h-full cursor-pointer ">
            <img
              src="images/burger1.png"
              alt=""
              className=" z-20 w-full h-full object-cover opacity-80 hover:opacity-100 "
            />
            <div className="absolute justify-center items-center mt-2 ">
              <h3 className="md:text-sm text-xs">
                Brags.ng
                <span className=" pl-2 text-gray-500">Ads Campaign</span>
              </h3>
            </div>
          </div>

          <div className="relative  w-full h-full cursor-pointer">
            <img
              src="images/feyi.png"
              className=" z-20 w-full h-full object-cover opacity-80 hover:opacity-100 "
              alt=""
            />
            <div className="absolute  justify-center items-center mt-2">
              <h3 className="md:text-sm text-xs">
                Brags.ng
                <span className=" pl-2 text-gray-500">Ads Campaign</span>
              </h3>
            </div>
          </div>

          <div className="relative  w-full h-full cursor-pointer">
            <img
              src="images/adex.png"
              className=" z-20 w-full h-full object-cover opacity-80 hover:opacity-100 "
              alt=""
            />
            <div className="absolute  justify-center items-center mt-2">
              <h3 className="md:text-sm text-xs">
                Brags.ng
                <span className=" pl-2 text-gray-500">Ads Campaign</span>
              </h3>
            </div>
          </div>

          <div className="relative  w-full h-full cursor-pointer">
            <img
              src="images/adex.png"
              className=" z-20 w-full h-full object-cover opacity-80 hover:opacity-100 "
              alt=""
            />
            <div className="absolute  justify-center items-center mt-2">
              <h3 className="md:text-sm text-xs">
                Brags.ng
                <span className=" pl-2 text-gray-500">Ads Campaign</span>
              </h3>
            </div>
          </div>

          <div className="relative  w-full h-full cursor-pointer">
            <img
              src="images/adex.png"
              className=" z-20 w-full h-full object-cover opacity-80 hover:opacity-100 "
              alt=""
            />
            <div className="absolute  justify-center items-center mt-2">
              <h3 className="md:text-sm text-xs">
                Brags.ng
                <span className=" pl-2 text-gray-500">Ads Campaign</span>
              </h3>
            </div>
          </div>

          <div className="relative  w-full h-full cursor-pointer">
            <img
              src="images/adex.png"
              className=" z-20 opacity-80 hover:opacity-100 "
              alt=""
            />
            <div className="absolute  justify-center items-center mt-2">
              <h3 className="md:text-sm text-xs">
                Brags.ng
                <span className=" pl-2 text-gray-500">Ads Campaign</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-20 flex items-center justify-center">
        <a
              href="#projects"
              className="text-black rounded px-[24px] py-[12px] bg-[#22CD6E] font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)]
            "
            >
              View All
            </a>
        </div>
      </RevealOnScroll>
    </section>
  );
};
