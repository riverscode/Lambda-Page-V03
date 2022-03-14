import { getFiles, getFilesBySlug } from "lib/mdx";
import Layout from "components/Layout";
import SEO from "components/Seo";
import CourseBanner from "components/CourseBanner";
import { useState } from "react";
import { MDXRemote } from "next-mdx-remote";
import { MDXCoursesComponents } from "components/MDXCoursesComponents";
import CourseDescriptionCard from "components/CourseDescriptionCard";
import SubscriptionCard from "components/SubscriptionCard";

const Curso = ({
  source,
  frontmatter: {
    title,
    summary,
    teacher,
    slug,
    discount,
    duration,
    level,
    price,
    videoID,
    startDate,
    categories,
    videos,
    attached,
    projects,
  },
}) => {
  return (
    <>
      <Layout>
        <SEO title="Blog - Lambda Ingeniería & Innovación" />

        <div className="max-w-7xl m-auto text-gray-300 ">
          <CourseBanner
            categories={categories}
            title={title}
            teacher={teacher}
            summary={summary}
          />

          <div className="w-full flex flex-col-reverse rounded-md md:grid  md:grid-cols-12 md:gap-16 pt-12 px-6 md:px-0  ">
            <div className="flex flex-col w-full h-full mx-auto md:col-span-8 md:row-start-auto max-w-screen-2xl mt-16 md:mt-0">
              <p className="text-3xl md:text-4xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-tr from-blue-700 to-violet-400 pb-2">
                Nuestro contenido innovador
              </p>

              <MDXRemote {...source} components={MDXCoursesComponents} />
            </div>

            <div className="col-span-4">
              <CourseDescriptionCard
                videoID={videoID}
                slug={slug}
                price={price}
                discount={discount}
                duration={duration}
                level={level}
                videos={videos}
                attached={attached}
                projects={projects}
              />
              <div className="mt-16 hidden md:flex">
                <SubscriptionCard />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Curso;

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFilesBySlug(params.slug, "courses");
  return {
    props: {
      source,
      frontmatter,
    },
  };
}

export async function getStaticPaths() {
  const courses = await getFiles("courses");
  const paths = courses.map((course) => {
    return {
      params: {
        slug: course.replace(/\.mdx/, ""),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
