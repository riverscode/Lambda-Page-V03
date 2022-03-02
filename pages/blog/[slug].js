import Layout from "components/Layout";
import { MDXBlogComponets } from "components/MDXBlogComponets";
import SEO from "components/Seo";
import { MDXRemote } from "next-mdx-remote";
import { getFiles, getFilesBySlug } from "lib/mdx";
import BlogHeader from "components/BlogHeader";
import SubscriptionCard from "components/SubscriptionCard";
import { FacebookProvider, Comments } from "react-facebook";
import Link from "next/link";
const BlogItem = ({ source, frontmatter }) => {
  const { title, publishedAt, tags, readingTime, slug } = frontmatter;

  return (
    <>
      <Layout>
        <SEO title={`Blog - ${title}`} />
        <div className="flex flex-col max-w-7xl mx-auto text-white">
          <div className="flex flex-col md:grid md:grid-cols-12 md:gap-12 mt-16">
            <div className="md:col-span-8 px-6 md:px-0">
              <BlogHeader
                title={title}
                publishedAt={publishedAt}
                tags={tags}
                readingTime={readingTime}
              />
              <div className="mt-12">
                <MDXRemote {...source} components={MDXBlogComponets} />
              </div>
            </div>
            <div className="md:col-span-4 px-6 md:px-0">
              <SubscriptionCard />
            </div>
          </div>
        </div>
        <div className="px-6 md:px-0 mt-16 bg-white py-16">
          <div className=" rounded-2xl  max-w-7xl mx-auto">
            <p className="text-3xl md:text-5xl text-center font-black  underline decoration-wavy mb-8 text-blue-700">
              Deja tus comentarios
            </p>
            <FacebookProvider appId="1090833335084068">
              <Comments
                href={`https://lambda.com.pe/blog/${slug}`}
                width="100%"
              />
            </FacebookProvider>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <Link href="/blog">
            <a className="w-80 flex items-center px-4 py-3 text-xl font-bold border-2 border-green-600 hover:bg-green-500/30 transition-colors duration-200 ease-in-out rounded mt-12 cursor-pointer text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
              </svg>
              <p className="ml-4">Todos nuestros artículos</p>
            </a>
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default BlogItem;

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFilesBySlug(params.slug, "posts");
  return {
    props: {
      source,
      frontmatter,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getFiles("posts");
  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.replace(/\.mdx/, ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
