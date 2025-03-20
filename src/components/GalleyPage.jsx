import { useNavigate, useParams } from "react-router-dom";
import { getNextPagePath, getPrevPagePath, galleryProjects } from "../utils/pages";
import { RevealOnScroll } from "./RevealOnScroll";


export const GalleryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate()
const path = `/gallery/${id}`
  const projectName = galleryProjects[path] || "Gallery";

  

  const handlePrevPage = () => {
    navigate(getPrevPagePath(path))
  };

  const handleNextPage = () => {
    navigate(getNextPagePath(path))
  }

  const galleries = [
    [
      "burgerboy/burger1.jpg",
      "burgerboy/burger2.jpg",
      "burgerboy/burger3.jpg",
      "burgerboy/burger4.jpg",
      "burger1.png",
    ],
    [
      "grad/ex.jpg",
      "grad/kevo.jpg",
      "grad/ife.jpg",
      "grad/ini.jpg",
      "grad/ife2.jpg",
      "grad/rita.jpg"
    ],
  ];

  const galleryIndex = parseInt(id, 10);
  const galleryImages = galleries[galleryIndex] || [];
  const handleBackToPortfolio = () => {
    navigate("/portfolio")
  }

  return (
    <div className="min-h-screen p-8 mt-40">
      <RevealOnScroll >
      <div className="flex justify-between items-center  w-full px-8  mt-40 mb-8">
          <h5 className="w-1/4 md:text-sm text-xs">{projectName}</h5>
          <div className="w-3/4 bg-[#303130] h-[1px] "></div>
        </div>


      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((imgSrc, index) => (
          <img
            key={index}
            src={`/images/${imgSrc}`}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-full object-cover  rounded shadow-lg"
          />
        ))}
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
        <button  className="text-black rounded px-[24px] py-[12px] bg-[#22CD6E] font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)]" onClick={handleBackToPortfolio}> Back to Portfolio</button>
      </div>
      </RevealOnScroll>
    </div>
  );
};
