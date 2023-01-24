import { UseFormRegister } from 'react-hook-form';

interface IInput {
  type: string;
  label: string;
  multilined?: boolean;
  placeholder?: string;
  register: UseFormRegister<any>;
  validations: object;
  error?: boolean;
  helperText: string;
  onChange?: (...params: any) => void;
}

export default IInput;
