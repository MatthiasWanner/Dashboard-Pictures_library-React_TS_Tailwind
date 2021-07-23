import React, { Dispatch, SetStateAction } from 'react';
import { ClipboardListIcon, TrashIcon, PencilAltIcon } from '@heroicons/react/solid';
import { categories } from '../../API/requests';
import { useMutation } from 'react-query';
import { useCategoriesFromStore } from '../../../store/categories.slice';
import { AxiosError } from 'axios';

interface IProps {
  children: React.ReactNode;
  className?: string;
  categoryId: string;
  setIsUpdating: Dispatch<SetStateAction<string>>;
}

function DisplayCategory({ children, className, categoryId, setIsUpdating }: IProps): JSX.Element {
  const { dispatchDeleteCategory } = useCategoriesFromStore();

  // TODO: Find the good T parameters to useMutation
  /* eslint-disable @typescript-eslint/ban-ts-comment */
  // @ts-ignore
  const { mutate } = useMutation(categories.delete, {
    onSuccess: () => dispatchDeleteCategory(categoryId),
  });

  return (
    <div className={className}>
      <div className="flex">
        <ClipboardListIcon className="w-10" />
        <p className="ml-5 text-2xl font-light">{children}</p>
      </div>
      <div className="flex">
        <button onClick={() => setIsUpdating(categoryId)}>
          <PencilAltIcon className="w-8" />
        </button>
        <button onClick={() => mutate(categoryId)}>
          <TrashIcon className="w-8" />
        </button>
      </div>
    </div>
  );
}

export default DisplayCategory;
