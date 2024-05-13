import { UI_COMPONENTS, nodeUtil } from '@easy-page/antd-ui';

export const desc = nodeUtil.createField(
  'desc',
  '介绍',
  {
    value: '',
  },
  {
    ui: UI_COMPONENTS.TEXTAREA,
    textArea: {
      placeholder: '请输入介绍',
    },
    formItem: {
      extra: '增加提示信息',
    },
  }
);
