import React, { useState } from 'react';
import { strings } from 'constant';
import { SosafeData } from '@sosafe-test/common';
import { Selector } from 'components/Select/Select.component';
import { MapMarker } from 'components/MapMarker/MapMarker.component';
import { Button } from 'components/Common/Button.component';
import { useAppContext } from 'providers';
import {
  Likert,
  LikertDatapoint,
} from 'components/Likert/Likert.component';

enum STEPS {
  FILTER = 0,
  LIKERT,
  MAP,
}
interface Props {
  candidates: string[];
  onSubmit: (submission: SosafeData) => void | Promise<void>;
}
export const Form: React.FC<Props> = ({ candidates, onSubmit }) => {
  const [page, setPage] = useState(0);
  const { addFilters, addMarker, addScore, state } = useAppContext();
  const { scores, filters, location } = state;

  const onPrevious = (): void => {
    setPage(page - 1);
  };
  const onNext = (): void => {
    setPage(page + 1);
  };

  const onLikertClick = (result: LikertDatapoint): void => {
    addScore(result);
  };
  const isScoreFilled = scores.every(({ answer }) => answer !== '');
  const isFilterFilled = filters.length > 0;

  const isLastStep = page === STEPS.MAP;
  const hasLocation =
    location.latitude !== 0 || location.longitude !== 0;
  const disable =
    (page === STEPS.LIKERT && !isScoreFilled) ||
    (page === STEPS.FILTER && !isFilterFilled);
  return (
    <div className="min-w-half min-h-half flex flex-col items-stretch justify-between p-8">
      <h2 className="text-3xl font-black text-grey">
        {strings.title}
      </h2>
      {page === STEPS.FILTER && (
        <Selector options={candidates} onChange={addFilters} />
      )}
      {page === STEPS.LIKERT && (
        <Likert options={scores} onClick={onLikertClick} />
      )}
      {page === STEPS.MAP && (
        <MapMarker onClick={addMarker} location={location} />
      )}
      <div className="flex flex-row justify-between">
        <Button onClick={(): void => onPrevious()}>
          {strings.previous}
        </Button>
        {isLastStep ? (
          <Button
            disabled={!hasLocation}
            type="submit"
            onClick={(): void => {
              onSubmit(state);
            }}
          >
            {strings.submit}
          </Button>
        ) : (
          <Button disabled={disable} onClick={(): void => onNext()}>
            {strings.next}
          </Button>
        )}
      </div>
    </div>
  );
};
