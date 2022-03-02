const ClassResourse = ({ type, text, link }) => {
  return (
    <div className="flex items-center py-2">
      <img
        src={`/svg/icons/${type}.svg`}
        alt={type}
        className="w-8 h-8 p-1 rounded-full bg-blue-600"
      />
      <a href={link} className="ml-2 text-md ">
        {text}
      </a>
    </div>
  );
};

export default ClassResourse;
