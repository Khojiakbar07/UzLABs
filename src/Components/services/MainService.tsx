import Icon from "../../assets/Icons/inspector1.svg"
import Icon1 from "../../assets/Icons/dxx.svg"
import Icon2 from "../../assets/Icons/digo_off.svg"
import Icon3 from "../../assets/Icons/online_check.svg"
import Icon4 from "../../assets/Icons/laboratory.png"
import Icon5 from "../../assets/Icons/diagnostics.png"
import Icon6 from "../../assets/Icons/health-checkup.png"
import Icon7 from "../../assets/SideBar-Icons/therapy.png"

const AsosiyServices = () => {
  const services = [
    { id: 1, title: "Terapiya xizmatlaridan foydalanish", icon: Icon },
    { id: 2, title: "Fizioterapiya va reabilitatsiya xizmati", icon: Icon1 },
    { id: 3, title: "Ultratovush diagnostikasi (UZI)", icon: Icon2 },
    { id: 4, title: "Pediatriya xizmatlaridan foydalanish", icon: Icon3 },
    { id: 5, title: "Labaratoriya natijalarini ko‘rish", icon: Icon4 },
    { id: 6, title: "Diagnostika natijalarini ko‘rish", icon: Icon5 },
    { id: 7, title: "Pediatriya va Terapiya xizmatlaridan foydalanish", icon: Icon6 },
    { id: 8, title: "Onkologiya va Radiologik tekshiruvlar", icon: Icon7 },
    { id: 9, title: "Diagnostik materiallariga natijasini onlayn tekshirish", icon: Icon3 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {services.map((service) => (
        <div
          key={service.id}
          className="flex flex-row justify-start items-center bg-white p-6 md:p-4 rounded-2xl shadow hover:shadow-xl transition-shadow"
        >
          <img src={service.icon} alt={service.title} className="w-7 max-md:w-10 h-7 max-md:h-10 mx-2" />
          <p className="text-left text-xl md:text-lg text-gray-800 font-medium">{service.title}</p>
        </div>
      ))}
    </div>
  );
};

export default AsosiyServices;