import Icon from "../../assets/Icons/inspector1.svg"
import Icon1 from "../../assets/Icons/dxx.svg"
import Icon2 from "../../assets/Icons/digo_off.svg"
import Icon3 from "../../assets/Icons/online_check.svg"

const AsosiyServices = () => {
  const services = [
    { id: 1, title: "Guruh nazoratchiligiga birinchi tanlov bo'limi", icon: Icon },
    { id: 2, title: "Davlat xavfsizlik xizmati akademiyasi", icon: Icon1 },
    { id: 3, title: "Diagnostik test materiallari elektron shaklda olish", icon: Icon1 },
    { id: 4, title: "Pediatriya va Terapiya xizmatlaridan foydalanish", icon: Icon2 },
    { id: 5, title: "Diagnostik test materiallariga buyurtma berish", icon: Icon2 },
    { id: 5, title: "Diagnostik test sinovlari natijasini onlayn tekshirish", icon: Icon3 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {services.map((service) => (
        <div
          key={service.id}
          className="flex flex-row justify-start items-center bg-white p-8 rounded-2xl shadow hover:shadow-xl transition-shadow"
        >
          <img src={service.icon} alt={service.title} className="w-7 h-7 mx-2" />
          <p className="text-left text-sm text-gray-800 font-medium">{service.title}</p>
        </div>
      ))}
    </div>
  );
};

export default AsosiyServices;