import { Link } from "react-router-dom";
import { RevealOnScroll } from "../RevealOnScroll";
import { Contact } from "./Contact";
import { About } from "./About";
import { useState } from "react";

export const Home = () => {
  const [showVideo, setShowVideo] =useState(false);
  const videoId = "sXkLDCalF1Q"
  return (
    <div id="home" className="relative">
      <RevealOnScroll>
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
            <Link
              to="/portfolio"
              className="text-black rounded px-[24px] py-[12px] bg-[#22CD6E] font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] "
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>




      {/* Recent work section */}
      <section className="-mt-[140px] flex flex-col items-center justify-center">
          <div className="flex justify-between items-center w-full px-8 mb-8">
            <h5 className="w-1/4 md:text-sm text-xs">RECENT WORK</h5>
            <div className="w-3/4 bg-[#303130] h-[1px]"></div>
          </div>

          <div className="w-full relative cursor-pointer transition hover:translate-y-0.5"
                onMouseEnter={() => setShowVideo(true)}
                onMouseLeave={() => setShowVideo(false)}>
            {!showVideo ? (
              <div className="transition duration-500 opacity-100 cursor-pointer">
                <img 
                  src="images/brags1.png" 
                  className="w-full" 
                  alt="Valentine's Campaign Thumbnail" 
                />
                <div className="absolute bottom-8 left-8 text-gray-100">
                  <h2 className="text-2xl font-bold pb-2">Valentine’s Campaign</h2>
                  <h3 className="pb-4 text-sm">
                    A valentine’s themed campaign for Brags.ng
                  </h3>
                </div>
              </div>
            ) : (
              <iframe
                className="w-full aspect-video cursor-pointer"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>

          <button
            onClick={() => setShowVideo(!showVideo)}
            className="text-black rounded px-[24px] py-[12px] bg-[#22CD6E] font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] mt-[24px] block md:hidden"
          >
            {showVideo ? 'Hide Video' : 'View Project →'}
          </button>
        </section>

      <section id="about" className="min-h-screen">
          <About />
        </section>

        
        <section id="contact" className="min-h-screen -mt-[420px]">
          <Contact />
          </section>

      </RevealOnScroll>
    </div>
  );
};
