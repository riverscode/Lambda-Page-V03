import Image from "next/image";

const FeactureItem = ({ icon, content }) => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="w-20">
        <Image
          src={`/images/IconsThreeD/${icon}.png`}
          alt={icon}
          width={80}
          height={80}
        />
      </div>
      <p className="text-md md:text-xl text-center md:text-left md:ml-6">
        {content}
      </p>
    </div>
  );
};

export default FeactureItem;
