import React from "react";
import { FaProcedures, FaProcedures as FaPhysiotherapy, FaStethoscope, FaClinicMedical, FaFlask, FaStethoscope as FaDiagnostics, FaHeartbeat, FaRadiation } from 'react-icons/fa';

const MainServices = () => {
  const services = [
    { id: 1, title: "Terapiya xizmatlaridan foydalanish", icon: <FaProcedures /> },
    { id: 2, title: "Fizioterapiya va reabilitatsiya xizmati", icon: <FaPhysiotherapy /> },
    { id: 3, title: "Ultratovush diagnostikasi (UZI)", icon: <FaStethoscope /> },
    { id: 4, title: "Pediatriya xizmatlaridan foydalanish", icon: <FaClinicMedical /> },
    { id: 5, title: "Labaratoriya natijalarini ko‘rish", icon: <FaFlask /> },
    { id: 6, title: "Diagnostika natijalarini ko‘rish", icon: <FaDiagnostics /> },
    { id: 7, title: "Pediatriya va Terapiya xizmatlaridan foydalanish", icon: <FaHeartbeat /> },
    { id: 8, title: "Onkologiya va Radiologik tekshiruvlar", icon: <FaRadiation /> },
    { id: 9, title: "Diagnostik materiallariga natijasini onlayn tekshirish", icon: <FaStethoscope /> },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {services.map((service) => (
        <div
        key={service.id}
        className={`flex flex-row justify-start items-center p-6 rounded-2xl shadow hover:shadow-xl transition-shadow 
          text-[#0d726d] bg-white hover:bg-[#0d726d] hover:text-white`}
      >
          <div className="text-2xl md:text-3xl mr-4">
            {React.cloneElement(service.icon, { className: "text-inherit" })}
          </div>
          <p className="text-left text-xl md:text-lg font-medium">
            {service.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MainServices;
