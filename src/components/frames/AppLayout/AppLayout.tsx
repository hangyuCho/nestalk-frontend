import React, { memo, useEffect, useCallback } from 'react';
import Menu from '../Menu';
import MainLayout from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@src/reducers/';
import Router from 'next/router';
import { roomListRequest } from '@src/reducers/chat/roomList';

interface Props {
  children: React.ReactNode;
}

const AppLayout = memo(({ children }: Props) => {
  const dispatch = useDispatch();
  const { roomListInfo } = useSelector((state: RootState) => state.chat); //menu에서 room에대한 정보를 요청할 때 필요
  const { info } = useSelector((state: RootState) => state.user); //현재 로그인 한 유저정보(채팅방리스트 컴포넌트로 옮길 예정)

  //테스트를 위해 작성(romeList 조회)
  useEffect(() => {
    //false
    if (info) {
      //loginPage redirect
      Router.push('/');
    } else {
      dispatch(roomListRequest(1));
    }
  }, [info]);

  const logout = useCallback(() => {}, []);

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
