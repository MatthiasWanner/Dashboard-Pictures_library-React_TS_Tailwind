import React, { useState } from 'react';

import ValidateButton from '../FormComponents/ValidateButton';
import { PlusCircleIcon } from '@heroicons/react/solid';
import Viewer from '../Layout/Viewer';
import PictureForm from './PictureForm';

function PhotosPageHeader() {
  const [isAddPhoto, setIsAddPhoto] = useState(false);
  return (
    <div className="flex w-full items-center h-one justify-between">
      {isAddPhoto && <Viewer elements={[<PictureForm />]} handeClickArrow={() => setIsAddPhoto(false)} />}
      <h3>Vos Photos(10)</h3>
      <ValidateButton type="button" handleClick={() => setIsAddPhoto(true)}>
        <PlusCircleIcon className="w-8" />
      </ValidateButton>
    </div>
  );
}

export default PhotosPageHeader;
