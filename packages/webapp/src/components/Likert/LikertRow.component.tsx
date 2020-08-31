import React from 'react';
import { LikertUnit } from './LikertUnit.component';
import { strings } from '../../constant';
export const LikertRow: React.SFC<{
  label: string;
  // eslint-disable-next-line
  onChange: Function;
  value: string;
}> = ({ label, onChange, value }) => (
  <div>
    <p className="font-sans text-lg font-extrabold">{label}</p>
    <div className="flex flex-row flex-no-wrap">
      {strings.scale.map((answer) => (
        <LikertUnit
          key={answer}
          answer={answer}
          value={value}
          onClick={onChange}
        ></LikertUnit>
      ))}
    </div>
  </div>
);
