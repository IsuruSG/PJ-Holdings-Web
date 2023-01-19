import React from 'react';
import LottieView from 'lottie-react';
import ILottie from '@/Interfaces/ILottie';

const Lottie: React.FC<ILottie> = ({ loop = false, source }) => {
  return <LottieView animationData={source} loop={loop} />;
};

export default Lottie;
