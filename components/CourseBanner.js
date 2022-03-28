import ButtonWhatsapp from "components/ButtonWhatsapp";
import LambdaTag from "components/LambdaTag";

const CourseBanner = ({
  categories,
  title,
  teacher,
  summary,
  instructorCode,
}) => {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-5 gap-5 md:gap-16 pt-16 rounded-md px-6 md:px-0">
      <div className="flex flex-col mx-auto md:col-span-3 md:row-start-auto max-w-screen-2xl">
        <div className="flex">
          {categories.map((category, i) => {
            return <LambdaTag key={i}>{category}</LambdaTag>;
          })}
        </div>
        <h1 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tighter md:text-left md:mt-0">
          {title}
        </h1>
        <div className="flex flex-col my-6 space-y-2 items-start">
          <div>
            <div className="flex flex-shrink-0">
              <img
                className="sm:w-10 sm:h-10 w-8 h-8 rounded-full flex-shrink-0"
                src={`/images/instructor/${instructorCode}.png`}
                alt={`Profesor ${teacher}`}
              />
              <div className="sm:pl-2 pl-1 flex flex-col justify-center">
                <h4 className="text-gray-700 dark:text-gray-400 text-sm leading-tighter">
                  Instructor
                </h4>
                <p className="flex hover:underline flex-shrink-0">{teacher}</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-100 text-md md:text-xl">{summary}</p>
        <div>
          <ButtonWhatsapp />
          <p className=" font-light text-gray-300 mt-3 italic">
            Calidad 100% asegurada
          </p>
        </div>
      </div>
      <div className="hidden md:flex md:flex-col md:justify-center md:col-span-2">
        <img src="/images/certificate.png" alt="Imagen del curso" />
      </div>
    </div>
  );
};

export default CourseBanner;
