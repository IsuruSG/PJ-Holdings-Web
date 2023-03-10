import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import navItems from '@/Constants/navigation-items';
import IPageLayout from '@/Interfaces/IPageLayout';
import Head from 'next/head';
import React from 'react';

const PageLayout: React.FC<IPageLayout> = ({ children, headerOpacity = 1 }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logo-round.png" />
        <title>PJ Holdings</title>
      </Head>
      <Header opacity={headerOpacity} itemList={navItems} />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
