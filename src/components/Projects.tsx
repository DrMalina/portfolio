import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Link from './Link';
import { SectionHeading } from './SectionHeading';
import { SingleProject } from './SingleProject';
import { GatsbyImageSharpFluidFragment, ProjectsQuery } from '../../graphql-types';

export function Projects() {
  const data = useStaticQuery<ProjectsQuery>(graphql`
    query Projects {
      allMdx(sort: { order: ASC, fields: frontmatter___id }) {
        edges {
          node {
            frontmatter {
              id
              title
              tags
              website
              github
              image {
                childImageSharp {
                  fluid(maxWidth: 510, quality: 75) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            body
          }
        }
      }
    }
  `);

  return (
    <section
      className="text-gray-700 lg:max-w-5xl container md:mt-24 mt-16
     mx-auto px-5 py-16"
    >
      <header>
        <SectionHeading heading="Projects" />
        <p className="md:mt-24 mt-12 mx-auto md:max-w-md max-w-sm">
          Here are some of the things I&apos;ve built. If you want to see more examples, or peek
          inside the code,{' '}
          <Link href="https://github.com/DrMalina" text="visit my Github profile." />
        </p>
      </header>
      <ul className="md:mt-32 mt-24 md:max-w-full max-w-sm mx-auto grid md:grid-cols-2 grid-cols-none gap-x-20 gap-y-24">
        {data.allMdx.edges.map((project, idx) => {
          return (
            <SingleProject
              key={project.node.frontmatter?.id || idx}
              title={project.node.frontmatter?.title || ''}
              body={project.node.body}
              tags={project.node.frontmatter?.tags as string[]}
              website={project.node.frontmatter?.website || ''}
              github={project.node.frontmatter?.github || ''}
              img={
                project.node.frontmatter?.image?.childImageSharp
                  ?.fluid as GatsbyImageSharpFluidFragment
              }
            />
          );
        })}
      </ul>
    </section>
  );
}
