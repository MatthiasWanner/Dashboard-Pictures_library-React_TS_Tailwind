import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useCategoriesFromStore } from '../../../store/categories.slice';
import { useUserFromStore } from '../../../store/user.slice';
import { categories } from '../../API/requests';
import InputComponent from '../FormComponents/InputComponent';
import ValidateButton from '../FormComponents/ValidateButton';

function AddCategory(): JSX.Element {
  const { user } = useUserFromStore();
  const { dispatchAddCategory } = useCategoriesFromStore();

  const { register, handleSubmit } = useForm();
  const { mutate } = useMutation(categories.create, {
    onSuccess: (data) => {
      dispatchAddCategory(data);
    },
  });

  return (
    <form
      className="flex w-full"
      onSubmit={handleSubmit((data) => mutate({ name: data.name, userId: user.id as string }))}
    >
      <InputComponent value="name" type="text" register={register} className="text-black" />
      <ValidateButton text="Ajouter" type="submit" />
    </form>
  );
}

export default AddCategory;
