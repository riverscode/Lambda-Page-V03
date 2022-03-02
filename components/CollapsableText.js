const CollapsableText = ({ question, children }) => {
  return (
    <div className="relative overflow-hidden text-left rounded-sm md:rounded shadow-lg shadow-blue-500/30 ">
      <input
        type="checkbox"
        className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer-checked:"
      />
      <div className="bg-gradient-to-l from-blue-600 to-blue-900 h-12 w-full px-2 md:pl-5 flex items-center">
        <img src="/images/flash.png" alt="" className="w-6 h-6 md:w-8 md:h-8" />
        <h3 className="text-md md:text-xl ml-4 font-semibold">{question}</h3>
      </div>
      <div className=" absolute top-6 md:top-3 right-3 md:right-6 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
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
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <div className="bg-transparent overflow-hidden transition-all duration-500  max-h-0 peer-checked:max-h-screen">
        <div className="p-7 text-md md:text-xl ">{children}</div>
      </div>
    </div>
  );
};

export default CollapsableText;
