import Poster from "../assets/Icons/poster.svg";
import PU from "../assets/Icons/state_university.svg";
import SU from "../assets/Icons/private_university.svg";

function About() {
  return (
    <section className="py-12 bg-[#f8f8fa]">
      <header className="bg-white rounded-xl shadow-lg border border-white px-12 py-12 flex flex-col items-start max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-semibold text-left">Uzlabs — bu xususiy sog‘liqni saqlash va diagnostika "Virtual markaz" interaktiv xizmatlar portaliga xush kelibsiz!</h1>
          <div className="flex gap-4 mt-4">
           <button className="bg-[#17776a] font-medium border border-[#17776a] text-white px-4 py-2 rounded-xl hover:bg-[#115c52] hover:text-white">Kirish</button>
           <button className="bg-white font-medium border border-[#17776a] text-[#17776a] px-4 py-2 rounded-xl hover:bg-[#115c52] hover:text-white">Ro'yxatdan o'tish</button>
          </div>
      </header>
      
      <div className="bg-[#eaf3f6] p-4 rounded-xl shadow-sm border border-[#d3e4eb] max-w-screen-xl mx-auto my-10">
        <div className="flex justify-between items-center">
          <img className="h-8 w-8" src={Poster} alt="" />
          <h2  className="text-xl font-semibold text-[#17776a]">Oliy va professional ta'lim muassasalariga qabul (2024-2025-o'quv yili uchun)</h2>
          <button className="bg-[#17776a] font-medium border border-[#17776a] text-white px-4 py-2 rounded-xl hover:bg-[#115c52] hover:text-white">Xizmatdan foydalanish →</button>
        </div>
      </div>

    <div className="bg-gray-50 py-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col justify-center items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
            <img src={Poster} alt="Megaphone" className="w-14 h-14"/>
            <p className="text-center text-xl mt-4 text-gray-800 font-medium">Ilmiy-o'quv amaliy markazi</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-center items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
            <img src={Poster} alt="Megaphone" className="w-14 h-14"/>
            <p className="text-center text-xl mt-4 text-gray-800 font-medium">Texnikum Kollej statistikasi</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-center items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
            <img src={PU} alt="Megaphone" className="w-14 h-14"/>
            <p className="text-center text-xl mt-4 text-gray-800 font-medium">Davlat OTMlari</p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col justify-center items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
            <img src={SU} alt="Building" className="w-14 h-14"/>
            <p className="text-center text-xl mt-4 text-gray-800 font-medium">Xususiy OTMlari</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default About;
