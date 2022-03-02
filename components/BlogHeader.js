import LambdaTag from "components/LambdaTag";

const BlogHeader = ({ title, publishedAt, tags, readingTime }) => {
  return (
    <div className=" border-b-2 pb-4 border-dashed border-gray-400">
      <div className="flex mt-2">
        {tags.map((tag, i) => {
          return <LambdaTag key={i}>{tag}</LambdaTag>;
        })}
      </div>
      <h1 className=" text-4xl md:text-6xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-tr from-blue-700 to-violet-400">
        {title}
      </h1>

      <div className="flex justify-between mt-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
          <p className="ml-2">{publishedAt}</p>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          <p className="ml-2">{readingTime.text}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
