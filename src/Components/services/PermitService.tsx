import NotFound from "../../assets/Icons/certificate-not-found.svg";
function PermitService() {
  return (
    <div className="flex flex-col items-center text-center mt-8">
      <img className="flex justify-end items-center" src={NotFound} alt="Not Found" />
      <p className="text-black font-semibold mt-4">Faol xizmat mavjud emas</p>
    </div>
  );
}

export default PermitService;
