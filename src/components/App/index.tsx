import { useState } from 'react';

import { bubbleSort } from '../../utils/bubbleSort';
import { createRandomArray } from '../../utils/createRandomArray';

import { ArrayVisualization } from '../ArrayVisualization';
import { Controls } from '../Controls';

import './App.css';

export const App: React.FC = () => {
  const [arrayValuesRange, setArrayValuesRange] = useState<[number, number]>([1, 100]);
  const [arrayLengthRange, setArrayLengthRange] = useState<[number, number]>([20, 30]);
  const [arrayGenerator, setArrayGenerator] = useState(() => bubbleSort(createRandomArray(arrayValuesRange, arrayLengthRange)));
  const [array, setArray] = useState(() => arrayGenerator.next().value);

  const isSorted = array.toString() === [...array].sort((a, b) => a - b).toString();

  return (
    <div>
      <header className="header">
        Bubble Sort Visualization 🧼
      </header>
      <ArrayVisualization array={array} />
      <Controls
        isSorted={isSorted}

        arrayGenerator={arrayGenerator}
        arrayValuesRange={arrayValuesRange}
        arrayLengthRange={arrayLengthRange}

        setArrayValuesRange={setArrayValuesRange}
        setArrayLengthRange={setArrayLengthRange}
        setArrayGenerator={setArrayGenerator}
        setArray={setArray}
      />
    </div>
  );
}
