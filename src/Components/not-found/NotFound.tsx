import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <section className="bg-[#f8f8f8]">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-32 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 text-[#17776a]">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-[#17776a]">Kechirasiz.</p>
            <p className="mb-4 text-lg font-light text-[#17776a] ">Biz bu sahifani topa olmadik. Bosh sahifadan ko'p narsalarni topasiz.</p>
            <Link to="/" className="bg-[#17776a] my-8 text-sm md:text-base font-medium border border-[#17776a] text-white px-4 md:px-6 py-2 rounded-xl hover:bg-[#115c52] transition-colors">
              Bosh Sahifaga qaytish →
            </Link>
        </div>   
    </div>
</section>
  )
}

export default NotFound