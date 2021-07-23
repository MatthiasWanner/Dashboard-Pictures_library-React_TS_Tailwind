import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IProps {
  label?: string;
  type: string;
  value: string;
  labelClassName?: string;
  inputClassName?: string;
  register: UseFormRegister<FieldValues>;
}

function InputComponent({ label, type, labelClassName, inputClassName, value, register }: IProps): JSX.Element {
  return (
    <label className={`mt-2 ${labelClassName ? labelClassName : ''}`}>
      {label}
      <input
        type={type}
        {...register(value)}
        className={`px-5 py-2 rounded-lg text-xl shadow-themeShadow ${inputClassName ? inputClassName : ''}`}
      />
    </label>
  );
}

export default InputComponent;
