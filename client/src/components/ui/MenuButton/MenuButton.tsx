import { HTMLAttributes } from 'react';

type MenuButtonProps = Pick<
  HTMLAttributes<HTMLButtonElement>,
  'onClick' | 'children' | 'className'
>;

export const MenuButton = ({
  children,
  className,
  onClick,
}: Required<MenuButtonProps>): JSX.Element => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
