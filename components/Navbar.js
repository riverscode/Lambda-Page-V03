import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(true);
  const handleClick = () => {
    setIsHidden(!isHidden);
  };
  return (
    <>
      <div className=" text-white border-b border-gray-600 ">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center ">
              <img
                src="/images/lambdaLogo.svg"
                alt="Logo"
                className="w-12 h-12"
              />
              <p className="ml-2 text-3xl font-semibold">Lambda</p>
            </a>
          </Link>
          <div className="hidden md:flex items-center justify-between">
            <div className="flex space-x-4  text-xl font-semibold ">
              <Link href="/">
                <a className="px-4 py-2 rounded hover:bg-slate-100/20">
                  Inicio
                </a>
              </Link>
              <Link href="/blog">
                <a className="px-4 py-2 rounded hover:bg-slate-100/20">Blog</a>
              </Link>
              <Link href="/cursos">
                <a className="px-4 py-2 rounded hover:bg-slate-100/20">
                  Cursos
                </a>
              </Link>
            </div>
          </div>
          <button className="h-6 w-6 md:hidden" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`flex justify-end bg-transparent px-6 py-2 ${
          isHidden ? "hidden" : ""
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-6 w-80 bg-slate-600/40 dark:bg-certificate rounded-md text-slate-400 font-semibold">
          <div className="flex justify-between items-center">
            <Link href="/">
              <a className="hover:text-purple-600  transition-all duration-300">
                Inicio
              </a>
            </Link>
            <button
              className="h-6 w-6 md:hidden self-end"
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <Link href="/blog">
            <a className="hover:text-purple-600  transition-all duration-300">
              Blog
            </a>
          </Link>
          <Link href="/cursos">
            <a className=" hover:text-purple-600  transition-all duration-300">
              Cursos
            </a>
          </Link>
          <div className="flex justify-between items-center border-t-2 border-gray-500/50 pt-4 ">
            <p>Contacto</p>
            <a
              href="http://wa.link/r4cdgi"
              target="_blank"
              rel="noreferrer"
              className=" px-4 py-1 flex items-center rounded-md bg-indigo-600  hover:bg-indigo-400 text-white"
            >
              <p className="mr-4">Whatsapp</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
