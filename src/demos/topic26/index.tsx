import { DEFAULT_COMPONENTS, EasyPage } from '@easy-page/antd-ui';
import React from 'react';
import '../common/style';
import '@easy-page/antd-ui/style.css';
import { pageInfo } from './pageInfo';

const Topic26 = () => {
  return (
    <EasyPage<{ name: string; age: string }>
      {...pageInfo}
      context={{
        editable: {
          canNotEditKeys: ['age'],
        },
      }}
      /** 按需加载表单所需组件 * */
      components={DEFAULT_COMPONENTS}
      pageType="form"
    />
  );
};

export default Topic26;
