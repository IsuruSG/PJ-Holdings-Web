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
        'min-w-[220px]',
        'min-h-[220px]',
        'md:w-[280px]',
        'md:min-h-[360px]',
        'flex flex-col',
      ].join(' ')}`}
    >
      <section className="flex-1 w-full flex justify-center items-center">
        <Icon className="h-28 w-28" />
      </section>
      <section className="w-full flex-1 flex flex-col md:space-y-4">
        <p className="text-center mx-3 text-xl md:text-2xl font-extrabold">
          {heading}
        </p>
        <p className="text-center mx-3 text-xs hidden md:block">{children}</p>
      </section>
    </button>
  );
};

export default Card;
