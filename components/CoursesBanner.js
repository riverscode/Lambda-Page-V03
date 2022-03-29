import Image from "next/image";
import ButtonWhatsapp from "./ButtonWhatsapp";

const CoursesBanner = () => {
  return (
    <div className="px-6 md:px-44 flex md:grid md:grid-cols-2 text-white pt-12">
      <div className="flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl  font-black bg-clip-text text-transparent bg-gradient-to-tr from-blue-700 to-violet-400 ">
          Cursos Premium para el sector construcción
        </h1>
        <p className="text-xl md:text-2xl  mt-8 font-light">
          Aprende de expertos en{" "}
          <span className="text-emerald-500 underline decoration-wavy font-bold">
            clases 100% online y en vivo.
          </span>{" "}
          ¡Prepárate para tu próximo reto profesional!
        </p>
        <ButtonWhatsapp />
        <p className=" font-light text-gray-300 mt-3 italic">
          Calidad 100% asegurada
        </p>
      </div>
      <div className="hidden md:flex md:flex-col md:justify-center ">
        <div className="w-5/6">
          <Image
            src="/images/CoursesBanner.png"
            alt="Banner de cursos Revit BIM"
            width={620}
            height={620}
          />
        </div>
      </div>
    </div>
  );
};

export default CoursesBanner;
