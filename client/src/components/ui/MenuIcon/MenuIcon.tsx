import { type ComponentPropsWithoutRef } from 'react';

type MenuIconProps = ComponentPropsWithoutRef<'button'>;
/**
 * Big icon for interactive ui buttons
 */
export const MenuIcon = ({
  children,
  className,
}: Readonly<MenuIconProps>): JSX.Element => (
  <button className={className}>
    {children}
  </button>
);
