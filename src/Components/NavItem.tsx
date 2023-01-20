import React from 'react';
import styles from '@/styles/NavItem.module.css';
import INavItem from '@/Interfaces/INavItem';

const NavItem: React.FC<INavItem> = ({ isActive, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive ? `${styles.navItem} text-gray-850` : 'text-white'
      } px-16 min-w-[220px] py-4`}
    >
      <span className="text-sm font-extrabold">{title}</span>
    </button>
  );
};

export default NavItem;
