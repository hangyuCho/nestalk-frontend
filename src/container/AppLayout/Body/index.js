import React, { memo } from 'react';

import BodyWrapper from './styled';

const Body = memo(() => (
  <BodyWrapper>
    <div>
      <div>
        <span>body!</span>
      </div>
    </div>
  </BodyWrapper>
));

export default Body;
