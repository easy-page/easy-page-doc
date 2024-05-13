import { DEFAULT_COMPONENTS, EasyPage } from '@easy-page/antd-ui';
import React, { useState } from 'react';
import '../common/style';
import '@easy-page/antd-ui/style.css';
import { pageInfo } from './pageInfo';
import { FormPageProps, FormPageState } from './interface';

const EasyCase = () => {
  return (
    <EasyPage<FormPageState, FormPageProps>
      {...pageInfo}
      /** 按需加载表单所需组件 * */
      components={DEFAULT_COMPONENTS}
      pageType="form"
    />
  );
};

export default EasyCase;
