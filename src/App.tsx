import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import PartnersCarousel from "./Components/PartnersCarousel";
<meta name="viewport" content="width=device-width, initial-scale=1" />

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
