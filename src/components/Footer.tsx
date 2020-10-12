import React from 'react';

export function Footer() {
  return (
    <footer className="w-full p-4 mt-10 border-t border-gray-300 text-sm text-gray-700 text-center">
      <p>
        Built with{' '}
        <span role="img" aria-label="love" className="text-red-600">
          &hearts;
        </span>{' '}
        and Gatsby.js
      </p>
      <p className="mt-2">&copy;{new Date().getFullYear()}</p>
    </footer>
  );
}
