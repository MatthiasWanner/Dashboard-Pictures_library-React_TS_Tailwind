import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { stableValueHash } from 'react-query/types/core/utils';
import { useCategoriesFromStore } from '../../../store/categories.slice';
import { useUserFromStore } from '../../../store/user.slice';
import { categories } from '../../API/requests';
import InputComponent from '../FormComponents/InputComponent';
import ValidateButton from '../FormComponents/ValidateButton';

function AddCategory({ className }: { className?: string }): JSX.Element {
  const { user } = useUserFromStore();
  const { dispatchAddCategory } = useCategoriesFromStore();

  const { register, handleSubmit, setValue } = useForm();
  const { mutate } = useMutation(categories.create, {
    onSuccess: (data) => {
      dispatchAddCategory(data);
      setValue('name', '');
    },
  });

  return (
    <form
      className={`w-full ${className ? className : ''}`}
      onSubmit={handleSubmit((data) => mutate({ name: data.name, userId: user.id as string }))}
    >
      <InputComponent
        value="name"
        type="text"
        register={register}
        labelClassName="text-black w-8/12"
        inputClassName="w-full"
      />
      <ValidateButton
        type="submit"
        className="bg-green-300 rounded-lg shadow-themeShadow text-xl px-5 py-2 text-green-800"
      >
        Ajouter
      </ValidateButton>
    </form>
  );
}

export default AddCategory;
