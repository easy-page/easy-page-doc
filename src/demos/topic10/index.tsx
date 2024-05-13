import { DEFAULT_COMPONENTS, EasyPage } from '@easy-page/antd-ui';
import React from 'react';
import '../common/style';
import { pageInfo } from './pageInfo';

const Topic10 = () => {
  return (
    <EasyPage
      {...pageInfo}
      /** 按需加载表单所需组件 * */
      components={DEFAULT_COMPONENTS}
      pageType="form"
    />
  );
};

export default Topic10;
