import Input from '@/Components/Input';
import React, { useState } from 'react';

const InputComponent = () => {
  const [input, setInput] = useState("");

  return (
    <div className="flex justify-center h-screen items-center">
      <p>{input}</p>
      <Input type="text" label="Name" onChange={(text) => setInput(text)} />
    </div>
  );
};

export default InputComponent;
