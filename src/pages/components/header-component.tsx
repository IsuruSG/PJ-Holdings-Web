import Header from '@/Components/Header';
import navItems from '@/Constants/navigation-items';
import React from 'react';

const HeaderComponent = () => {
  return (
    <div>
      <Header itemList={navItems} />
    </div>
  );
};

export default HeaderComponent;
