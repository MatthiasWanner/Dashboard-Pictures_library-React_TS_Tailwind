import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IProps {
  label?: string;
  type: string;
  value: string;
  className?: string;
  register: UseFormRegister<FieldValues>;
}

function InputComponent({ label, type, className, value, register }: IProps): JSX.Element {
  return (
    <label className={className}>
      {label}
      <input type={type} {...register(value)} />
    </label>
  );
}

export default InputComponent;
