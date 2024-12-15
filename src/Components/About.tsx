import Icon from "../assets/Icons/Lab.png";
import Poster from "../assets/Icons/poster.svg";
import Diagnostic from "../assets/Icons/diagnostic.png";
import therapy from "../assets/Icons/therapy.png";
import Icon2 from "../assets/Icons/icons8-health-checkup-96.png";

function About() {
  return (
    <section className="py-8 md:py-12 bg-[#f8f8fa]">
      {/* Header Section */}
      <header className="bg-white rounded-xl shadow-lg border border-white px-6 md:px-12 py-8 md:py-12 flex flex-col items-start max-w-screen-xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-left leading-snug">
          Uzlabs — bu xususiy sog‘liqni saqlash va diagnostika "Virtual markaz" interaktiv xizmatlar portaliga xush kelibsiz!
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="bg-[#17776a] font-medium border border-[#17776a] text-white px-6 py-2 rounded-xl hover:bg-[#115c52] transition-colors">
            Kirish
          </button>
          <button className="bg-white font-medium border border-[#17776a] text-[#17776a] px-6 py-2 rounded-xl hover:bg-[#115c52] hover:text-white transition-colors">
            Ro'yxatdan o'tish
          </button>
        </div>
      </header>

      {/* Poster Section */}
      <div className="bg-[#eaf3f6] p-4 md:p-6 rounded-xl shadow-sm border border-[#d3e4eb] max-w-screen-xl mx-auto my-6 md:my-10">
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
          <img className="h-8 w-8 md:h-10 md:w-10" src={Poster} alt="Poster" />
          <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-[#17776a] text-center md:text-left flex-1">
            Tibbiy va Laboratoriya tahlillari (qon tahlillari, diagnostika va boshqalar)
          </h3>
          <button className="bg-[#17776a] text-sm md:text-base font-medium border border-[#17776a] text-white px-4 md:px-6 py-2 rounded-xl hover:bg-[#115c52] transition-colors">
            Xizmatdan foydalanish →
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Card 1 */}
            <div className="flex flex-col justify-center items-center bg-white p-4 md:p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
              <img src={Icon} alt="Laboratory" className="w-12 h-12 md:w-14 md:h-14" />
              <p className="text-center text-sm md:text-lg mt-2 md:mt-4 text-gray-800 font-medium">
                Laboratoriya
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col justify-center items-center bg-white p-4 md:p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
              <img src={Diagnostic} alt="Diagnostic" className="w-12 h-12 md:w-14 md:h-14" />
              <p className="text-center text-sm md:text-lg mt-2 md:mt-4 text-gray-800 font-medium">
                Diagnostika
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col justify-center items-center bg-white p-4 md:p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
              <img src={therapy} alt="Pediatrics" className="w-12 h-12 md:w-14 md:h-14" />
              <p className="text-center text-sm md:text-lg mt-2 md:mt-4 text-gray-800 font-medium">
                Pediatriya
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col justify-center items-center bg-white p-4 md:p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
              <img src={Icon2} alt="Therapy" className="w-12 h-12 md:w-14 md:h-14" />
              <p className="text-center text-sm md:text-lg mt-2 md:mt-4 text-gray-800 font-medium">
                Terapiya
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
