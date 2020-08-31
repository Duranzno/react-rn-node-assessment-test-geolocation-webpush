import React from 'react';
import cx from 'classnames';
export const LikertUnit: React.SFC<{
  value: string;
  answer: string;
  // eslint-disable-next-line
  onClick: Function;
}> = ({ value, answer: answer, onClick }) => {
  const enabled = value === answer;
  const btnClassName = cx(
    'rounded-full w-10 h-10 flex items-center justify-center',
    {
      'bg-main hover:bg-pink': enabled,
      'bg-white hover:bg-pink border-solid border-black border-2 border-full': !enabled,
    },
  );
  return (
    <div className="p-4 flex flex-col items-center text-center">
      <button
        className={btnClassName}
        onClick={(): void => {
          onClick(answer);
        }}
      />
      <label className="font-sans font-medium text-base pt-2 w-20">
        {answer}
      </label>
    </div>
  );
};
