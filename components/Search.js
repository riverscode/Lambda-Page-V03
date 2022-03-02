import { getFilesMetadata } from "lib/mdx";

const Search = () => {
  return <div>Lista para buscar</div>;
};

export default Search;

export async function getStaticProps() {
  const courses = await getFilesMetadata("courses");
  return {
    props: {
      courses: courses,
    },
  };
}
