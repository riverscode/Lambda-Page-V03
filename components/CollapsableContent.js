import { useState } from "react";

const CollapsableContent = ({
  color,
  title,
  number,
  description,
  children,
  image,
}) => {
  const [showContent, setShowContent] = useState(false);

  const onHandleClick = () => {
    setShowContent(!showContent);
  };
  return (
    <div className=" p-8 bg-slate-100 overflow-hidden text-left rounded shadow-lg shadow-blue-500/30 text-black mt-6">
      <div className=" flex flex-col-reverse md:grid md:grid-cols-5 md:gap-6">
        <div className=" col-span-3">
          <h3 className="font-bold text-3xl">{number}</h3>
          <h3 className={` text-2xl md:text-4xl font-semibold ${color} mt-2`}>
            {title}
          </h3>
          <h3 className="text-md md:text-xl mt-4">{description}</h3>
          <div className="transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <button
              onClick={onHandleClick}
              className="bg-blue-600 hover:bg-blue-400 text-white px-4 py-2 rounded mt-4 transition-all duration-300 "
            >
              {showContent ? "Ver menos" : "Ver más"}
            </button>
          </div>
        </div>
        <div className=" col-span-2 flex w-64 mb-8 md:mb-0 md:w-full ">
          <img
            src={`/images/IllustrationsThreeD/${image}.png`}
            alt="Icono del curso"
            className="w-64"
          />
        </div>
      </div>

      <div
        className={`bg-transparent overflow-hidden transition-all duration-500  ${
          showContent ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="mt-8 text-md md:text-xl divide-y-2 divide-blue-600/60 divide-dashed ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapsableContent;
