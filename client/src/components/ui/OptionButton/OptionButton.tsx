import { HTMLAttributes } from 'react';

type OptionButtonProps = Pick<
  HTMLAttributes<HTMLButtonElement>,
  'className'
> & { text: string };

/**
 * button for menu list
 */
export const OptionButton = ({
  text,
  className,
}: Required<OptionButtonProps>) => (
  <button className={className}>{text}</button>
);
