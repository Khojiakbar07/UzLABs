import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import PartnersCarousel from "./Components/PartnersCarousel";
import CarouselBanner from "./Components/CarouselBanner";
import BottomNavBar from "./Components/BottomNavBar";
import NewsComponent from "./Components/NewsComponent";


<meta name="viewport" content="width=device-width, initial-scale=1" />

function App() {
  return (
    <div>
      <Navbar />
      {/* Main Content */}
      <main>
        <CarouselBanner/>
        <About/>
        <NewsComponent/>
        <Services/>
        <PartnersCarousel/>
        <Footer/>
      </main>
      <BottomNavBar/>
    </div>
  );
}

export default App;
