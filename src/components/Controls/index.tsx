import React, { useCallback, useState } from 'react';

import { bubbleSort } from '../../utils/bubbleSort';
import { createRandomArray } from '../../utils/createRandomArray';
import { NumericInput } from '../NumericInput';

import './Controls.css';

interface ControlsProps {
  isSorted: boolean;

  arrayGenerator: Generator<number[], number[]>;
  arrayValuesRange: [number, number];
  arrayLengthRange: [number, number];

  setArrayValuesRange: (valuesRange: [number, number]) => void;
  setArrayLengthRange: (lengthRange: [number, number]) => void;
  setArrayGenerator: (arrayGenerator: Generator<number[], number[]>) => void;
  setArray: (array: number[]) => void;
}

export const Controls: React.FC<ControlsProps> = ({
  isSorted,

  arrayGenerator,
  arrayValuesRange,
  arrayLengthRange,

  // setArrayValuesRange,
  // setArrayLengthRange,
  setArrayGenerator,
  setArray,
}) => {
  const [intervalId, setIntervalId] = useState<number>();
  const [interval, changeInterval] = useState(50);

  const reset = useCallback(() => {
    const arrayGenerator = bubbleSort(createRandomArray(arrayValuesRange, arrayLengthRange));
    setArrayGenerator(arrayGenerator);
    setArray(arrayGenerator.next().value);
  }, [arrayLengthRange, arrayValuesRange, setArray, setArrayGenerator]);

  const next = useCallback(() => {
    setArray(arrayGenerator.next().value);
  }, [arrayGenerator, setArray]);

  const start = useCallback(() => {
    const id = window.setInterval(() => {
      const { done, value } = arrayGenerator.next();

      if (done) {
        window.clearInterval(intervalId);
        setIntervalId(undefined);
      } else {
        setArray(value);
      }
    }, interval);

    setIntervalId(id);
  }, [arrayGenerator, interval, intervalId, setArray]);

  const pause = useCallback(() => {
    window.clearInterval(intervalId);
    setIntervalId(undefined);
  }, [intervalId]);

  const isAutoSorting = !!intervalId;

  return (
    <div className="Controls">
      <div className="buttons">
        <button onClick={reset} disabled={isAutoSorting}>Reset</button>
        <button onClick={next} disabled={isSorted || isAutoSorting}>Next Movement</button>
        {isAutoSorting
          ? <button onClick={pause} disabled={isSorted}>Pause auto-sorting</button>
          : <button onClick={start} disabled={isSorted}>Start auto-sorting</button>
        }
      </div>
      <div>
        <NumericInput
          id="interval"
          label="Interval (ms)"
          value={interval}
          onChange={changeInterval}
          range={[10, 5000]}
          disabled={isAutoSorting}
        />
      </div>
    </div>
  );
};
