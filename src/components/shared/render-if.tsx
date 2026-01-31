import React, { Fragment, type ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  condition: boolean;
}

export function RenderIf(props: IProps) {
  const { condition, children } = props;

  if (!condition) {
    return null;
  }

  return <Fragment>{children}</Fragment>;
}
