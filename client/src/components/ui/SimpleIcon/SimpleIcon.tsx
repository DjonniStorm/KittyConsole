import React, {
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';

type SimpleIcon = Omit<ComponentPropsWithoutRef<"div">, 'className' | 'children'> & {
  className: string,
  children: ReactNode,
};

/**
 * very simple icon, that can be used on buttons in menu, etc
 * used MUI icons pack
 */
export const SimpleIcon = ({
  children,
  className,
  ...args
}: Readonly<SimpleIcon>): JSX.Element => (
  <div className={className} {...args}>{children}</div>
);
