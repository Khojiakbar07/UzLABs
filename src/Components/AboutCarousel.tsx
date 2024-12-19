import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Import qilinadigan rasmlar
import Icon from "../assets/Icons/Lab.png";
import Diagnostic from "../assets/Icons/diagnostic.png";
import Therapy from "../assets/Icons/therapy.png";
import Icon2 from "../assets/Icons/icons8-health-checkup-96.png";

const partners = [
  { id: 1, logo: Icon, name: "Laboratoriya" },
  { id: 2, logo: Diagnostic, name: "Diagnostika" },
  { id: 3, logo: Icon2, name: "Pediatriya" },
  { id: 4, logo: Therapy, name: "Terapiya" },
];

const AboutCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 2000,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  

  return (
    <div className="bg-[#f8f8fa] py-8 ">
      <div className="max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {partners.map((partner) => (
            <div key={partner.id} className="px-4">
              <div className="bg-white shadow-md rounded-xl my-2 flex flex-col items-center justify-center p-6">
                <img src={partner.logo} className="w-13 h-13 md:w-14 md:h-14" />
                <p className="text-center text-xl md:text-lg mt-2 md:mt-4 text-gray-800 font-medium">
                    {partner.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AboutCarousel;