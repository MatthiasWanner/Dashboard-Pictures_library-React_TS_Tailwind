import React from 'react';

interface IProps {
  title: string;
  url: string;
  className?: string;
}

function PictureCard({ url, title, className }: IProps) {
  return (
    <button
      className={`photo-card rounded-lg flex flex-col justify-start shadow-themeShadow m-2 overflow-hidden bg-gray-200 text-black ${
        className ? className : ''
      }`}
    >
      <span className="text-lg">{title}</span>
      <img className="w-full" src={url} alt={title} />
    </button>
  );
}

export default PictureCard;
