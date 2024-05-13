import {
  DEFAULT_COMPONENTS,
  EasyPage,
  EXTRA_COMPONENTS,
} from '@easy-page/antd-ui';
import React from 'react';
import '../common/style';
import { pageInfo } from './pageInfo';

const Topic17 = () => {
  return (
    <EasyPage
      {...pageInfo}
      /** 按需加载表单所需组件 * */
      showChildren={{
        hobby: ({ fieldValue, curNode }) => {
          return fieldValue.choosed?.includes(curNode.id);
        },
      }}
      components={{ ...DEFAULT_COMPONENTS, ...EXTRA_COMPONENTS }}
      pageType="form"
    />
  );
};

export default Topic17;
