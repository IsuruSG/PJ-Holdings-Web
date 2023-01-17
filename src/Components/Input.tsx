import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
import IInput from '@/Interfaces/IInput';

const Input: FC<IInput> = ({ label, multilined, placeholder, type, onChange }) => {
  return (
    <TextField
      label={label}
      multiline={multilined}
      placeholder={placeholder}
      type={type}
      variant="standard"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
