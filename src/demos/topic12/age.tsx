/* eslint-disable @typescript-eslint/no-explicit-any */
import { Empty, InputEffectedType, nodeUtil } from '@easy-page/antd-ui';

export const age = nodeUtil.createField<
  string,
  { name: string },
  Empty,
  InputEffectedType
>('age', '年龄', {
  value: '',
  when: {
    show: () => false,
  },
});
