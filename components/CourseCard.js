import Link from "next/link";

const CourseCard = ({
  title,
  duration,
  teacher,
  price,
  discount,
  finalPrice,
  slug,

}) => {
  return (
    <div className="rounded-md shadow-lg shadow-teal-500/25">
      <Link href={`/cursos/${slug}`}>
        <a>
          <img
            src={`/images/courses/${slug}.png`}
            alt=""
            className="w-full h-auto object-cover rounded-t-md"
          />
          <div className="p-4">
            <div className="flex justify-between">
              <p className="font-bold">{teacher}</p>
              <p className="rounded-sm bg-emerald-700/80 px-2 font-bold shadow-lg shadow-teal-600/10">
                {duration}
              </p>
            </div>
            <div className="h-32 ">
              <p className="text-left font-semibold mt-8 md:text-2xl">{title}</p>
            </div>
            <div className="flex">
              <p className=" font-light line-through text-gray-400 ">
                {price}{" "}
              </p>
              <span className="text-red-500 font-medium ml-3">{discount}</span>
            </div>
            <div className="font-semibold text-sm mt-3 bg-blue-700 rounded-md px-2 py-2 flex items-center w-32">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <p className="ml-3">{finalPrice}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CourseCard;
