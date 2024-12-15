import Icon from "../assets/Icons/Lab.png";
import Poster from "../assets/Icons/poster.svg"
import Diagnostic from "../assets/Icons/diagnostic.png";
import therapy from "../assets/Icons/therapy.png";
import Icon2 from "../assets/Icons/icons8-health-checkup-96.png";

function About() {
  return (
    <section className="py-12 bg-[#f8f8fa]">
      <header className="bg-white rounded-xl shadow-lg border border-white px-12 py-12 flex flex-col items-start max-w-screen-xl mx-auto">
        <h1 className="text-4xl max-lg:3xl max-md:text-2xl max-sm:xl max-412:text-base font-semibold text-left">Uzlabs — bu xususiy sog‘liqni saqlash va diagnostika "Virtual markaz" interaktiv xizmatlar portaliga xush kelibsiz!</h1>
          <div className="flex gap-4 mt-4">
           <button className="bg-[#17776a] font-medium border border-[#17776a] text-white px-4 py-2 rounded-xl hover:bg-[#115c52] hover:text-white">Kirish</button>
           <button className="bg-white font-medium border border-[#17776a] text-[#17776a] px-4 py-2 rounded-xl hover:bg-[#115c52] hover:text-white">Ro'yxatdan o'tish</button>
          </div>
      </header>
      
      <div className="bg-[#eaf3f6] p-4 rounded-xl shadow-sm border border-[#d3e4eb] max-w-screen-xl mx-auto my-10">
        <div className="flex justify-between items-center">
          <img className="h-8 md:h-6 w-8 md:w-6" src={Poster} alt="" />
          <h1  className="text-xl max-md:text-sm font-semibold text-[#17776a]">Tibbiy va Laboratoriya tahlillari (qon tahlillari, diagnostika va boshqalar)</h1>
          <button className="bg-[#17776a] md:text-sm font-medium border border-[#17776a] text-white px-4 md:px-3 py-2 md:-1 rounded-xl hover:bg-[#115c52] hover:text-white">Xizmatdan foydalanish →</button>
        </div>
      </div>

    <div className="bg-gray-50 py-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col justify-center items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
            <img src={Icon} alt="Megaphone" className="w-14 h-14"/>
            <p className="text-center text-xl mt-4 text-gray-800 font-medium">Labaratoriya</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-center items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
            <img src={Diagnostic} alt="Megaphone" className="w-14 h-14"/>
            <p className="text-center text-xl mt-4 text-gray-800 font-medium">Diagnostika</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-center items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
            <img src={therapy} alt="Megaphone" className="w-14 h-14"/>
            <p className="text-center text-xl mt-4 text-gray-800 font-medium">Pediatriya</p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col justify-center items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
            <img src={Icon2} alt="Building" className="w-14 h-14"/>
            <p className="text-center text-xl mt-4 text-gray-800 font-medium">Terapiya</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default About;
