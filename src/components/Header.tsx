import React from 'react';

interface HeaderProps {
  text: string;
}

export const Header: React.FC<HeaderProps> = ({ text }) => {
  return <h2>Header here: {text}</h2>;
};
