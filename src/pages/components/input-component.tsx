import Input from '@/Components/Input';
import React, { useState } from 'react';

const InputComponent = () => {
  const [input, setInput] = useState('');

  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <Input type="text" label="Name" onChange={(text) => setInput(text)} />
      <pre className="text-yellow-450 bg-gray-350/40 py-2 px-6 rounded-lg mt-4">
        input text: {input}
      </pre>
    </div>
  );
};

export default InputComponent;
