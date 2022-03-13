import Link from "next/link";

//  TODO: Mejorar el footer
const redesSociales = [
  { icon: "youtube", link: "https://www.youtube.com/c/RiversCode" },
  { icon: "instagram", link: "https://www.instagram.com/lambda_innovacion/" },
  { icon: "github", link: "https://github.com/riverscode" },
  { icon: "facebook", link: "https://www.facebook.com/LambdaInnovacion" },
  { icon: "linkedin", link: "https://www.linkedin.com/company/lambdacursos" },
];

const Footer = () => {
  return (
    <>
      <div className=" border-b-2 border-gray-600 pb-4">
        <div className="flex justify-start max-w-7xl m-auto">
          <img src="/images/lambdaLogo.svg" alt="Logo" />
          <p className="ml-2 text-2xl font-semibold text-white">Lambda</p>
        </div>
      </div>
      <div className="flex text-gray-400 mt-8 justify-between max-w-7xl mx-auto">
        <div>
          <p className="text-2xl font-bold mb-5">Contenido</p>
          <ul>
            <li>
              <Link href="/cursos">
                <a className="text-md">🏗️ Cursos</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className="text-md">🏗️ Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/cursos/programa-dynamo-python-csharp">
                <a className="text-md">⭐ Revit API</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-2xl font-bold  mb-5">Contacto</p>
          <ul>
            <li>
              <Link href="/cursos">
                <a className="text-md">📞 +51 949 576 497</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className="text-md inline-block">
                  💌 Informes@lambda.com.pe
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center flex justify-around mt-6 px-6 max-w-3xl mx-auto">
        {redesSociales.map((redSocial, index) => {
          return (
            <a href={redSocial.link} key={index}>
              <img
                src={`/images/redes/${redSocial.icon}.svg`}
                alt={redSocial.icon}
              />
            </a>
          );
        })}
      </div>
      <p className="text-white mt-6 text-center text-md ">
        Desde Lambda con
        <span className="text-red-900"> ♥ </span>para profesionales AEC
      </p>
    </>
  );
};

export default Footer;
