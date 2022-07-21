import Nav from "./Components/Nav/nav";
import Hamburger from "./Components/HamburgerModal/HamburgerModal";
import Hero from "./Components/Hero/hero";
import Services from "./Components/Services/services";
import WhoWeAre from "./Components/WhoWeAre/whoWeAre";
import Testimonials from "./Components/Testimonials/testimonials";
import Contact from "./Components/Contact/contact";
import "./app.scss";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Services />
      <WhoWeAre />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
