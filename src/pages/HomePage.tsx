import FallingGlitchAn from "@/components/ui/fillingGlitch";
import Portfolio from "@/components/ui/hero";
import Education from "./Education";
import Projects from "./Projects";
import Footer from "@/components/ui/Footer";
import NewsletterSection from "@/components/ui/Newsletter";
import ImageCarousel from "@/components/ui/imagecarousel";
import Counting from "./Counting";

const HomePage = () => {
  return (
    <div>
      <FallingGlitchAn></FallingGlitchAn>
      <Portfolio></Portfolio>
      <Education></Education>
      {/* counting */}
      <Counting></Counting>
      <Projects></Projects>
      {/* footer */}
      <ImageCarousel></ImageCarousel>
      <NewsletterSection></NewsletterSection>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
