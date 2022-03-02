const FeactureItem = ({ icon, content }) => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <img
        src={`/images/IconsThreeD/${icon}.png`}
        alt={icon}
        className="w-20"
      />
      <p className="text-md md:text-xl text-center md:text-left md:ml-6">
        {content}
      </p>
    </div>
  );
};

export default FeactureItem;
