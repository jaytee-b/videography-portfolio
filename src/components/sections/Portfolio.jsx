export const Portfolio = () => {
  return (
    <section id="portfolio" className="min-h-screen">
      <div className="flex justify-between items-center  w-full px-8 mb-8">
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
              Brags.ng<span className=" pl-2 text-gray-500">Ads Campaign</span>
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
              Brags.ng<span className=" pl-2 text-gray-500">Ads Campaign</span>
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
              Brags.ng<span className=" pl-2 text-gray-500">Ads Campaign</span>
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
              Brags.ng<span className=" pl-2 text-gray-500">Ads Campaign</span>
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
              Brags.ng<span className=" pl-2 text-gray-500">Ads Campaign</span>
            </h3>
          </div>
        </div>

        <div className="relative  w-full h-full cursor-pointer">
          <img src="images/adex.png" className=" z-20 opacity-80 hover:opacity-100 " alt="" />
          <div className="absolute  justify-center items-center mt-2">
            <h3 className="md:text-sm text-xs">
              Brags.ng<span className=" pl-2 text-gray-500">Ads Campaign</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
