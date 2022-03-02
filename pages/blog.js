import BlogList from "components/BlogList";
import Layout from "components/Layout";
import SEO from "components/Seo";
import { getFilesMetadata } from "lib/mdx";

const blog = ({ blogs }) => {
  return (
    <>
      <Layout>
        <SEO title="Blog - Lamda Ingeniería & Innovación" />
        <BlogList blogs={blogs} />
      </Layout>
    </>
  );
};

export default blog;

export async function getStaticProps() {
  const blogs = await getFilesMetadata("posts");
  return {
    props: {
      blogs: blogs,
    },
  };
}
