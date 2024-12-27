import { Carousel } from "antd";

// Import your images
import image1 from "../assets/Banner/image2.jpg";
import image2 from "../assets/Banner/image6.jpg";
import image3 from "../assets/Banner/images3.jpg";
import image4 from "../assets/Banner/image4.jpg";
import image5 from "../assets/Banner/image5.jpg";

const carouselData = [
  {
    id: 1,
    title: "Uzlabs klinikasi",
    subtitle: "Yuqori sifatli diagnostika va sog'liqni saqlash xizmatlari",
    description:
      "Eng so'nggi texnologiyalar va tibbiy bilimlar asosida yuqori sifatli diagnostika va sog'liqni saqlash xizmatlarini taqdim etadi.",
    img: image2,
  },
  {
    id: 2,
    title: "Sog'liqni saqlashni yangi bosqichga olib chiqing!",
    subtitle: "Innovatsion tibbiy xizmatlar",
    description:
      "Bizning klinikamizda sizni kutayotgan mutaxassislar yordamida sog'lig'ingizni mutlaqo nazoratda tuting.",
    img: image1,
  },
  {
    id: 3,
    title: "Sizning farovonligingiz bizning ustuvorligimiz!",
    subtitle: "Sog'liqni saqlashdagi eng so'nggi yutuqlar",
    description:
      "Uzlabs klinikasida so'nggi tibbiy texnologiyalar yordamida sog'liqni saqlash va diagnostika xizmatlarini taqdim etamiz.",
    img: image3,
  },
  {
    id: 4,
    title: "Sizning farovonligingiz bizning ustuvorligimiz!",
    subtitle: "Sog'liqni saqlashdagi eng so'nggi yutuqlar",
    description:
      "Uzlabs klinikasida so'nggi tibbiy texnologiyalar yordamida sog'liqni saqlash va diagnostika xizmatlarini taqdim etamiz.",
    img: image4,
  },
  {
    id: 5,
    title: "Batafsil ma'lumot oling",
    subtitle: "Klinikamizi kashf eting",
    description:
      "Eng so'nggi texnologiyalar yordamida sog'liqni saqlashni yangi bosqichga olib chiqing. Bizning jamoamiz har doim sizga yordam beradi.",
    img: image5,
  },
];

const CarouselBanner = () => {
  return (
    <div className="relative w-full">
      <Carousel autoplay dotPosition="bottom">
        {carouselData.map((slide) => (
          <div key={slide.id}>
            <div className="relative h-[695px] w-full overflow-hidden">
              {/* Image */}
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black opacity-50"></div>
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                  {slide.title}
                </h1>
                <h2 className="text-lg md:text-2xl text-white mb-4">
                  {slide.subtitle}
                </h2>
                <p className="text-sm md:text-base text-gray-300 mb-4 md:hidden">
                  {slide.description}
                </p>
                <button className="py-2 px-6 bg-[#17776a] text-white text-lg font-bold rounded-lg hover:bg-[#145d4d]">
                  Batafsil
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselBanner;
