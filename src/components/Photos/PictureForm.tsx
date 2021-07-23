import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { usePicturesFromStore } from '../../../store/pictures.slice';
import { useUserFromStore } from '../../../store/user.slice';
import { pictures } from '../../API/requests';
import InputComponent from '../FormComponents/InputComponent';
import ValidateButton from '../FormComponents/ValidateButton';

interface IDatas {
  title: string;
  description: string;
  url: string;
}

// TODO: type useMutations
function PictureForm({ id }: { id?: string }) {
  const { user } = useUserFromStore();
  const { dispatchAddPicture, dispatchUpdatePicture } = usePicturesFromStore();

  const { register, setValue, getValues, handleSubmit } = useForm();

  const { mutate: postPicture } = useMutation(pictures.create, {
    onSuccess: (data) => {
      dispatchAddPicture(data);
      setValue('title', '');
      setValue('description', '');
      setValue('url', '');
    },
  });

  //TODO: FIX TS type
  const { mutate: updatePicture } = useMutation(pictures.update as any, {
    onSuccess: () => {
      dispatchUpdatePicture({
        id: id as string,
        title: getValues('title'),
        description: getValues('description'),
        url: getValues('url'),
      });
      setValue('title', '');
      setValue('description', '');
      setValue('url', '');
    },
  });

  const onSubmit = (data: IDatas) => {
    if (id) return updatePicture(id, data as any); //TODO: Fix TS Error
    return postPicture({ ...data, userId: user.id });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <InputComponent type="text" value="title" label="Titre" register={register} labelClassName="mt-2" />
      <InputComponent type="text" value="description" label="Description" register={register} labelClassName="mt-2" />
      <InputComponent type="text" value="url" label="Url" register={register} labelClassName="mt-2" />
      <ValidateButton type="submit">{id ? 'Modifier' : 'Ajouter'}</ValidateButton>
    </form>
  );
}

export default PictureForm;
