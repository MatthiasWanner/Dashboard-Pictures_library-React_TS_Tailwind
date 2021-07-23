import React, { useState } from 'react';
import Viewer from '../Layout/Viewer';

interface IProps {
  title: string;
  url: string;
  className?: string;
}

function PictureCard({ url, title, className }: IProps) {
  const [isPreview, setIspreview] = useState(false);
  return (
    <>
      {isPreview && (
        <Viewer
          elements={[<img src={url} alt={title} className="w-8/12" />]}
          handeClickArrow={() => setIspreview(false)}
        />
      )}
      <button
        className={`photo-card rounded-lg flex flex-col justify-start shadow-themeShadow m-2 overflow-hidden bg-gray-200 text-black ${
          className ? className : ''
        }`}
        onClick={() => setIspreview(true)}
      >
        <span className="text-lg">{title}</span>
        <img className="w-full" src={url} alt={title} />
      </button>
    </>
  );
}

export default PictureCard;
