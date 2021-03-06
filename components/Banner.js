import Image from "next/image";
import ButtonCourse from "./ButtonCourse";
import TecnologyItem from "./TecnologyItem";

const caracteristicas = [
  {
    text: "Cursos en vivo y de alta calidad con video HD y audios HQ",
    image: "clases",
  },
  {
    text: "Certificación oficial de Autodesk y Lambda",
    image: "certificate",
  },
  {
    text: "Material complementario de proyectos reales",
    image: "material",
  },
  {
    text: "Comunidad de apoyo privada",
    image: "telegram",
  },
];

const Banner = () => {
  return (
    <div>
      <div className="px-6 md:px-44 md:grid md:grid-cols-2 text-white pt-12 md:pt-24 gap-x-8">
        <div className=" flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl  font-black bg-clip-text text-transparent bg-gradient-to-tr from-blue-700 to-violet-400 ">
            Cursos innovadores
          </h1>
          <p className=" text-xl md:text-3xl mt-3">
            para profesionales del{" "}
            <span className="text-emerald-500 underline decoration-wavy font-bold">
              {" "}
              sector construcción
            </span>
          </p>

          <div className="bg-gradient-to-r from-gray-900/80 to-teal-900/60 rounded-md px-9 py-6 mt-12 space-y-6 shadow-lg shadow-teal-500/30">
            {caracteristicas.map((caracteristica, index) => {
              return (
                <div
                  className="flex flex-col md:flex-row items-center"
                  key={index}
                >
                  <div className="w-20">
                    <Image
                      src={`/images/${caracteristica.image}.png`}
                      alt={caracteristica.image}
                      width={100}
                      height={100}
                    />
                  </div>
                  <p className="text-md xl:text-xl text-center md:text-left md:ml-6 font-semibold">
                    {caracteristica.text}
                  </p>
                </div>
              );
            })}
          </div>
          <ButtonCourse />
          <p className=" font-light text-gray-300 mt-3 italic">
            Calidad 100% asegurada
          </p>
        </div>
        <div className="hidden md:flex md:flex-col md:justify-center ">
          <Image
            className="rounded-xl shadow-lg shadow-teal-500/30"
            src="/images/campus.png"
            width={800}
            height={600}
            alt="Interfaz del Campus BIM"
          />
        </div>
      </div>
      <div className="flex justify-around mt-16 max-w-7xl mx-auto px-6 md:px-0 ">
        <TecnologyItem tecnology="Revit" icon="revit" />
        <TecnologyItem tecnology="Dynamo" icon="dynamo" />
        <TecnologyItem tecnology="Python" icon="python" />
        <TecnologyItem tecnology="Csharp" icon="csharp" />
        <TecnologyItem tecnology="Forge" icon="forge" />
      </div>
    </div>
  );
};

export default Banner;
