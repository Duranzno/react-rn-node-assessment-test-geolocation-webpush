import React from 'react';
// import cx from 'classnames'
import { LikertRow } from './LikertRow.component';
import { Score } from '@sosafe-test/common';
export type LikertDatapoint = {
  question: string;
  answer: string;
};

interface Props {
  options: Score[];
  onClick: (data: LikertDatapoint) => void;
}
export const Likert: React.SFC<Props> = ({ onClick, options }) => {
  return (
    <div>
      {options.map((o, index) => (
        <LikertRow
          key={o.question}
          label={`${index + 1}. ${o.question}`}
          onChange={(answer: string): void => {
            onClick({ answer, question: o.question });
          }}
          value={o.answer}
        />
      ))}
    </div>
  );
};
