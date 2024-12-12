import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import PartnersCarousel from "./Components/PartnersCarousel";

function App() {
  return (
    <div>
      <Navbar />
      {/* Main Content */}
      <main>
        <About/>
        <Services/>
        <PartnersCarousel/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
