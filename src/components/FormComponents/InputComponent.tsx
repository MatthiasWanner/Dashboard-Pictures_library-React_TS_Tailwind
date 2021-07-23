import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IProps {
  label?: string;
  type: string;
  value: string;
  labelClassName?: string;
  inputClassname?: string;
  register: UseFormRegister<FieldValues>;
}

function InputComponent({ label, type, labelClassName, inputClassname, value, register }: IProps): JSX.Element {
  return (
    <label className={labelClassName}>
      {label}
      <input type={type} {...register(value)} className={inputClassname} />
    </label>
  );
}

export default InputComponent;
