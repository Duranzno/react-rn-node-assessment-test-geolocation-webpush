import React from 'react';
import cx from 'classnames';
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  onClick?: () => void;
};

// eslint-disable-next-line
export const Button: React.FC<Props> = (props) => {
  const { onClick, disabled } = props;
  const className = cx(
    'font-sans text-md px-4 py-2 bg-white rounded-lg',
    {
      'text-black shadow-button border-solid border-2 border-black': !disabled,
      'text-grey': disabled,
    },
  );
  return (
    <button
      {...props}
      onClick={(e): void => onClick && onClick(e)}
      className={className}
    />
  );
};
