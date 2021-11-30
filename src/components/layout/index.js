import React from "react";
import Header from "../header";
import * as S from "./styled";

const Layout = ({ children }) => {
  return (
    <S.WrapperLayout>
        {children}
        <Header />
    </S.WrapperLayout>
  );
};

export default Layout;
