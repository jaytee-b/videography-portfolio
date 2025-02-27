export const Home = () => {
  return (
    <div id="home" className="relative">
      <section
        className=" flex flex-col items-center justify-center relative min-h-screen
        "
      >
        <div className="text-center z-10 px-4">
          <h1 className="text-2xl md:text-[40px] font-bold mb-6">
            Capturing Emotions, Building Brands
          </h1>
          <p className="text-white text-sm md:text-[16px] max-w-xl mx-auto">
            {" "}
            I am Inioluwa Adeleye, a skilled videographer specializing in
            crafting compelling visual narratives for both corporate and fashion
            brands, bringing stories to life through innovative and stylish
            video production.{" "}
          </p>
          <div className="flex items-center justify-center mt-[24px]">
            <a
              href="#projects"
              className="text-black rounded px-[24px] py-[12px] bg-[#22CD6E] font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] "
            >
              View Projects
            </a>
          </div>
        </div>
      </section>
      {/* Recent works section */}
      <section className="-mt-[140px] flex flex-col items-center justify-center ">
        <div className="flex justify-between items-center  w-full px-8 mb-8">
          <h5 className="w-1/4 md:text-sm text-xs">RECENT WORK</h5>
          <div className="w-3/4 bg-[#303130] h-[1px] "></div>
        </div>
        <a
          href="#home"
          className="relative cursor-pointer transition relative overflow-hidden hover:translate-y-0.5"
        >
          <img src="images/brags1.png" className="w-full " alt="" />
          <div className="absolute bottom-8 left-8 text-gray-100">
            <h2 className="text-2xl font-bold pb-2">Valentine’s Campaign</h2>
            <h3 className="pb-4 text-sm">
              A valentine’s themed campaign for Brags.ng
            </h3>
          </div>
        </a>
        <a
          href=""
          className="text-black rounded px-[24px] py-[12px] bg-[#22CD6E] font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] mt-[24px]"
        >
          View Project →
        </a>
      </section>
    </div>
  );
};
