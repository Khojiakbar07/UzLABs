import React from "react";
import { FaFlask, FaUserMd, FaStethoscope, FaClinicMedical } from "react-icons/fa";

const AdmissionService = () => {
  const services = [
    { id: 1, title: "Labaratoriya uchun qabulga yozilish", icon: <FaFlask /> },
    { id: 2, title: "Pediatriya uchun qabulga yozilish", icon: <FaUserMd /> },
    { id: 3, title: "Diagnostika uchun qabulga yozilish", icon: <FaStethoscope /> },
    { id: 4, title: "Terapiya uchun qabulga yozilish", icon: <FaClinicMedical /> },
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

export default AdmissionService;
