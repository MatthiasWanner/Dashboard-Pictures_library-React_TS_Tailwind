import { AxiosError } from 'axios';
import React, { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useCategoriesFromStore } from '../../../store/categories.slice';
import { categories } from '../../API/requests';
import InputComponent from '../FormComponents/InputComponent';
import ValidateButton from '../FormComponents/ValidateButton';

interface Iprops {
  categoryId: string;
  setIsUpdating: Dispatch<SetStateAction<string>>;
}
interface Data {
  id: string;
  category: { name: string };
}

function UpdateCategory({ categoryId, setIsUpdating }: Iprops): JSX.Element {
  const { dispatchUpdateCategory } = useCategoriesFromStore();

  const { register, handleSubmit, getValues } = useForm();
  const { mutate } = useMutation<null, AxiosError, Data>(categories.update, {
    onSuccess: () => {
      dispatchUpdateCategory({ id: categoryId, name: getValues('name') });
      setIsUpdating('');
    },
  });

  return (
    <form
      className="flex w-full"
      onSubmit={handleSubmit((data) => mutate({ id: categoryId, category: { name: data.name } }))}
    >
      <InputComponent value="name" type="text" register={register} className="text-black" />
      <ValidateButton text="Modifier" type="submit" />
      <button onClick={() => setIsUpdating('')}>Annuler</button>
    </form>
  );
}

export default UpdateCategory;
