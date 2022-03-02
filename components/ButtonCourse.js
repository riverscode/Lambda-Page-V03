import Link from "next/link";

const ButtonCourse = () => {
  return (
    <Link href="/cursos">
      <a className=" w-80 flex items-center px-4 py-3 text-xl font-bold border-2 border-emerald-600 hover:bg-emerald-500/30 transition-colors duration-200 ease-in-out rounded mt-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            className="fill-emerald-500"
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <p className="ml-2 text-emerald-500 ">Explora Nuestros Cursos</p>
      </a>
    </Link>
  );
};

export default ButtonCourse;
