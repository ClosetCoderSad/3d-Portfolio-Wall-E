import About from "./pages/About";
import Experience from "./pages/Experience";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from "react";
import { Contact } from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[]);
  return (
    <div>
      <Landing/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

