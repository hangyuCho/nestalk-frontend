import React, { useCallback } from 'react';
import { MenuLayout, MenuItem } from './styled';
import { RoomListData } from '@src/types/chatting';

interface Props {
  roomList: Array<RoomListData>;
  logout: () => void;
}

const Menu: React.FC<Props> = ({ roomList, logout }) => {
  const onLogout = useCallback(() => {
    //소켓연결 제거
    logout();
  }, []); //로그인 상태 변경 시

  return (
    <MenuLayout>
      <ul>
        <MenuItem>
          <li title="friend">친구</li>
        </MenuItem>
        <MenuItem>
          <li title="chat">채팅</li>
        </MenuItem>
        <MenuItem onClick={onLogout}>
          <li title="logout">logout</li>
        </MenuItem>
      </ul>
    </MenuLayout>
  );
};

export default Menu;
