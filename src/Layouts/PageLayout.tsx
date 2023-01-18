import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import navItems from '@/Constants/navigation-items'
import IPageLayout from '@/Interfaces/IPageLayout'
import React from 'react'

const PageLayout: React.FC<IPageLayout> = ({children}) => {
  return (
    <>
        <Header itemList={navItems} />
          {children}
        <Footer />
    </>
  )
}

export default PageLayout