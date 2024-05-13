import {
  DEFAULT_COMPONENTS,
  EXTRA_COMPONENTS,
  EasyPage,
} from '@easy-page/antd-ui';
import { PageState } from './interface';
import { pageInfo } from './pageInfo';
import React from 'react';

const BasicForms = () => {
  return (
    <EasyPage<PageState>
      components={{
        ...DEFAULT_COMPONENTS,
        ...EXTRA_COMPONENTS,
      }}
      pageType="form"
      {...pageInfo}
    />
  );
};

export default BasicForms;
