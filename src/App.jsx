import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Portfolio } from "./components/sections/Portfolio";
import { Contact } from "./components/sections/Contact";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <>
  <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
  <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
  <Home/>
  <About/>
  <Portfolio/>
  <Contact/>
  
  </>;
}

export default App;
