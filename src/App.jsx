import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Portfolio } from "./components/sections/Portfolio";
import { Contact } from "./components/sections/Contact";
import { VideoPage } from "./components/VideoPage";
import { GalleryPage } from "./components/GalleyPage";
import { InstagramPage } from "./components/InstagramPage";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Router>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/video/:videoId" element={<VideoPage/>}/>
          <Route path="/gallery/:id" element= {<GalleryPage/>}/>
          <Route path="/instagram/:igUrl" element={<InstagramPage/>} />
          <Route path="/contact" element={<Contact/>}
          

          //   path="/"
          //   element={
          //     <div>
          //       <Home />
          //       <About />
                
          //       <Contact />
          //     </div>
          //   }
          />
          <Route path="/portfolio" element={<Portfolio/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
