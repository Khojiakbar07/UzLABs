import About from "../About";
import Services from "../Services";
import PartnersCarousel from "../PartnersCarousel";
import CarouselBanner from "../CarouselBanner";
import NewsComponent from "../NewsComponent";

const Home = () => {
  return (
    <main>
        <CarouselBanner />
        <About />
        <NewsComponent/>
        <Services/>
        <PartnersCarousel />
    </main>
  )
}

export default Home