import { DEFAULT_COMPONENTS, EasyPage } from '@easy-page/antd-ui';
import React from 'react';
import '../common/style';
import '@easy-page/antd-ui/style.css';
import { pageInfo } from './pageInfo';

const EasyCase = () => {
  return (
    <EasyPage
      {...pageInfo}
      commonUIConfig={{
        formItem: {
          rules: [{ required: true }],
        },
        input: {
          placeholder: '请输入',
        },
      }}
      /** 按需加载表单所需组件 * */
      components={DEFAULT_COMPONENTS}
      pageType="form"
    />
  );
};

export default EasyCase;
