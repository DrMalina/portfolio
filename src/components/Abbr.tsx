import React from 'react';

type AbbrProps = {
  text: string;
  title?: string;
};

// export default to work in MDX
export default function Abbr({ text, title }: AbbrProps) {
  return (
    <abbr className="no-underline" title={title || undefined}>
      {text}
    </abbr>
  );
}
