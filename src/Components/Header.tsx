import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react';
import NavItem from './NavItem';
import IHeader from '@/Interfaces/IHeader';

const Header:React.FC<IHeader> = ({itemList, invisible}) => {
  const [currentLink, setCurrentLink] = useState<string>('');

  useEffect(() => {
    setCurrentLink(window.location.pathname);
  }, []);

  const onSelected = (link: string) => {
    window.location.href = link;
  };

  return (
    <AppBar className={invisible? 'bg-transparent': ''}>
      <Toolbar className='px-3 md:px-0 -my-1'>
        <IconButton
          className="block md:hidden"
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Box className="-space-x-9 overflow-hidden hidden md:block">
          {itemList.map(
            (item: { name: string; link: string }, index: number) => (
              <NavItem
                onClick={() => onSelected(item.link)}
                key={item.name + index}
                title={item.name}
                isActive={currentLink === item.link}
              />
            )
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
