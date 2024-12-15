import Icon from "../../assets/Icons/inspector1.svg"
import Icon1 from "../../assets/Icons/dxx.svg"
import Icon2 from "../../assets/Icons/study.svg"

const QabulServices = () => {
  const services = [
    { id: 1, title: "Professional ta’lim muassasalariga qabul", icon: Icon },
    { id: 2, title: "Fan va texnologiyalar universitetiga qabul", icon: Icon1 },
    { id: 3, title: "O‘qishni ko‘chirish (xorijiy va nodavlat) Natija", icon: Icon2 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {services.map((service) => (
        <div
          key={service.id}
          className="flex flex-row jjustify-start items-center bg-white p-8 rounded-2xl shadow hover:shadow-xl transition-shadow"
        >
          <img src={service.icon} alt={service.title} className="w-7 h-7 mx-2" />
          <p className="text-left text-sm text-gray-800 font-medium">{service.title}</p>
        </div>
      ))}
    </div>
  );
};

export default QabulServices;
