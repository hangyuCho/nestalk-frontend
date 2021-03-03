import React, { memo } from 'react';
import Menu from "./Menu/index";
import Footer from "./Footer/index";

const AppLayout = ({children})  => {
  return (
    <>
      <Menu/>
        { children }
      <Footer/>
    </>
  );
};

export default AppLayout;
