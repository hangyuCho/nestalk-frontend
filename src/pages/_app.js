import React from "react";
import AppLayout from "../container/AppLayout/index";

const KakaoMain = ({ Component }) => {
  console.log(Component);
  return (
    <>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

export default KakaoMain;
