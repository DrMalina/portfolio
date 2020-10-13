import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import divingImg from '../assets/scuba-diving.svg';
import { SectionHeading } from './SectionHeading';
import Abbr from './Abbr';
import { MeQuery } from '../../graphql-types';

type ListItemProps = {
  text: string;
};

function ListItem({ text }: ListItemProps) {
  let body;

  if (text.includes('HTML')) {
    body = (
      <span>
        <Abbr text="HTML" /> + <Abbr text="CSS" />
      </span>
    );
  } else {
    body = <span>{text}</span>;
  }

  return (
    <li className="flex items-center mt-1">
      <svg
        aria-hidden="true"
        className="fill-current text-primary-500 w-2 h-2 mr-1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.19.04v5.38l5.62-2.7L.19.05z" />
      </svg>
      {body}
    </li>
  );
}

function TechnologyStack() {
  return (
    <>
      <h3 className="md:mt-12 mt-16 mb-3">Technologies I&apos;ve worked with:</h3>
      <ul className="md:w-3/4 w-full pl-2 list-none list-inside grid grid-cols-2 mb-12">
        <ListItem text="HTML + CSS" />
        <ListItem text="Javascript" />
        <ListItem text="Typescript" />
        <ListItem text="Node.js" />
        <ListItem text="React + Redux" />
        <ListItem text="Gatsby.js" />
        <ListItem text="GraphQL" />
      </ul>
    </>
  );
}

function Introduction() {
  return (
    <>
      <p>
        Hello there{' '}
        <span className="ml-1" role="img" aria-label="waving hand">
          👋
        </span>
      </p>
      <p className="md:mt-2 mt-4">
        I’m <span className="font-bold">Maciej Malinowski</span>, a self-taught web developer from
        Wrocław, Poland.
      </p>
      <p className="md:mt-4 mt-10">
        As a student majoring in business, I have discovered an interest in programming during my
        semester abroad in the <Abbr title="United Kingdom" text="UK" />. Since then, I have been
        focusing on <span className="font-bold">web technologies</span>, enhancing my coding skills
        by taking many courses and building a variety of projects - most of them are personal
        although I have some experience with{' '}
        <span className="underline">commercial and collaborative tasks.</span>
      </p>
    </>
  );
}

function FunFact() {
  return (
    <>
      <h3 className="md:mt-0 mt-4 inline-block border-l-4 border-primary-500 pl-2">
        Fun fact about me
      </h3>
      <div className="flex flex-wrap items-center">
        <p className="md:mt-4 mt-6 w-full italic">
          Besides programming, my other hobby is <span className="font-medium">diving</span> - since
          2018 I have been a certfified <Abbr text="OW" title="Open Water" /> diver which allows me
          to go and explore the underwater world in my free time.
        </p>
        <img className="ml-auto md:mt-4 md:pr-0 pr-2 w-12 h-12" src={divingImg} alt="" />
      </div>
    </>
  );
}

function Summary() {
  return (
    <div className="flex flex-col justify-center max-w-sm mx-auto md:order-none order-first text-justify">
      <Introduction />
      <TechnologyStack />
      <FunFact />
    </div>
  );
}

export function AboutMe() {
  const data = useStaticQuery<MeQuery>(graphql`
    query Me {
      file(name: { eq: "hiking-cmp" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section
      id="about"
      className="text-gray-700 md:mt-20 mt-16 lg:max-w-5xl container mx-auto px-5 py-5"
    >
      <SectionHeading heading="About me" />
      <div className="sm:mt-24 mt-12 grid md:grid-cols-2 grid-cols-none lg:gap-20 gap-4">
        <div className="ml-auto mr-auto md:mt-1 mt-2 lg:max-w-md max-w-sm w-full">
          <Img
            className="rounded-md"
            fluid={data?.file?.childImageSharp?.fluid as FluidObject}
            alt="Me, standing on a mountain summit during summer. In the background there are other mountains, all covered in trees."
          />
        </div>
        <Summary />
      </div>
    </section>
  );
}
