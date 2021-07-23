import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { usePicturesFromStore } from '../../../store/pictures.slice';
import { useUserFromStore } from '../../../store/user.slice';
import { users } from '../../API/requests';
import PictureCard from './PictureCard';

interface IProps {
  className?: string;
}

function DisplaysAllPhotos({ className }: IProps): JSX.Element {
  const { user } = useUserFromStore();
  const { pictures, dispatchInitSate } = usePicturesFromStore();

  useQuery<Picture[]>(['pictures', user.id], () => users.getPictures(user.id as string), {
    enabled: Boolean(user.id) || Boolean(pictures),
    onSuccess: (data) => dispatchInitSate(data),
  });
  return (
    <div className={`${className ? className : 'w-full h-full flex border-t border-white'}`}>
      {pictures.map((picture) => (
        <PictureCard
          key={picture.id}
          url={picture.url}
          title={picture.title}
          className="w-1/5 h-1/3 md:transform md:duration-500 hover:scale-95"
        />
      ))}
    </div>
  );
}

export default DisplaysAllPhotos;
