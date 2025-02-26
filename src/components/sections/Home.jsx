export const Home = () => {
  return (
    <div className="relative">
      <section
        id="#home"
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
      <section id="#home" className="flex justify-center relative ">
        <div className="-mt-[80px] flex items-center justify-center">
          <div className="border border-[#1A2F2C] max-w-3xl mx-auto px-4 flex justify-between items-center ">
            <div>
              <h4>Recent Works</h4>
              <h1>Valentine’s Campaign</h1>
              <p>A valentine’s themed campaign for Brags.ng</p>
              <a href="">View Project</a>
            </div>
            <div>
              <img src="images/recent-project.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
