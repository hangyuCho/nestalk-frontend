import React from 'react';
import Popup from './popup';

const Header = () => {
    return (
    <>
      <div>
        <div>head</div>
        <Popup visible={true} width="20em">
          <div>hogehoge</div>
        </Popup>
      </div>
    </>
    );
}

export default Header;
