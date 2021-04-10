import React, { useState } from 'react';

import { NumericInput } from '../NumericInput';

import './ArrayVisualization.css';


interface ArrayVisualizationProps {
  array: number[];
}

export const ArrayVisualization: React.FC<ArrayVisualizationProps> = ({ array }) => {
  const [width, setWidth] = useState(20);
  const [maxHeight, setHeight] = useState(400);
  const ratio = maxHeight / Math.max(...array);

  return (
    <>
      <div className="ArrayVisualization">
        {array.map((number, index) => (
          <div
            key={index}
            className="numberColumn"
            style={{ width, height: ratio * number }}
          />
        ))}
      </div>
      <VisualizationControls
        width={width}
        setWidth={setWidth}
        maxHeight={maxHeight}
        setHeight={setHeight}
      />
    </>
  );
}

interface VisualizationControlsProps {
  width: number;
  setWidth: (width: number) => void;
  maxHeight: number;
  setHeight: (height: number) => void;
}

export const VisualizationControls: React.FC<VisualizationControlsProps> = ({
  width,
  setWidth,
  maxHeight,
  setHeight,
}) => {
  return (
    <div className="VisualizationControls">
      <NumericInput
          id="max-height"
          label="Max height (px)"
          value={maxHeight}
          onChange={setHeight}
          range={[10, 1000]}
      />
      <NumericInput
          id="width"
          label="Width (px)"
          value={width}
          onChange={setWidth}
          range={[5, 400]}
      />
    </div>
  );
}
