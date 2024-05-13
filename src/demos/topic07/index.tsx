import { DEFAULT_COMPONENTS, EasyPage } from '@easy-page/antd-ui';
import React, { useEffect, useState } from 'react';
import '../common/style';
import { pageInfo } from './pageInfo';
import { Spin } from 'antd';

const sleep = (timeout: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, timeout);
  });
};

const BasicUse = () => {
  const [data, setData] = useState<{ data: any; loading: boolean }>({
    data: {},
    loading: true,
  });

  useEffect(() => {
    /** 模拟加载数据 */
    const loadData = async () => {
      // setData({ data: data.data, loading: true });
      await sleep(3000);
      const result = await Promise.resolve({
        people: { age: 1 },
      });
      setData({ data: result, loading: false });
    };
    loadData();
  }, []);
  console.log('data.loading:', data.loading);
  if (data.loading) {
    return <Spin />;
  }

  return (
    <EasyPage
      {...pageInfo}
      defaultValues={data.data}
      /** 按需加载表单所需组件 * */
      components={DEFAULT_COMPONENTS}
      pageType="form"
      /** 设置 key，异步回来后刷新组件 */
    />
  );
};

export default BasicUse;
