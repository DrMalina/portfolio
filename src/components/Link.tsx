import React from 'react';

type LinkProps = {
  href: string;
  text: string;
};

// export default here to work in MDX
export default function Link({ href, text }: LinkProps) {
  return (
    <a
      className="text-link border-b border-link border-opacity-25 hover:border-opacity-50"
      href={href}
    >
      {text}
    </a>
  );
}
