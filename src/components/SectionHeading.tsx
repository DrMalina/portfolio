import React from 'react';
import cx from 'classnames';

type SectionHeadingProps = {
  heading: string;
  maxWidth?: 'sm' | 'md' | 'lg';
  align?: 'left' | 'center';
};

export function SectionHeading({ heading, maxWidth = 'sm', align = 'left' }: SectionHeadingProps) {
  const sectionClassName = cx(
    {
      'max-w-sm': maxWidth === 'sm',
      'max-w-md': maxWidth === 'md',
      'max-w-lg': maxWidth === 'lg',
      'md:ml-0': align === 'left',
      'md:ml-auto': align === 'center',
    },
    'flex items-center mx-auto',
  );

  return (
    <div className={sectionClassName}>
      <h2 className="text-3xl text-gray-800 font-bold whitespace-no-wrap">{heading}</h2>
      <span
        role="img"
        aria-hidden="true"
        className="ml-5 max-w-4xl md:w-full w-32 border border-purple-400"
      />
    </div>
  );
}
