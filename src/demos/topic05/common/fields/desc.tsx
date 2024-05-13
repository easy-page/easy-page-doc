import { UI_COMPONENTS, nodeUtil } from '@easy-page/antd-ui';

export const desc = nodeUtil.createField(
  'desc',
  '介绍',
  {
    value: '',
  },
  {
    ui: UI_COMPONENTS.TEXTAREA,
  }
);
