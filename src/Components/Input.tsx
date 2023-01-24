import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
import IInput from '@/Interfaces/IInput';

const Input: FC<IInput> = ({
  label,
  multilined,
  placeholder,
  register,
  type,
  helperText,
  validations,
  error = false,
  onChange,
}) => {
  return (
    <TextField
      {...register(label.toLocaleLowerCase().replace(/\s/g, ''), validations)}
      label={label}
      error={error && error}
      helperText={error ? helperText : ''}
      multiline={multilined}
      placeholder={placeholder}
      type={type}
      variant="standard"
      color="secondary"
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  );
};

export default Input;
