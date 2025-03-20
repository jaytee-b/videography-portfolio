import { useNavigate, useParams } from "react-router-dom";
import { getNextPagePath, getPrevPagePath } from "../utils/pages";
import { RevealOnScroll } from "./RevealOnScroll";

export const VideoPage = () => {
    const {videoId} = useParams()
    const navigate = useNavigate()
    const handleBackToPortfolio = () => {
      navigate("/portfolio")
    }
    const path = `/video/${videoId}`

    const handlePrevPage = () => {
      navigate(getPrevPagePath(path))
    }

    const handleNextPage = () => {
      navigate(getNextPagePath(path))
    }
  return (
    <RevealOnScroll>
    <div className="flex  flex-col items-center justify-center min-h-screen mt-40">
      
    <div className="flex justify-between items-center  w-full px-8  mt-40 mb-8">
          <h5 className="w-1/4 md:text-sm text-xs">YOUTUBE VIDEO</h5>
          <div className="w-3/4 bg-[#303130] h-[1px] "></div>
        </div>

      <iframe className="w-full max-w-4xl aspect-video"
        title="Youtube video player"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

<div className="flex justify-between mt-4 mb-8">
        <button onClick={handlePrevPage}
        className="text-[#22CD6E] rounded px-[24px] py-[12px]  font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)]">
          &lt; Previous
        </button>

        <button onClick={handleNextPage}
        className="text-[#22CD6E] rounded px-[24px] py-[12px]  font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)]">
           Next &gt;
        </button>

      </div>
      <div className="mt-20 flex items-center justify-center">
        <button  className="text-black rounded px-[24px] py-[12px] bg-[#22CD6E] font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)]" onClick={handleBackToPortfolio}> Back to Portfolio</button>
      </div>
      
    </div>
    </RevealOnScroll>
  );
};
