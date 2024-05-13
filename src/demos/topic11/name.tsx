import { nodeUtil } from '@easy-page/antd-ui';

export const name = nodeUtil.createField(
  'name',
  '姓名',
  {
    value: '',
  },
  { input: { trigger: 'onChange' } }
);
