import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { useCategoriesFromStore } from '../../../store/categories.slice';
import { useUserFromStore } from '../../../store/user.slice';
import { users } from '../../API/requests';
import DisplayCategory from './DisplayCategory';
import UpdateCategory from './UpdateCategory.tsx';

function AllCategories({ className }: { className?: string }): JSX.Element {
  const [isUpdating, setIsUpdating] = useState<string>('');

  const { user } = useUserFromStore();
  const { categories, dispatchInitSate } = useCategoriesFromStore();

  useQuery<Category[]>(['user', 'categories'], () => users.getCategories(user.id as string), {
    enabled: Boolean(user.id),
    onSuccess: (data) => dispatchInitSate(data),
  });

  return (
    <div className={`${className ? className : ''}`}>
      {categories.map((category) => (
        <div key={category.id} className={`category-container w-full border-b border-white mt-5 py-5`}>
          {isUpdating === category.id ? (
            <UpdateCategory categoryId={category.id} setIsUpdating={setIsUpdating} />
          ) : (
            <DisplayCategory
              className="w-full px-5 mt-5 flex justify-between"
              categoryId={category.id}
              setIsUpdating={setIsUpdating}
            >
              {category.name}
            </DisplayCategory>
          )}
        </div>
      ))}
    </div>
  );
}

export default AllCategories;
