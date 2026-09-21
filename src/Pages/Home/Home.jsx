import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Background from "../../components/Background";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";

// Band rhythm: mesh hero -> white -> soft -> white (cream card) -> soft -> white footer.
const Home = () => (
  <div id="top">
    <Nav />
    <Hero />
    <main>
      <div id="about" className="scroll-anchor">
        <About />
      </div>
      <div id="background" className="scroll-anchor">
        <Background />
      </div>
      <div id="skills" className="scroll-anchor">
        <Skills />
      </div>
      <div id="projects" className="scroll-anchor">
        <Projects />
      </div>
    </main>
    <Footer />
  </div>
);

export default Home;
