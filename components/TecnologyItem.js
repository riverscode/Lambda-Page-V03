import Image from "next/image";

const TecnologyItem = ({ tecnology, icon }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-6 h-6 md:w-12 md:h-12">
        <Image
          src={`/images/tecnology/${icon}.png`}
          alt={`Tecnología BIM ${tecnology}`}
          width={80}
          height={80}
        />
      </div>
      <p className="text-white font-semibold mt-4 text-sm ">{tecnology}</p>
    </div>
  );
};

export default TecnologyItem;
