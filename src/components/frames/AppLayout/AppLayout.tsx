import React, { memo } from 'react';
import Menu from '../Menu';
import MainLayout from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@src/reducers/';

interface Props {
  children: React.ReactNode;
}

const AppLayout = memo(({ children }: Props) => {
  const { roomListInfo } = useSelector((state: RootState) => state.chat); //menu에서 room에대한 정보를 요청할 때 필요

  const isLoggined = true;
  const logout = () => {};

  if (!isLoggined) {
    //loginPage redirect
  }

  return (
    <>
      <MainLayout>
        <Menu roomList={roomListInfo} logout={logout} />
        {children}
      </MainLayout>
    </>
  );
});

export default AppLayout;
