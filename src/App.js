import ClientsContact from "./components/clients&contactpage/clients";
import Footer from "./components/footer/footer";
import Intro from "./components/intro_part/intro";
import Navbar from "./components/navbar/navbar";
import Skills from "./components/skillspart/skillspart";
import Works from "./components/worksPart/works";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Skills></Skills>
      <Works></Works>
      <ClientsContact></ClientsContact>
      <Footer></Footer>
    </div>
  );
}

export default App;
