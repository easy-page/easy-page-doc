import {
  DEFAULT_COMPONENTS,
  EasyPage,
  EXTRA_COMPONENTS,
} from '@easy-page/antd-ui';
import React, { useState } from 'react';
import '../common/style';
import '@easy-page/antd-ui/style.css';
import { pageInfo } from './pageInfo';
import { FormPageProps, FormPageState } from './interface';
import { Tabs } from 'antd';

const EasyCase = () => {
  return (
    <div className="flex flex-col">
      <EasyPage<FormPageState, FormPageProps>
        {...pageInfo}
        defaultValues={{
          activities: [
            {
              name: '默认 tab',
            },
          ],
        }}
        /** 按需加载表单所需组件 * */
        components={{ ...DEFAULT_COMPONENTS, ...EXTRA_COMPONENTS }}
        pageType="form"
      />
    </div>
  );
};

export default EasyCase;
