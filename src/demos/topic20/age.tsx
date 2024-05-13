/* eslint-disable @typescript-eslint/no-explicit-any */
import { Empty, InputEffectedType, nodeUtil } from '@easy-page/antd-ui';

export const age = nodeUtil.createField<
  string,
  { name: string },
  Empty,
  InputEffectedType
>('age', '年龄', {
  value: '',
  required: true,
  /** 字段副作用 */
  actions: [
    {
      effectedKeys: ['name'],
      /** 加载时，立即执行 */
      initRun: true,
      action: ({ effectedData, value, initRun }) => {
        return {
          effectResult: {
            inputProps: {
              placeholder: `${effectedData.name || '-'} 的年龄`,
            },
          },
        };
      },
    },
  ],
});
