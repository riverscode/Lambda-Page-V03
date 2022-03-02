import React from "react";
import Head from "next/head";

export default function SEO({
  description = "Aprender BIM con los cursos mas innovadores 🚀 Desarrolla tus habilidades en BIM!",
  author = "Lambda, Inc",
  meta,
  title = "Lambda Ingenieria e innovacion",
  previewImage = "https://res.cloudinary.com/lambda-ingenier-a-e-innovaci-n/image/upload/v1641850100/lambda-ogimage_mbrwai.webp",
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },

    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:image" content={previewImage} />
      <meta property="og:title" content="Lambda: Los Mejores cursos BIM." />
      <meta property="og:description" content={description} />
      <meta name="keywords" content="Revit, BIM, Revit API" />
      <meta name="author" content="@RiversCode" />
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `es`,
  meta: [],
};
