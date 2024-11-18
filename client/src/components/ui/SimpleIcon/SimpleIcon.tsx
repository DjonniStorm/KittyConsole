import React, {
  type HTMLAttributes,
  ReactNode,
} from 'react';

type SimpleIcon = Pick<
  HTMLAttributes<HTMLDivElement>,
  'className' | 'children'
>;

/**
 * very simple icon, that can be used on buttons in menu, etc
 * used MUI icons pack
 */
export const SimpleIcon = ({
  children,
  className,
}: Required<SimpleIcon>): JSX.Element => (
  <div className={className}>{children}</div>
);
