import { nodeUtil } from '@easy-page/antd-ui';
import { Input } from 'antd';
import React from 'react';

export const name = nodeUtil.createCustomField(
  'name',
  '姓名',
  ({ value, onChange }) => {
    return <Input value={value} placeholder="姓名" onChange={onChange} />;
  },
  {
    value: '',
  }
);
