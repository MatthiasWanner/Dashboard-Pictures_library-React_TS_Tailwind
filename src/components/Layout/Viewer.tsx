import React, { Dispatch, SetStateAction, useState } from 'react';
import { XCircleIcon } from '@heroicons/react/solid';

import ValidateButton from '../FormComponents/ValidateButton';

// TODO: Set viewer state in redux to fix ts error

function Viewer({
  elements,
  handeClickArrow,
}: {
  elements: React.ReactNode[];
  handeClickArrow: Dispatch<SetStateAction<boolean>> | (() => void);
}): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="w-screen h-screen absolute top-0 left-0 z-50 bg-gray-500 bg-opacity-50">
      <div className="w-full h-one flex justify-end p-5">
        <ValidateButton type="button" handleClick={handeClickArrow as () => void} className="w-8">
          <XCircleIcon />
        </ValidateButton>
      </div>
      <div className="w-full h-nine flex items-center justify-center">{elements[currentIndex]}</div>
    </div>
  );
}

export default Viewer;
