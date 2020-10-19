/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type SEOProps = {
  title?: string;
  description?: string;
  url?: string;
  author?: string;
  keywords?: string[];
  image?: string;
};

export function SEO(props: SEOProps) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          url
          keywords
          image
        }
      }
    }
  `);

  const { siteMetadata } = data.site;

  const { title, description, url, author, meta = [], keywords = [], image } = siteMetadata;
  const siteTitle = props.title || title;
  const siteDescription = props.description || description;
  const siteUrl = props.url || url;
  const siteAuthor = props.author || author;
  const siteImage = props.image || image;
  const siteKeywords = [...keywords, props.keywords].join(',');
  const metaData = [
    {
      name: 'canonical',
      content: siteUrl,
    },
    {
      name: 'description',
      content: siteDescription,
    },
    {
      name: 'image',
      content: siteImage,
    },
    {
      property: 'og:url',
      content: siteUrl,
    },
    {
      property: 'og:type',
      content: 'article',
    },
    {
      property: 'og:title',
      content: siteTitle,
    },
    {
      property: 'og:description',
      content: siteDescription,
    },
    {
      property: 'og:image',
      content: siteImage,
    },
    {
      name: 'twitter:card',
      content: siteImage,
    },
    {
      name: 'twitter:creator',
      content: siteAuthor,
    },
    {
      name: 'twitter:title',
      content: siteTitle,
    },
    {
      name: 'twitter:description',
      content: siteDescription,
    },
    {
      name: 'twitter:image',
      content: siteImage,
    },
    {
      name: 'keywords',
      content: siteKeywords,
    },
  ].concat(meta);

  return <Helmet htmlAttributes={{ lang: 'en' }} title={siteTitle} meta={metaData} />;
}
