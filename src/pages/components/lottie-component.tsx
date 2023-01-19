import React from 'react';
import Lottie from '@/Components/Lottie';
import ArrowDown from '@/assets/lotties/arrowDown.json';

const LottieComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Lottie source={ArrowDown} loop />
    </div>
  );
};

export default LottieComponent;
