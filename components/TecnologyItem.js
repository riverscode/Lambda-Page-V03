const TecnologyItem = ({ tecnology, icon }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={`/images/tecnology/${icon}.png`}
        alt="revit icon"
        className="w-6 h-6 md:w-12 md:h-12"
      />
      <p className="text-white font-semibold mt-4 text-sm ">{tecnology}</p>
    </div>
  );
};

export default TecnologyItem;
