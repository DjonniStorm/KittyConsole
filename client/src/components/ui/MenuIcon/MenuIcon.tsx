import { type HTMLAttributes } from 'react';

type MenuIconProps = Pick<
  HTMLAttributes<HTMLButtonElement>,
  'children' | 'className'
>;
/**
 * Big icon for interactive ui buttons
 */
export const MenuIcon = ({
  children,
  className,
}: Required<MenuIconProps>): JSX.Element => (
  <button className={className}>
    {children}
  </button>
);
