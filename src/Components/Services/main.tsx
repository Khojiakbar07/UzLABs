import Icon from "../../assets/Icons/inspector1.svg"
import Icon1 from "../../assets/Icons/dxx.svg"
import Icon2 from "../../assets/Icons/digo_off.svg"
import Icon3 from "../../assets/Icons/online_check.svg"
import Icon4 from "../../assets/Icons/Lab.png"
import Icon5 from "../../assets/Icons/diagnostic.png"
import Icon6 from "../../assets/Icons/icons8-health-checkup-96.png"
import Icon7 from "../../assets/Icons/therapy.png"

const MainServices = () => {
  const services = [
    { id: 1, title: "Guruh nazoratchiligiga birinchi tanlov bo'limi", icon: Icon },
    { id: 2, title: "Davlat xavfsizlik xizmati akademiyasi", icon: Icon1 },
    { id: 3, title: "Diagnostik test materiallari elektron shaklda olish", icon: Icon2 },
    { id: 4, title: "Pediatriya va Terapiya xizmatlaridan foydalanish", icon: Icon3 },
    { id: 5, title: "Labaratoriya natijalarini ko‘rish", icon: Icon4 },
    { id: 6, title: "Diagnostika natijalarini ko‘rish", icon: Icon5 },
    { id: 7, title: "Pediatriya va Terapiya xizmatlaridan foydalanish", icon: Icon6 },
    { id: 8, title: "Diagnostik test materiallariga buyurtma berish", icon: Icon7 },
    { id: 9, title: "Diagnostik test materiallariga natijasini onlayn tekshirish", icon: Icon3 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {services.map((service) => (
        <div
          key={service.id}
          className="flex flex-row justify-start items-center bg-white p-8 md:p-6 rounded-2xl shadow hover:shadow-xl transition-shadow"
        >
          <img src={service.icon} alt={service.title} className="w-7 h-7 mx-2" />
          <p className="text-left text-sm md:text-xs text-gray-800 font-medium">{service.title}</p>
        </div>
      ))}
    </div>
  );
};

export default MainServices;