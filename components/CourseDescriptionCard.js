import dynamic from "next/dynamic";
import { useState } from "react";

const ModalVideo = dynamic(
  () => {
    return import("react-modal-video");
  },
  { ssr: false }
);

const CourseDescriptionCard = ({
  price,
  discount,
  duration,
  level,
  slug,
  videoID,
  videos,
  attached,
  projects,
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoID}
        onClose={() => setOpen(false)}
      />
      <div className="rounded-md shadow-lg shadow-teal-500/25 relative mt-4 md:mt-0">
        <div className="relative">
          <img
            className=" rounded-t-md"
            src={`/images/courses/${slug}.png`}
            alt="Video del curso"
          />
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            onClick={() => setOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                className=" fill-white opacity-80 hover:fill-green-500"
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <p className="line-through">Antes: {price}</p>
          <div className="flex items-center">
            <p className="font-black text-xl md:text-2xl">{`S/. ${Math.round(
              price * (1 - discount * 0.01)
            )}.00`}</p>
            <p className="bg-red-800 px-4 py-1 rounded font-bold ml-4  md:text-2xl">
              {discount} % dto.
            </p>
          </div>
          <p className="text-md md:text-xl font-bold mt-2">
            ¡La oferta esta apunto de terminar!
          </p>
          <button className="bg-blue-700 hover:bg-blue-500 w-full py-2 md:py-4 rounded md:rounded-lg mt-6">
            <a
              href="http://wa.link/r4cdgi"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-md md:text-xl"
            >
              Compralo Ahora
            </a>
          </button>
          <p className="font-bold mt-8 text-xl md:text-2xl underline underline-offset-4">
            Información del curso:
          </p>
          <div className="mt-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-6 md:w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="ml-2 text-md md:text-xl">Duración: {duration}</p>
            </div>

            <div className="flex items-center mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-6 md:w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <p className="ml-2 text-md md:text-xl">Nivel: {level}</p>
            </div>
            <div className="flex items-center mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-6 md:w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="ml-2 text-md md:text-xl">
                Certificados al terminar
              </p>
            </div>
            <div className="flex items-center mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-6 md:w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              <p className="ml-2 text-md md:text-xl">
                {videos} videos complementarios
              </p>
            </div>
            <div className="flex items-center mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-6 md:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
              <p className="ml-2 text-md md:text-xl">
                {attached} archivos adjuntos
              </p>
            </div>
            <div className="flex items-center mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-6 md:w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="ml-2 text-md md:text-xl">{projects} Proyectos</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDescriptionCard;
