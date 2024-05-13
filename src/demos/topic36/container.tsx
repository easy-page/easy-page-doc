import React from 'react';
import { nodeUtil } from '@easy-page/antd-ui';
import { name } from './name';
import { sex } from './sex';

export const rowContainer = nodeUtil
  .createContainer('container', ({ children }) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {children}
      </div>
    );
  })
  .appendChildren([name, sex]);
