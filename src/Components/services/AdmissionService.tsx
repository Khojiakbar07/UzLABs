import Icon from "../../assets/Icons/Lab.png"
import Icon1 from "../../assets/Icons/diagnostic.png"
import Icon2 from "../../assets/Icons/icons8-health-checkup-96.png"
import Icon3 from "../../assets/Icons/therapy.png"

const AdmissionService = () => {
  const services = [
    { id: 1, title: "Labaratoriya uchun qabulga yozilish", icon: Icon },
    { id: 2, title: "Diagnostika uchun qabulga yozilish", icon: Icon1 },
    { id: 3, title: "Pediatriya uchun qabulga yozilish", icon: Icon2 },
    { id: 4, title: "Terapiya uchun qabulga yozilish", icon: Icon3 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {services.map((service) => (
        <div
          key={service.id}
          className="flex flex-row jjustify-start items-center bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-shadow"
        >
          <img src={service.icon} alt={service.title} className="w-7 h-7 mx-2" />
          <p className="text-left text-xl md:text-lg text-gray-800 font-medium">{service.title}</p>
        </div>
      ))}
    </div>
  );
};

export default AdmissionService;
