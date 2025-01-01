import React from "react";
import People from "../../assets/people.webp";

const ContactSection: React.FC = () => {
  return (
    <div className="relative bg-[#17776a] text-white flex flex-col lg:flex-row items-center justify-center lg:justify-between">
      {/* Image Section */}
      <div className=" hidden md:flex relative lg:w-1/2 lg:-mt-20 z-10">
        <img src={People} alt="Doctor and Patient"
          className="max-w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Text and Button Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left p-8 z-0">
        <h2 className="text-3xl font-bold mb-4">Aloqa Xizmatlari</h2>
        <p className="mb-6 text-lg">
          Savollaringiz va qandaydir taklifingiz bo'lsa biz bilan bog'laning
        </p>
        <button className="bg-white font-medium border border-[#17776a] text-[#17776a] px-6 py-3 rounded-2xl text-center">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
