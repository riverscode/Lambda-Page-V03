import Image from "next/image";
import ButtonCourse from "./ButtonCourse";
const Certificate = () => {
  return (
    <div className="px-6 md:px-0 mt-24 md:mt-32 bg-blue-600 py-16  text-white bg-gradient-to-bl from-blue-600  to-purple-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold max-w-2xl mx-auto text-center ">
          Certifica tus conocimientos con Autodesk y Lambda Ingeniería e
          Innovación
        </h2>

        <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-x-24 text-xl md:text-3xl mt-16  ">
          <div className="flex flex-col justify-center items-center">
            <p className=" mt-8 md:mt-0">
              Todos nuestros cursos incluyen certificación de estudio oficial de{" "}
              <span className="text-emerald-500 underline decoration-wavy font-bold">
                Autodesk y Lambda Ingeniería e innovación{" "}
              </span>
              verificable a nivel internacional.
            </p>
            <p className="mt-8">
              {" "}
              Nuestros alumnos certificados tienen acceso a nuestra plataforma
              de insignias para compartir en{" "}
              <span className="text-emerald-500 underline decoration-dashed font-bold">
                {" "}
                LinkedIn.
              </span>
            </p>
            <div className="flex justify-start w-full">
              <ButtonCourse />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-80 md:w-96">
              <Image
                src="/images/autodeskCertificate.png"
                alt="Certificado Autodesk"
                width={700}
                height={450}
                className="rounded-md"
              />
            </div>
            <div className="w-80 md:w-96 md:self-end mt-4 ">
              <Image
                src="/images/lambdaCertificate.png"
                alt="Certificado Lambda"
                width={700}
                height={450}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
