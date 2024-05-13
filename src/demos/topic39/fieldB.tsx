import { nodeUtil } from '@easy-page/antd-ui';
import { fieldA } from './fieldA';

export const fieldB = nodeUtil.extends(fieldA, {
  required: false,
  mode: 'single',
  name: '字段 B',
  id: 'fieldB',
  validate(oldValidate) {
    return async (context) => {
      const oldRes = await oldValidate?.(context);
      console.log('oldRes:', oldRes);
      if (oldRes && !oldRes?.success) {
        return oldRes;
      }
      if (context.value === 'opt2') {
        return {
          success: false,
          errorMsg: '不可以选择',
        };
      }
      return {
        success: true,
      };
    };
  },
});
