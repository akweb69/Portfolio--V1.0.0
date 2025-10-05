import FallingGlitchAn from "@/components/ui/fillingGlitch";
import Portfolio from "@/components/ui/hero";
import Education from "./Education";
import Projects from "./Projects";
import Footer from "@/components/ui/Footer";

const HomePage = () => {
  return (
    <div>
      <FallingGlitchAn></FallingGlitchAn>
      <Portfolio></Portfolio>
      <Education></Education>
      <Projects></Projects>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
