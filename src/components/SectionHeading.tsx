import React from 'react';

type SectionHeadingProps = {
  heading: string;
};

export function SectionHeading({ heading }: SectionHeadingProps) {
  return (
    <div className="flex items-center max-w-sm md:ml-0 mx-auto">
      <h2 className="text-3xl text-gray-800 font-bold whitespace-no-wrap">{heading}</h2>
      <span
        role="img"
        aria-hidden="true"
        className="ml-5 max-w-4xl md:w-full w-32 border border-purple-400"
      />
    </div>
  );
}
