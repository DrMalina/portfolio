import React from 'react';
import cx from 'classnames';

const navItems = ['Home', 'About', 'Projects', 'Contact'];

type NavProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: () => void;
};

export function Nav({ isMenuOpen, setIsMenuOpen }: NavProps) {
  const navClassName = cx(
    {
      // hide / show dropdown on mobile screens
      'block absolute inset-x-0 top-0 mt-16 mx-auto px-1 bg-gray-100': isMenuOpen,
      hidden: !isMenuOpen,
    },
    'sm:ml-auto sm:block',
  );

  const navListClassName =
    'flex justify-center sm:flex-wrap sm:items-center sm:py-0 py-6 sm:flex-row flex-col sm:text-left text-center rounded sm:shadow-none shadow-lg sm:border-none border';

  const singleTabClassName =
    'sm:p-2 py-3 sm:block inline-block sm:w-full w-1/2 hover:text-primary-500';

  return (
    <nav className={navClassName} aria-label="Main navigation">
      <ul className={navListClassName}>
        {navItems.map((tab, idx) => (
          <li key={tab}>
            <a
              href={`#${tab.toLowerCase()}`}
              onClick={setIsMenuOpen}
              className={cx(
                {
                  /* exclude margins on first children */
                  'sm:mt-0 sm:ml-5 mt-2 ml-0': idx !== 0,
                },
                singleTabClassName,
              )}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
