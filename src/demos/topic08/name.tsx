import { nodeUtil } from '@easy-page/antd-ui';

export const name = nodeUtil.createField(
  'name',
  '姓名1',
  {
    value: '',
    required: true,
  },
  {
    input: {
      placeholder: '请输入姓名',
      prefix: '前缀',
      showCount: true,
    },
  }
);
