import CountDown from "./CountDown";
const PromotionHeader = () => {
  return (
    <div className=" bg-gradient-to-r from-blue-600  to-purple-900">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 py-3">
        <p className="text-sm font-semibold text-gray-100 text-center md:text-left">
          ¡Aprovecha hoy! Domina la API de Revit con 50% dto. 🚀
        </p>
        <div className="flex flex-col md:flex-row items-center ">
          <div className="mt-4 md:mt-0">
            <CountDown date={new Date("03/02/2022 23:59:59")} />
          </div>
          <a
            href="http://wa.link/r4cdgi"
            target="_blank"
            className=" px-3 py-1 ml-5 mt-4 md:mt-0 rounded-md bg-blue-600  hover:bg-blue-400 text-white text-sm hover:-translate-y-1 transition ease-out  duration-300 hover:scale-105 shadow-lg shadow-blue-700/30"
          >
            Contacto Directo
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromotionHeader;
