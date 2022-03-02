import { formatDate } from "lib/formatDate";
import LambdaTag from "components/LambdaTag";
import Link from "next/link";

export default function BlogCard({
  title,
  publishedAt,
  readingTime,
  tags,
  slug,
}) {
  return (
    <div className=" flex flex-col rounded-md shadow-lg shadow-teal-500/25 hover:-translate-y-1 transition ease-out  duration-300 hover:scale-105">
      <Link href={`/blog/${slug}`}>
        <a>
          <img
            src={`/images/posts/${slug}/cover.png`}
            alt="image"
            className="w-full h-auto object-cover rounded-t-md"
          />
          <div className="p-6">
            <div className="flex">
              {tags.map((tag, i) => {
                return <LambdaTag key={i}>{tag}</LambdaTag>;
              })}
            </div>
            <h2 className="text-xl font-bold text-left hover:text-lambda h-24 mt-4">
              {title}
            </h2>
            <div className="flex mb-3 justify-between">
              <div className="flex justify-center items-center">
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
                <p className="ml-2">{formatDate(publishedAt)}</p>
              </div>
              <div className="flex justify-center items-center">
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
                <p className="ml-2">{readingTime}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
