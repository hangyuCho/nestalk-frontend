import React, { memo } from 'react';
import ChatList from '../../../components/menu/list/chat/index';
import MenuWrapper from './styled';

const Menu = memo(() => (
  <MenuWrapper>
    <div>
      <div>
        <span>menu!</span>
      </div>
      <ChatList/>
    </div>
  </MenuWrapper>
));

export default Menu;
