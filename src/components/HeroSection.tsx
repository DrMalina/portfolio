import React from 'react';
import heroImg from '../assets/hero-img.svg';
import iconRocket from '../assets/rocket.svg';

export function HeroSection() {
  return (
    <section id="home" className="lg:pt-10 md:pt-24 pt-10 text-gray-700">
      <div className="xl:max-w-6xl container mx-auto flex px-5 md:py-24 py-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 mb-24 items-center text-center">
          <h1 className="sm:text-6xl leading-tight text-5xl mb-4 font-bold text-gray-900">
            Hey, <br aria-hidden="true" className="xl:hidden lg:block hidden" />
            I&apos;m Maciej!
          </h1>
          <p className="w-full sm:mb-16 mb-6 lg:pr-0 md:pr-10 sm:px-0 px-12 leading-relaxed">
            A front-end developer that likes to learn and create new things
            <img
              className="sm:inline-block block mx-auto sm:m-0 sm:ml-4 mt-4 sm:w-8 sm:h-8 w-10 h-10"
              src={iconRocket}
              alt=""
            />
          </p>
          <div className="flex xl:flex-row flex-col justify-center">
            <a
              href="#about"
              className="inline-flex text-white bg-primary-500 border-0 py-2 px-6 hover:bg-primary-600 rounded
              text-lg"
            >
              Learn more about me
            </a>
            <a
              href="#projects"
              className="xl:ml-4 xl:mt-0 ml-0 mt-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 hover:bg-gray-300 rounded text-lg"
            >
              Check out my work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full w-5/6">
          <img
            className="object-cover object-center"
            alt="Young man with sunglasses holding a laptop while smiling"
            src={heroImg}
          />
        </div>
      </div>
    </section>
  );
}
