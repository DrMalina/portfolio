import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import cx from 'classnames';
import { ConditionalWrapper } from './ConditionalWrapper';
import IconGithub from '../assets/github.svg';
import IconLink from '../assets/external-link.svg';
import { GatsbyImageSharpFluidFragment } from '../../graphql-types';

type Website = string;
type Title = string;
type Tags = string[];

type SingleProjectProps = {
  title: Title;
  tags: Tags;
  website: Website;
  github: Website;
  body: string;
  img: GatsbyImageSharpFluidFragment;
};

type ProjectTagsProps = {
  tags: Tags;
};

function ProjectTags({ tags = [] }: ProjectTagsProps) {
  return (
    <>
      <svg
        aria-hidden="true"
        className="fill-current text-primary-500 w-2 h-2 mr-1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.19.04v5.38l5.62-2.7L.19.05z" />
      </svg>
      <ul className="flex text-sm">
        {tags.map((tag, idx) => (
          <li key={tag} className={cx({ 'ml-2': idx !== 0 })}>
            {tag}
          </li>
        ))}
      </ul>
    </>
  );
}

type ProjectLinksProps = {
  website: Website;
  github: Website;
  title: Title;
};

function ProjectLinks({ website, github, title }: ProjectLinksProps) {
  return (
    <div className="flex ml-auto">
      <a className="p-3" href={github}>
        <img className="w-6 h-6" src={IconGithub} alt={`Github repository of ${title}`} />
      </a>
      <ConditionalWrapper
        condition={!!website}
        wrapper={(children) => (
          <a href={website} className="p-3">
            {children}
          </a>
        )}
        fallback={(children) => (
          <button type="button" disabled className="p-3 cursor-not-allowed opacity-50">
            {children}
          </button>
        )}
      >
        <img
          className="w-6 h-6"
          src={IconLink}
          alt={website ? `Live version of ${title}` : title}
        />
      </ConditionalWrapper>
    </div>
  );
}

export function SingleProject({ title, body, tags, website, github, img }: SingleProjectProps) {
  const projectCx = 'rounded-md h-64 overflow-hidden border border-gray-400';
  return (
    <li className="w-full">
      <article className="h-full flex flex-col">
        <ConditionalWrapper
          condition={!!website}
          wrapper={(children) => (
            <a href={website} className={projectCx}>
              {children}
            </a>
          )}
          fallback={(children) => <div className={projectCx}>{children}</div>}
        >
          <Img
            className={cx('object-cover object-center h-full w-full', {
              'cursor-not-allowed': !website,
            })}
            fluid={img as FluidObject}
            alt={website ? `Live version of ${title}` : title}
          />
        </ConditionalWrapper>
        <h3 className="text-xl text-gray-800 font-medium mt-5">{title}</h3>
        <div className="flex-1 leading-relaxed text-sm mt-2">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        <div className="md:mt-6 mt-10 flex md:flex-no-wrap flex-wrap items-center">
          <ProjectTags tags={tags} />
          <ProjectLinks website={website} github={github} title={title} />
        </div>
      </article>
    </li>
  );
}
