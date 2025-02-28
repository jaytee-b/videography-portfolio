export const Portfolio = () => {
  return (
    <section id="portfolio" className="min-h-screen">
      <div className="flex justify-between items-center  w-full px-8 mb-8">
        <h5 className="w-1/4 md:text-sm text-xs">SELECTED WORKS</h5>
        <div className="w-3/4 bg-[#303130] h-[1px] "></div>
      </div>
      <div className="flex  gap-x-4 gap-y-12 px-8 grid grid-cols-2 md:grid-cols-3">

        <div className="relative  w-full h-full ">
          <img src="images/burger1.png" alt="" className="rounded-lg z-20 w-full h-full object-cover" />
          <div className="absolute ">
            <h3 className="text-black">Brags</h3>
            <p>Campaign for Brand</p>
          </div>
        </div>

        <div className="relative  w-full h-full ">
          <img src="images/feyi.png" className="rounded-lg z-20 w-full h-full object-cover" alt="" />
          <div className="absolute ">
            <h3 className="absolute  text-black">Brags</h3>
            <p>Campaign for Brand</p>
          </div>
        </div>

        <div className="relative  w-full h-full ">
          <img src="images/adex.png" className="rounded-lg z-20 w-full h-full object-cover" alt="" />
          <div className="absolute ">
            <h3 className=" text-black">Brags</h3>
            <p>Campaign for Brand</p>
          </div>
        </div>

        <div className="relative  w-full h-full ">
          <img src="images/adex.png" className="rounded-lg z-20 w-full h-full object-cover" alt="" />
          <div className="absolute ">
            <h3 className=" text-black">Brags</h3>
            <p>Campaign for Brand</p>
          </div>
        </div>

        <div className="relative  w-full h-full ">
          <img src="images/adex.png" className="rounded-lg z-20 w-full h-full object-cover" alt="" />
          <div className="absolute ">
            <h3 className=" text-black">Brags</h3>
            <p>Campaign for Brand</p>
          </div>
        </div>


        <div className="relative  w-full h-full  ">
          <img src="images/adex.png" className="rounded-lg z-20  " alt="" />
          <div className="absolute ">
            <h3 className=" text-black">Brags</h3>
            <p>Campaign for Brand</p>
          </div>
        </div>
      </div>
    </section>
  );
};
