import ICard from '@/Interfaces/ICard';
import React from 'react';

const Card: React.FC<ICard> = ({ heading, Icon, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${[
        'bg-gray-350/30',
        'hover:bg-yellow-450',
        'backdrop-blur-sm',
        'duration-300',
        'text-white',
        'hover:text-gray-850',
        'shadow-gray-850',
        'hover:shadow-xl',
        'rounded-2xl',
        'max-w-[240px]',
        'min-h-[240px]',
        'sm:min-w-[240px]',
        'sm:min-h-[240px]',
        'md:w-[280px]',
        'md:min-h-[320px]',
        'lg:min-w-[280px]',
        'lg:min-h-[360px]',
        'flex',
        'flex-col',
        'justify-center',
        'items-center',
      ].join(' ')}`}
    >
      <section className="w-full md:h-full flex justify-center items-center">
        <Icon className="!h-24 !w-24 md:!h-28 md:!w-28 " />
      </section>
      <section className="w-full md:h-full flex flex-col md:space-y-4">
        <p className="text-center mx-3 text-xl md:text-lg lg:text-2xl font-extrabold">
          {heading}
        </p>
        <p className="text-center mx-3 md:text-[10px] lg:text-xs hidden md:block">
          {children}
        </p>
      </section>
    </button>
  );
};

export default Card;
