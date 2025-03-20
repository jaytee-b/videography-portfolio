import { useNavigate, useParams } from "react-router-dom";
import { InstagramEmbed } from "react-social-media-embed";
import { getNextPagePath, getPrevPagePath, instagramProjects } from "../utils/pages";
import { RevealOnScroll } from "./RevealOnScroll";

export const InstagramPage = () => {
  const { igUrl } = useParams();
  const decodedIgUrl = decodeURIComponent(igUrl);

  const navigate = useNavigate()
  const path = `/instagram/${igUrl}`
  const projectName = instagramProjects[decodedIgUrl] || "Instagram";

  const handleBackToPortfolio = () => {
    navigate("/portfolio")
  }

  const handlePrevPage = () => {
    navigate(getPrevPagePath(path))
  }

  const handleNextPage = () => {
    navigate(getNextPagePath(path))
  }

 
  return (
    <div className="min-h-screen mt-40 ">
        <RevealOnScroll>
        <div className="flex justify-between items-center  w-full px-8  mt-40 mb-8">
          <h5 className="w-1/4 md:text-sm text-xs">{projectName}</h5>
          <div className="w-3/4 bg-[#303130] h-[1px] "></div>
        </div>
        <div className="w-screen  flex
         items-center justify-center">
            <InstagramEmbed 
            url={decodedIgUrl}
            width={328}
            />

        </div>

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
            <button className="text-black rounded px-[24px] py-[12px] bg-[#22CD6E] font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)]" onClick={handleBackToPortfolio}>
                Back to Portfolio
            </button>
        </div>
        </RevealOnScroll>
    </div>
  );
};
