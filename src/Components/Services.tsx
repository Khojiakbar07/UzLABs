import PlayMarket from "../assets/Icons/play_market.svg";
import AppStore from "../assets/Icons/app_store.svg";
import QRCode from "../assets/qr-code.svg";

const Services = () => {
  return (
    <div className="bg-[#f8f8fa] max-w-screen-xl mx-auto mb-12">
    <h2 className="text-3xl font-semibold text-center">Xizmatlar</h2>
    <div className="flex grid-cols-6 mt-6 gap-6 justify-start">
        <div className="flex flex-col items-center w-max py-1 px-4 bg-[#17776a] text-white  rounded-2xl shadow-lg">
            <p className="text-center text-base font-semibold">Asosiy</p>
        </div>
        <div className="flex flex-col items-center w-max py-2 px-4 bg-white rounded-2xl shadow-lg">
            <p className="text-center text-xs font-semibold">Qabul uchun</p>
        </div>
        <div className="flex flex-col items-center w-max py-2 px-4 bg-white rounded-2xl shadow-lg">
            <p className="text-center text-xs font-semibold">Natijani ko'rish</p>
        </div>
        <div className="flex flex-col items-center w-max py-2 px-4 bg-white rounded-2xl shadow-lg">
            <p className="text-center text-xs font-semibold">Abituriyent ruxsatnomasi</p>
        </div>
        <div className="flex flex-col items-center w-max py-2 px-4 bg-white rounded-2xl shadow-lg">
            <p className="text-center text-xs font-semibold">Diagnostik test</p>
        </div>
        <div className="flex flex-col items-center w-max py-2 px-4 bg-white rounded-2xl shadow-lg">
            <p className="text-center text-xs font-semibold">Milliy sertifikatlar</p>
        </div>
    </div>





    <div className="bg-[#f8f8fa] py-6 px-8 rounded-xl shadow-lg border border-gray-200 max-w-screen-xl mx-auto my-14">
    <div className="flex justify-between items-center">
        <div className="max-w-lg">
            <h1 className="text-2xl font-semibold ">MyUzMobile - barchasi o'z qo'lingizda!</h1>
            <p>Mobil ilovamni yuklab olish uchun Google Play yoki App Store maketga quyidagi tugma orqali o'ting yoki QR kodni skaner qiling.</p>
            <div className="flex gap-4 mt-4">
                <a href="#" className="bg-white text-black pr-4 py-2 rounded-md">
                    <img src={PlayMarket} alt="Google Play" className="w-17 h-17" />
                </a>
                <a href="#" className="bg-gray-100 text-black pr-4 py-2 rounded-md ">
                    <img src={AppStore} alt="App Store" className="w-17 h-17" />
                </a>
            </div>
        </div>
        <div>
            <img src={QRCode} alt="QR Code" className="w-24 h-24" />
        </div>
    </div>
    </div>


   </div>

   


  );
};

export default Services;
