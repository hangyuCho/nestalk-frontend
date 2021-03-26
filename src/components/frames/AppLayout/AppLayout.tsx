import React from 'react';
import Menu from '../Menu';
import MainLayout from './styled';

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  const isLoggined = true;
  const dumyRoomList = [
    {
      room_id: 1,
      room_name: 'kyungmin',
      type: 'individualChat',
      participant: [1, 2],
      last_chat: '확인 바랍니다',
      not_read_chat: 3,
      updatedAt: new Date(),
    },
    {
      room_id: 2,
      room_name: 'hyojin',
      type: 'individualChat',
      participant: [1, 3, 4],
      last_chat: '테스트 입니다',
      not_read_chat: 1,
      updatedAt: new Date(),
    },
  ];
  const logout = () => {};

  if (!isLoggined) {
    //loginpage redirect
  }

  return (
    <>
      <MainLayout>
        <Menu roomList={dumyRoomList} logout={logout} />
        {children}
      </MainLayout>
    </>
  );
};

export default AppLayout;
