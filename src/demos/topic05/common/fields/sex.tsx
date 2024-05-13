import { nodeUtil } from '@easy-page/antd-ui';

export const sex = nodeUtil.createField(
  'sex',
  '性别',
  { value: '', mode: 'single' },
  {
    radioGroup: {
      options: [
        { label: '男', value: 'main' },
        { label: '女', value: 'female' },
      ],
    },
  }
);
