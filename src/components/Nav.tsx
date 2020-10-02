import React from 'react';
import cx from 'classnames';
import { useMedia } from '../hooks/useMedia';

const navItems = ['home', 'about', 'projects', 'contact'];

type NavProps = {
  isMenuOpen: boolean;
};

export function Nav({ isMenuOpen }: NavProps) {
  const isSmall = useMedia('(max-width: 640px)');

  const navClassName = cx({
    // hide / show dropdown on mobile screens
    block: isSmall && isMenuOpen,
    hidden: isSmall && !isMenuOpen,
    'absolute inset-x-0 top-0 mt-16 mx-auto px-1 bg-gray-100': isSmall,
    'block ml-auto': !isSmall,
  });

  const navListClassName = cx(
    {
      'py-6 flex-col text-center rounded shadow-lg border': isSmall,
      'flex-wrap items-center': !isSmall,
    },
    'flex justify-center',
  );

  const singleTabClassName = cx(
    {
      'inline-block w-1/2 py-3': isSmall,
      'p-2': !isSmall,
    },
    'nav-item hover:text-primary-500',
  );

  return (
    <nav className={navClassName} aria-label="Main navigation">
      <ul className={navListClassName}>
        {navItems.map((tab, idx) => (
          <li key={tab}>
            <a
              href={`#${tab}`}
              className={cx(
                {
                  /* exclude margins on first children */
                  'ml-5': !isSmall && idx !== 0,
                  'mt-2': isSmall && idx !== 0,
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
