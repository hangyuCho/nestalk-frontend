import React from "react";
import Menu from "../container/AppLayout/Menu/index";
import Footer from "../container/AppLayout/Footer/index";

const KakaoMain = ({ Component }) => {
  console.log(Component);
  return (
    <>
      <Menu/>
      <Component />
      <Footer />
    </>
  );
};

export default KakaoMain;
