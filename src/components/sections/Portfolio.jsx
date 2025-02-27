export const Portfolio = () => {
  return (
    <section id="portfolio" className="min-h-screen">
      <div className="flex justify-between items-center  w-full px-8 mb-8">
        <h5 className="w-1/4 md:text-sm text-xs">SELECTED WORKS</h5>
        <div className="w-3/4 bg-[#303130] h-[1px] "></div>
      </div>
      <div className="flex space-x-4 mt-20 px-8">
        <div className="relative ">
          <img src="images/burger1.png" alt="" className="rounded-xl z-20" />
          <div className="absolute bottom-4 left-4">
            <h3 className="absolute bottom-4 left-4 text-black">Brags</h3>
            <p>Campaign for Brand</p>
          </div>
        </div>

        <div className="relative ">
          <img src="images/feyi.png" className="rounded-xl z-20" alt="" />
          <div className="absolute bottom-4 left-4">
            <h3 className="absolute bottom-4 left-4 text-black">Brags</h3>
            <p>Campaign for Brand</p>
          </div>
        </div>

        <div className="relative ">
          <img src="images/adex.png" className="rounded-xl z-20" alt="" />
          <div className="absolute bottom-4 left-4">
            <h3 className=" text-black">Brags</h3>
            <p>Campaign for Brand</p>
          </div>
        </div>
      </div>
    </section>
  );
};
