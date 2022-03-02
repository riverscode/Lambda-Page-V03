const Title = ({ title }) => {
  return (
    <h2 className="text-3xl md:text-5xl font-extrabold max-w-2xl mx-auto text-center bg-clip-text text-transparent bg-gradient-to-tr from-blue-700 to-violet-400 pb-2">
      {title}
    </h2>
  );
};

export default Title;
