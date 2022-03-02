import { getFilesMetadata } from "lib/mdx";

import CoursesBanner from "components/CoursesBanner";
import Layout from "components/Layout";
import SEO from "components/Seo";
import CoursesList from "components/CoursesList";

const cursos = ({ courses }) => {
  return (
    <>
      <Layout>
        <SEO title="Cursos BIM - Lamda Ingeniería & Innovación" />
        <header>
          <CoursesBanner />
          <CoursesList courses={courses} />
        </header>
      </Layout>
    </>
  );
};

export default cursos;

export async function getStaticProps() {
  const courses = await getFilesMetadata("courses");
  return {
    props: {
      courses: courses,
    },
  };
}
