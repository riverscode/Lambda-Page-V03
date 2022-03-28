const CustomImage = (props) => {
  return (
    <div className=" flex justify-center p-8 custom-box-shadow bg-black mb-6">
      <img {...props} className="rounded-lg" alt="Resaltado" />
    </div>
  );
};

export default CustomImage;
