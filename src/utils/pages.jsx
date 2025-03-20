// pages.js
export const pages = [
    { path: "/gallery/0", type: "gallery" },
    { path: "/video/sXkLDCalF1Q", type: "video" },
    { path: "/instagram/https%3A%2F%2Fwww.instagram.com%2Freel%2FDCmGlAcKoyi%2F%3Figsh%3DaXY1czY2YjA3NGRv", type:"instagram"},
    { path: "/instagram/https%3A%2F%2Fwww.instagram.com%2Freel%2FDBgTzuqNvm0%2F%3Figsh%3DYmZ3ZTJzaXhhaWdq", type:"instagram"},
    { path: "/gallery/1", type: "gallery" },
    { path: "/video/Jw94N64n138", type: "video" },


    
  ];
  
  export const getCurrentPageIndex = (path) => {
    return pages.findIndex((page) => page.path === path);
  };
  
  export const getNextPagePath = (path) => {
    const currentIndex = getCurrentPageIndex(path);
    if (currentIndex === pages.length - 1) return pages[0].path; // Loop back to start
    return pages[currentIndex + 1].path;
  };
  
  export const getPrevPagePath = (path) => {
    const currentIndex = getCurrentPageIndex(path);
    if (currentIndex === 0) return pages[pages.length - 1].path; // Loop back to end
    return pages[currentIndex - 1].path;
  };

  export const galleryProjects = {
    "/gallery/0": "Killz Bites",
    "/gallery/1": "Graduation Photos",
    // Add more mappings here
  };
  
  export const videoProjects = {
    "/video/sXkLDCalF1Q": "Ad Campaign Video",
    "/video/Jw94N64n138": "Brag.ng Video",
    // Add more mappings here
  };
  
  export const instagramProjects = {
    "https://www.instagram.com/reel/DCmGlAcKoyi/?igshid=aXY1czY2YjA3NGRv": "Project Alpha",
    "https://www.instagram.com/reel/DBgTzuqNvm0/?igshid=YmZ3ZTJzaXhhaWdq": "Project Beta",
    // Add more mappings here
  };
  
  