import Input from '@/Components/Input';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

const InputComponent = () => {
  const [input, setInput] = useState('');

  interface IFormInput {
    samplename: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) =>
    setInput(data.samplename);

  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <form
        className="flex flex-col space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          error={!!errors.samplename}
          helperText="sample helper"
          validations={{ required: true }}
          register={register}
          type="text"
          label="sample name"
        />
        <button className="bg-yellow-450 text-sm p-2 rounded-full">
          submit me
        </button>
      </form>
      <pre className="text-yellow-450 bg-gray-350/40 py-2 px-6 rounded-lg mt-4">
        input text: {input}
      </pre>
    </div>
  );
};

export default InputComponent;
