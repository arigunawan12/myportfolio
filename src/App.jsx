import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <SocialLinks />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
