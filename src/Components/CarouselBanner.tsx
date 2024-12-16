import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/Banner/image1.jpg";
import image2 from "../assets/Banner/image2.jpg";
import image3 from "../assets/Banner/images3.jpg";


const carouselData = [
  {
    id: 1,
    title: "Uzlabs klinikasi",
    subtitle: "Yuqori sifatli diagnostika va sog'liqni saqlash xizmatlari",
    description:
      "Eng so'nggi texnologiyalar va tibbiy bilimlar asosida yuqori sifatli diagnostika va sog'liqni saqlash xizmatlarini taqdim etadi.",
    img: image1,
  },
  {
    id: 2,
    title: "Sog'liqni saqlashni yangi bosqichga olib chiqing!",
    subtitle: "Innovatsion tibbiy xizmatlar",
    description:
      "Bizning klinikamizda sizni kutayotgan mutaxassislar yordamida sog'lig'ingizni mutlaqo nazoratda tuting.",
    img: image2, 
  },
  {
    id: 3,
    title: "Sizning farovonligingiz bizning ustuvorligimiz!",
    subtitle: "Sog'liqni saqlashdagi eng so'nggi yutuqlar",
    description:
      "Uzlabs klinikasida so'nggi tibbiy texnologiyalar yordamida sog'liqni saqlash va diagnostika xizmatlarini taqdim etamiz.",
    img: image3,
  },
];

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false, 
};

const CarouselBanner = () => {
  return (
    <div className="relative bg-[#f8f8fa]">
      <Slider {...carouselSettings}>
        {carouselData.map((item) => (
          <div
            key={item.id}
            className="w-full h-[400px] sm:h-[500px] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url(${item.img})`,
            }}
          >
            <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-2">{item.title}</h2>
              <h3 className="text-xl sm:text-2xl font-medium mb-4">{item.subtitle}</h3>
              <p className="text-lg sm:text-xl mb-6">{item.description}</p>
              <button className="py-3 px-6 bg-[#17776a] text-white font-bold rounded-lg hover:bg-[#145d4d]">
                Batafsil
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselBanner;
