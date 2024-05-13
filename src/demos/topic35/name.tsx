import React from 'react';
import { nodeUtil } from '@easy-page/antd-ui';
import { Input } from 'antd';

export const text = nodeUtil.createCustomField(
  'text',
  '测试',
  ({ value, onChange }) => {
    return (
      <div>
        前缀：
        <Input value={value} onChange={(e) => onChange(e.target.value)} />
      </div>
    );
  },
  {}
);
