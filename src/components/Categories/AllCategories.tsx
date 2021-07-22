import React from 'react';
import { useQuery } from 'react-query';
import { useUserFromStore } from '../../../store/user.slice';
import { users } from '../../API/requests';
import DisplayCategory from './DisplayCategory';

function AllCategories(): JSX.Element {
  const { user } = useUserFromStore();
  const { data } = useQuery<Category[]>(['user', 'categories'], () => users.getCategories(user.id as string), {
    enabled: Boolean(user.id),
  });
  return (
    <>
      {data?.map((category) => (
        <DisplayCategory key={category.id} className="w-full px-5 mt-5">
          {category.name}
        </DisplayCategory>
      ))}
    </>
  );
}

export default AllCategories;
