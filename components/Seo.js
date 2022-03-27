import React from "react";
import Head from "next/head";

export default function SEO({
  description = "Aprender BIM con los cursos más innovadores 🚀 Desarrolla tus habilidades en BIM!",
  author = "Lambda, Inc",
  meta,
  canonical = "https://lambda.com.pe/",
  title = "Lambda Ingeniería e innovación",
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
      content: previewImage,
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
      <link rel="canonical" href={canonical} />
      <meta
        property="og:site_name"
        content="Lambda Ingeniería e Innovación"
      ></meta>
      <meta property="og:image" content={previewImage} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content="Revit API, RevitAPI, Revit, BIM " />
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
