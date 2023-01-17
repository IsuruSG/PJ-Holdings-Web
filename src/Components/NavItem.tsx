import React from 'react';
import styles from '@/styles/NavItem.module.css';
import INavItem from '@/Interfaces/INavItem';

const NavItem: React.FC<INavItem> = ({ isActive, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive ? `${styles.navItem} text-gray-850` : 'text-white'
      } px-16 min-w-[220px] font-medium py-4`}
    >
      {title}
    </button>
  );
};

export default NavItem;
