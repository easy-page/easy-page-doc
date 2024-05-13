import { DEFAULT_COMPONENTS, EasyPage } from '@easy-page/antd-ui';
import React from 'react';
import '../common/style';
import '@easy-page/antd-ui/style.css';
// import { pageInfo } from './pageInfo';

const Topic32 = () => {
  return (
    <EasyPage
      schema={{
        id: 'form_page',
        name: '',
        isFormField: false,
        childrenRelation: 'none',
        children: [
          {
            id: 'name',
            isFormField: true,
            name: '姓名',
            value: '',
            childrenRelation: 'none',
            actions: [],
          },
        ],
      }}
      uiConfig={{
        form_page_name: {
          formItem: { required: true },
        },
      }}
      /** 按需加载表单所需组件 * */
      components={DEFAULT_COMPONENTS}
      pageType="form"
    />
  );
};

export default Topic32;
