import React, { memo } from 'react';
import ChatList from '../../../components/menu/list/chat/list';
import Header from '../../../components/menu/common/header';
import MenuWrapper from './styled';

const Menu = memo(() => (
  <MenuWrapper>
    <div>
      <Header/>
      <ChatList/>
    </div>
  </MenuWrapper>
));

export default Menu;
