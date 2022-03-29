import Image from "next/image";

const ClassResourse = ({ type, text, link }) => {
  return (
    <div className="flex items-center py-2   ">
      <div className="w-8 h-8 bg-blue-600 rounded-full p-1" >
        <Image
          src={`/svg/icons/${type}.svg`}
          alt={type}
          height={24}
          width={24}
        />
      </div>
      <a href={link} className="ml-2 text-md ">
        {text}
      </a>
    </div>
  );
};

export default ClassResourse;
