import React from 'react';
import { useQuery } from 'react-query';
import { useCategoriesFromStore } from '../../../store/categories.slice';
import { useUserFromStore } from '../../../store/user.slice';
import { users } from '../../API/requests';
import Loader from '../Spinner/Loader';
import DisplayCategory from './DisplayCategory';

function AllCategories(): JSX.Element {
  const { user } = useUserFromStore();
  const { categories, dispatchInitSate } = useCategoriesFromStore();

  useQuery<Category[]>(['user', 'categories'], () => users.getCategories(user.id as string), {
    enabled: Boolean(user.id),
    onSuccess: (data) => dispatchInitSate(data),
  });

  return (
    <>
      {categories.map((category) => (
        <div key={category.id} className="w-full border-b border-white mt-5 py-5">
          <DisplayCategory className="w-full px-5 mt-5 flex">{category.name}</DisplayCategory>
        </div>
      ))}
    </>
  );
}

export default AllCategories;
