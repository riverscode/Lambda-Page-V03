import FeactureItem from "./FeactureItem";
import Title from "./Title";

const features = [
  {
    icon: "certificate",
    content:
      "Valida tus conocimientos con certificados a nombre de Autodesk y Lambda.",
  },
  {
    icon: "folder",
    content:
      "Ten acceso a recursos exclusivos de Lambda Ingeniería e Innovación.",
  },
  {
    icon: "books",
    content: "Lleva a la practica tus conocimientos con proyectos reales.",
  },
  {
    icon: "hand",
    content:
      "Participa en una plataforma donde tus dudas seran resueltas de manera clara y efectiva.",
  },
  {
    icon: "idea",
    content:
      "Contenido estructurado para cumplir con objetivos de impulsar tu carrera en el sector construcción.",
  },
];

const Feactures = () => {
  return (
    <div className="px-6 md:px-0 mt-24 md:mt-32 max-w-7xl mx-auto text-white flex flex-col justify-center  ">
      <Title title="La experiencia de proyectos reales en una sola plataforma" />
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900/80 to-teal-900/60 rounded-md px-9 py-6 mt-12 space-y-6 shadow-lg shadow-teal-500/30">
        {features.map((feature, index) => {
          return (
            <FeactureItem
              icon={feature.icon}
              content={feature.content}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Feactures;
