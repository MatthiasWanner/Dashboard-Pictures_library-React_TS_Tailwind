import React from 'react';
import { useQuery } from 'react-query';
import { useUserFromStore } from '../../../store/user.slice';
import { users } from '../../API/requests';

interface IProps {
  className?: string;
}

function DisplaysAllPhotos({ className }: IProps): JSX.Element {
  const { user } = useUserFromStore();

  useQuery<Picture[]>(['pictures', user.id], () => users.getPictures(user.id as string), {
    enabled: Boolean(user.id),
    onSuccess: (data) => console.log(data),
  });
  return <div className={className ? className : 'w-full h-full border-t border-white'}></div>;
}

export default DisplaysAllPhotos;
