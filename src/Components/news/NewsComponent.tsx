import React, { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Image from "../../../src/assets/News/Image.jpg";
import Image2 from "../../../src/assets/News/Image2.jpg";
import Image3 from "../../../src/assets/News/Image3.jpg";
import Image4 from "../../../src/assets/News/Image4.jpg"
import Image5 from "../../assets/News/Image5.jpg"
import Image6 from "../../assets/News/Image6.jpg"

interface NewsArticle {
  id: number;
  title: string;
  description: string;
  fullDescription?: string; // Added for expanded view
  image: string;
  url: string;
  date: string;
}

const NewsComponent: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const mockData: NewsArticle[] = [
    {
      id: 1,
      title:
        "Saida Mirziyoyeva Respublika ixtisoslashtirilgan ona va bola salomatligi markazi xodimlarini tabrikladi",
      description:
        "Prezident yordamchisining ma’lum qilishicha, yangi davlat dasturi doirasida ayollarni skrining tekshiruvidan o‘tkazish va qo‘llab-quvvatlash tizimi takomillashtiriladi.",
      fullDescription:
        "To'liq ma'lumot: Ushbu dastur doirasida nafaqat ayollarning sog'lig'iga e'tibor qaratiladi, balki tibbiy xizmatlarning sifati ham oshiriladi. Innovatsion texnologiyalar joriy qilinadi.",
      image: Image,
      url: "#",
      date: "2024-12-23",
    },
    {
      id: 2,
      title:
        "Tibbiyot muassasasiga hisobga qo‘yishda davlat xizmatini ko‘rsatish reglamenti tasdiqlandi",
      description:
        "Vazirlar Mahkamasining “Jismoniy shaxslarni davlat tibbiyot muassasalariga hisobga qo‘yish bo‘yicha davlat xizmatini ko‘rsatishning ma’muriy reglamentini tasdiqlash to‘g‘risida”gi qarori qabul qilindi.",
      fullDescription:
        "To'liq ma'lumot: Ushbu reglament davlat xizmatlarini yanada qulay va tezkor qilishga qaratilgan bo'lib, onlayn xizmatlarni kengaytirishni o'z ichiga oladi.",
      image: Image2,
      url: "#",
      date: "2024-12-22",
    },
    {
      id: 3,
      title:
        "O‘zbekistonda yangi yilning ilk kunida 1040 nafar chaqaloq tug‘ildi",
      description:
        "“Avitsenna” nomi ostida O‘zbekistonning tibbiy va sog‘lomlashtirish turizmi brendi ishlab chiqiladi.",
      fullDescription:
        "To'liq ma'lumot: Ushbu brend mahalliy va xalqaro miqyosda O‘zbekistonning tibbiyot sohasidagi imkoniyatlarini targ‘ib qilishga qaratilgan.",
      image: Image3,
      url: "#",
      date: "2024-12-20",
    },
    {
      id: 4,
      title:
        "Milliy tibbiyot markazida noyob laparoskopik WHIPPLE amaliyoti muvaffaqiyatli o‘tkazildi",
      description:
        "Markazda yil davomida 40 ta buyrak va 9 ta jigar transplantatsiyasi amaliyoti muvaffaqiyatli bajarilgan.",
      fullDescription:`
        Milliy tibbiyot markazida O‘zbekiston tibbiyotida kam uchraydigan laparoskopik WHIPPLE amaliyoti muvaffaqiyatli amalga oshirildi.
        Ushbu murakkab amaliyot oshqozon osti bezi, o‘n ikki barmoq ichak, safro yo‘llari va ba’zan oshqozonning bir qismini olib tashlashni talab qiladi.

        Laparoskopik usulda o‘tkazilgan jarayon katta qon tomirlar va nozik anatomik tuzilmalar bilan ishlashni,
        shuningdek, yuqori xavflarni boshqarishni o‘z ichiga oladi.
        `,
      image: Image4,
      url: "#",
      date: "2024-12-25",
    },
    {
      id: 5,
      title:
        "O‘zbekistonda birinchi marta suyak infarkti jarrohlik amaliyoti muvaffaqiyatli o‘tkazildi",
      description:
        "“Milliy tibbiyot markazi tarixda birinchi marta o‘ng son suyagi distal qismi suyak infarkti bo‘yicha murakkab jarrohlik amaliyotini muvaffaqiyatli amalga oshirdi.",
      fullDescription:`
      Bu jarrohlik operatsiyasi O‘zbekistonda ortopedik jarrohlik sohasidagi yangi bosqichni boshlab berdi va 
      tibbiyot tarixida muhim yutuq sifatida qayd etildi.

      Amaliyot davomida ortoped-jarrohlar suyakning qon bilan ta’minlanishini tiklab, nekroz jarayonining oldini olishga muvaffaq bo‘ldi. 
      Bu usul bemorning sog‘lig‘ini tiklashda va sog‘lom hayotga qaytishida katta ahamiyat kasb etadi. 
      Operatsiya natijasida bemor sog‘lig‘i tezda barqarorlashdi va uning harakatlanish imkoniyatlari qayta tiklandi.
      `,
      image: Image5,
      url: "#",
      date: "2024-12-29",
    },
    {
      id: 6,
      title:
        "O‘zbekistonda yangi yilning ilk kunida 1040 nafar chaqaloq tug‘ildi",
      description:
        "Eng ko‘p tug‘ilish Farg‘ona viloyatida, eng kami Navoiy viloyatida qayd etilgan. Tug‘ilganlar orasida yetti egizak bor.",
      fullDescription: `
        To'liq ma'lumot: O‘zbekistonda 2025 yil 1 yanvar soat 17:00 holatiga ko‘ra jami 1040 nafar chaqaloq dunyoga keldi, 
        deb xabar beradi Sog‘liqni saqlash vazirligi matbuot xizmati.
        Ularning 492 nafari o‘g‘il, 548 nafari qiz.
        Eng ko‘p tug‘ilish Farg‘ona viloyatida (154 nafar) qayd etilgan.`,
      image: Image6,
      url: "#",
      date: "2025-1-1",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setArticles(mockData);
      setLoading(false);
    }, 1500);
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id); 
  };

  return (
    <section className="bg-gray-100 pt-24 pb-6 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Yangiliklar
        </h1>
        {loading ? (
        <div className="fixed inset-0 flex justify-center items-center bg-white/50 backdrop-blur-sm z-50">
          <l-cardio
            size="250"
            stroke="5"
            speed="2"
            color="#17776a"
          ></l-cardio>
        </div>
        ) : (
          <div className="space-y-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row transition-shadow hover:shadow-xl"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full lg:w-1/3 h-64 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                      {article.title}
                    </h2>
                    <p className="text-sm text-gray-600 mb-4">
                      {article.description}
                    </p>
                    {expandedId === article.id && (
                      <p className="text-sm text-gray-800 mb-4">
                        {article.fullDescription}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <button
                      onClick={() => toggleExpand(article.id)}
                      className="bg-[#17776a] text-white px-4 py-2 rounded-lg hover:bg-[#115c52] transition-colors"
                    >
                      {expandedId === article.id ? "Yopish" : "Batafsil"}
                    </button>
                    <span className="flex items-center text-xs text-gray-500">
                      <FaCalendarAlt className="mr-1" />
                      {article.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsComponent;
