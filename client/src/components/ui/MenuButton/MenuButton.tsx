import { type ComponentPropsWithRef } from 'react';

type MenuButton = Omit<ComponentPropsWithRef<'button'>, 'onClick'> & {
  onClick: () => void
};

export const MenuButton = ({
  children,
  className,
  onClick,
  ...args
}: Readonly<MenuButton>): JSX.Element => {
  return (
    <button
      className={className}
      onClick={onClick}
      {...args}
    >
      {children}
    </button>
  );
};
