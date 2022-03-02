const ClassTitle = ({ children }) => {
  return (
    <div className="flex mt-4 items-end">
      <img src="/svg/icons/class.svg" alt="Icono de Clase" />
      <p className="text-xl font-bold ml-2">{children}</p>
    </div>
  );
};

export default ClassTitle;
