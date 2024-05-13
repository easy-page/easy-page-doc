import { DEFAULT_COMPONENTS, EasyPage } from '@easy-page/antd-ui';
import React, { useState } from 'react';
import '../common/style';
import '@easy-page/antd-ui/style.css';
import { pageInfo } from './pageInfo';
import { FormPageProps, FormPageState } from './interface';
import { Switch } from 'antd';

const EasyCase = () => {
  const [mode, setMode] = useState('new');
  return (
    <div className="flex flex-col">
      <div style={{ marginBottom: '10px' }}>
        当前 mode: {mode}， 切换：
        <Switch
          onChange={() => {
            setMode(mode === 'edit' ? 'new' : 'edit');
          }}
          value={mode === 'edit'}
        />
      </div>
      <EasyPage<FormPageState, FormPageProps>
        {...pageInfo}
        context={{ mode: mode }}
        defaultValues={{
          userName: 'ccc',
        }}
        /** 按需加载表单所需组件 * */
        components={DEFAULT_COMPONENTS}
        pageType="form"
      />
    </div>
  );
};

export default EasyCase;
