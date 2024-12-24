import Image from "../assets/News/Image.jpg";
import Image2 from "../assets/News/image2.jpg";
import Image3 from "../assets/News/image3.jpg";
import React, { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

interface NewsArticle {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  date: string;
}

const NewsComponent: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  // Example data: Replace with API call if needed
  const mockData: NewsArticle[] = [
    {
      id: 1,
      title: "Saida Mirziyoyeva Respublika ixtisoslashtirilgan ona va bola salomatligi markazi xodimlarini tabrikladi",
      description: "Prezident yordamchisining ma’lum qilishicha, yangi davlat dasturi doirasida ayollarni skrining tekshiruvidan o‘tkazish va qo‘llab-quvvatlash tizimi takomillashtiriladi.",
      image:Image,
      url: "#",
      date: "2024-12-23",
    },
    {
      id: 2,
      title: "Tibbiyot muassasasiga hisobga qo‘yishda davlat xizmatini ko‘rsatish reglamenti tasdiqlandi",
      description: "Vazirlar Mahkamasining “Jismoniy shaxslarni davlat tibbiyot muassasalariga hisobga qo‘yish bo‘yicha davlat xizmatini ko‘rsatishning ma’muriy reglamentini tasdiqlash to‘g‘risida”gi qarori qabul qilindi.",
      image: Image2,
      url: "#",
      date: "2024-12-22",
    },
    {
      id: 3,
      title: "O‘zbekistonning tibbiy va sog‘lomlashtirish turizmi brendi ishlab chiqiladi",
      description: "“Avitsenna” nomi ostida O‘zbekistonning tibbiy va sog‘lomlashtirish turizmi brendi ishlab chiqiladi.",
      image: Image3,
      url: "#",
      date: "2024-12-20",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setArticles(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="bg-[#f8f8fa] py-8 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-2xl text-center font-semibold mb-8">Yangiliklar</h1>
      {loading ? (
        <div className="text-center font-bold text-[#222020]">Yangiliklar yengilanmoqda </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 relative"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 pb-16">
                <h2 className="text-lg font-bold text-gray-800">{article.title}</h2>
                <p className="text-sm text-gray-600">{article.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gray-50 px-4 py-4 flex items-center justify-between border-gray-200">
                <a
                  href={article.url}
                  className="bg-[#17776a] font-medium border border-[#17776a] text-white px-2 py-1 rounded-lg hover:bg-[#115c52] transition-colors"
                >
                  Batafsil
                </a>
                <span className="text-xs text-gray-600 flex items-center space-x-1">
                  <FaCalendarAlt className="w-4 h-4" />
                  <span>{article.date}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default NewsComponent;
