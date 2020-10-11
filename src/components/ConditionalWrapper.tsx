import React from 'react';

type HOC = (children: React.ReactNode) => React.ReactElement;

type ConditionalWrapperProps = {
  condition: boolean;
  wrapper: HOC;
  fallback: HOC;
  children: React.ReactNode;
};

export function ConditionalWrapper({
  condition,
  fallback,
  wrapper,
  children,
}: ConditionalWrapperProps) {
  return condition ? wrapper(children) : fallback(children);
}
