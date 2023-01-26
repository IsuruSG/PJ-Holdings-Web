import React from 'react';
import styles from '@/styles/NavItem.module.css';
import INavItem from '@/Interfaces/INavItem';

const NavItem: React.FC<INavItem> = ({
  isActive,
  title,
  scroll = 1,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive
          ? `${scroll > 0.7 && styles.navItem} text-gray-850`
          : `${scroll > 0.7 ? 'text-white' : 'text-gray-350'}`
      } px-16 min-w-[220px] py-4`}
    >
      <span className="text-sm font-extrabold">{title}</span>
    </button>
  );
};

export default NavItem;
