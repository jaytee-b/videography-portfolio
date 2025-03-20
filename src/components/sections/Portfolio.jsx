import { Link } from "react-router-dom";
import { RevealOnScroll } from "../RevealOnScroll";

export const Portfolio = () => {

  const portfolioItems = [
    {
      imgSrc: "images/Sequence 3.jpg",
      title: "Zlatan's concert '24",
      subtitle: "Concert videography",
      videoId: "Jw94N64n138"
    },
    
    {
      imgSrc: "images/feyi.png",
      title: "Brags.ng",
      subtitle: "Ads Campaign",
      videoId: "sXkLDCalF1Q"
    },
    {
      imgSrc: "images/ok 2.jpg",
      title: "OK Grills",
      subtitle: "Event Coverage",
      igUrl: "https://www.instagram.com/reel/DCmGlAcKoyi/?igsh=aXY1czY2YjA3NGRv"
    },
    {
      imgSrc: "images/adex.png",
      title: "Adex Global",
      subtitle: "Instagram Ads Campaign",
      igUrl: "https://www.instagram.com/reel/DBgTzuqNvm0/?igsh=YmZ3ZTJzaXhhaWdq"
    },
    {
      imgSrc: "images/burger1.png",
      title: "Killz Bites",
      subtitle: "Instagram Ads Campaign Photo shoot",
      galleryId: 0
    }
    ,
    {
      imgSrc: "images/rita.JPG",
      title: "Graduation '25",
      subtitle: "Photo shoot",
      galleryId: 1
    },
  ];

  return (
    <section id="portfolio" className="min-h-screen">
      <RevealOnScroll>
        <div className="flex justify-between items-center  w-full px-8  mt-40 mb-8">
          <h5 className="w-1/4 md:text-sm text-xs">SELECTED WORKS</h5>
          <div className="w-3/4 bg-[#303130] h-[1px] "></div>
        </div>
        <div className="grid gap-x-4 gap-y-20 px-8 grid-cols-2 md:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <Link
              key={index}
              to={item.videoId ? `/video/${item.videoId}` :  item.igUrl ?`/instagram/${encodeURIComponent(item.igUrl)}` : `/gallery/${item.galleryId}`}
              className="relative w-full h-full cursor-pointer"
            >
              <img
                src={item.imgSrc}
                alt={item.subtitle}
                className="z-20 w-full h-full object-cover opacity-80 hover:opacity-100"
              />
              <div className="absolute justify-center items-center mt-2">
                <h3 className="md:text-sm text-xs">
                  {item.title}{" "}
                  <span className="pl-2 text-gray-500">{item.subtitle}</span>
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-20 flex items-center justify-center">
          
        </div>
      </RevealOnScroll>
    </section>
  );
};
