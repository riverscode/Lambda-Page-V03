import CustomImage from "components/CustomImage";

export const MDXBlogComponets = {
  img: (props) => <CustomImage {...props} />,
  h3: (props) => (
    <h3 className="text-3xl mt-6 font-bold underline" {...props} />
  ),
  h4: (props) => (
    <h4 className="text-3xl mt-6 font-bold underline" {...props} />
  ),
  a: (props) => (
    <a
      className="text-emerald-500 underline decoration-wavy font-bold hover:text-emerald-300"
      {...props}
    />
  ),
  p: (props) => <p className="text-md md:text-xl mt-6" {...props} />,
};
