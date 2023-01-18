import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react';
import NavItem from './NavItem';
import IHeader from '@/Interfaces/IHeader';
import Image from 'next/image';

const Header: React.FC<IHeader> = ({ itemList, invisible }) => {
  const [currentLink, setCurrentLink] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setCurrentLink(window.location.pathname);
  }, []);

  const onSelected = (link: string) => {
    window.location.href = link;
  };

  const drawerBox = () => (
    <Box className="h-full">
      <List className="flex flex-col h-full">
        <section className="flex-auto h-2/6 flex justify-center items-center">
          <Image
            className="rounded-full"
            alt="PJ - Holdings"
            width={100}
            height={100}
            src="/logo.png"
          />
        </section>
        <section className="flex-auto h-4/6 flex flex-col space-y-3">
          {itemList.map(
            (item: { name: string; link: string }, index: number) => (
              <button
                key={item.name + index}
                className={`px-12 mx-2 rounded-lg py-2 text-lg ${
                  currentLink === item.link
                    ? 'bg-yellow-450 text-gray-850'
                    : 'border-yellow-450 border'
                }`}
              >
                {item.name}
              </button>
            )
          )}
        </section>
      </List>
    </Box>
  );

  return (
    <AppBar className={invisible ? 'bg-transparent' : 'overflow-hidden'}>
      <Toolbar className="px-3 md:px-0 -my-1">
        <IconButton
          className="block md:hidden"
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuIcon />
        </IconButton>
        <Box className="-space-x-9 hidden md:flex">
          <Image
            className="rounded-full p-2"
            alt="PJ - Holdings"
            width={60}
            height={60}
            src="/logo.png"
          />
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
        <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
          {drawerBox()}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
