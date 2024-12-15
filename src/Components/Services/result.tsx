import Icon from "../../assets/Icons/study.svg"
import Icon3 from "../../assets/Icons/online_check.svg"

const Result = () => {
  const services = [
    { id: 1, title: "Natijani ko‘rish", icon: Icon3 },
    { id: 2, title: "O‘qishni ko‘chirish (xorijiy va nodavlat) Natija", icon: Icon },

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

export default Result;