import { DEFAULT_COMPONENTS, EasyPage } from '@easy-page/antd-ui';
import React from 'react';
import '../common/style';
import '@easy-page/antd-ui/style.css';
import { pageInfo } from './pageInfo';
import { EXT_UI_COMPONENTS } from './constant';
import { CustomInput } from './Input';

const Topic30 = () => {
  return (
    <EasyPage<{ name: string; age: string }>
      {...pageInfo}
      /** 按需加载表单所需组件 * */
      components={{
        ...DEFAULT_COMPONENTS,
        [EXT_UI_COMPONENTS.CUSTOM_INPUT]: CustomInput,
      }}
      pageType="form"
    />
  );
};

export default Topic30;
