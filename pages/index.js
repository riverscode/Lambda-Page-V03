import { getFilesMetadata } from "lib/mdx";
import Layout from "components/Layout";
import SEO from "components/Seo";
import Banner from "components/Banner";
import Certificate from "components/Certificate";
import Feactures from "components/Feactures";
import FrequentlyQuestions from "components/FrequentlyQuestions";
import OurCourses from "components/OurCourses";

export default function Home({ courses }) {
  return (
    <>
      <Layout>
        <SEO title="Lambda: &lrm;Cursos BIM Online Profesionales de Construcción" />
        <header>
          <Banner />
        </header>
        <main>
          <OurCourses courses={courses} />
          <Certificate />
          <Feactures />
          <FrequentlyQuestions />
          {/* TODO: Formulario de Contacto */}
          {/* TODO: Seccion de Blog */}
          {/* TODO: Seccion de Profesores */}
          {/* TODO: Beca Lambda para estudiantes */}
          {/* TODO: Testimonio de usuario */}
          {/* TODO: Metodologia de trabajo (https://www.datacamp.com/) */}
          {/* TODO: Categoria de cursos */}
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const courses = await getFilesMetadata("courses");
  return {
    props: {
      courses: courses,
    },
  };
}
