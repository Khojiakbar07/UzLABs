import Icon from "../../assets/Icons/laboratory.png";
import Icon1 from "../../assets/Icons/diagnostics.png";

const ResultService = () => {
  const services = [
    { id: 1, title: "Labaratoriya natijalarini ko‘rish", icon: Icon },
    { id: 2, title: "Diagnostika natijalarini ko‘rish", icon: Icon1 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {services.map((service) => (
        <div
          key={service.id}
          className="flex flex-row justify-start items-center bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-shadow"
        >
          <img src={service.icon} alt={service.title} className="w-7 max-md:w-10 h-7 max-md:h-10 mx-2" />
          <p className="text-left text-xl md:text-lg text-gray-800 font-medium">{service.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ResultService;