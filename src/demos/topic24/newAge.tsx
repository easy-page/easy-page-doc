import { nodeUtil } from '@easy-page/antd-ui';
import { age } from './age';

export const newAge = nodeUtil.extends(age, {
  name: '我的年龄',
  required: false,
  validate(oldValidate) {
    return (options) => {
      if (!options.value) {
        return { success: true };
      }
      return oldValidate?.(options);
    };
  },
  when(oldWhen) {
    return {
      effectedKeys: oldWhen?.effectedKeys || [],
      show(context) {
        return true;
      },
    };
  },
  fieldUIConfig: (oldConfig) => {
    const newConfig = { ...(oldConfig || {}) };
    newConfig.formItem = newConfig.formItem || {};
    newConfig.formItem.tooltip = '这是新的年龄';
    return newConfig;
  },
});
