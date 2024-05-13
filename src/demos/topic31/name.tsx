import { nodeUtil } from '@easy-page/antd-ui';
import { EXT_UI_COMPONENTS } from './constant';

export const name = nodeUtil.createField(
  'name',
  '姓名',
  {
    value: '',
  },
  {
    ui: EXT_UI_COMPONENTS.CUSTOM_INPUT,
    customInput: {
      placeholder: '这是姓名字段',
    },
  }
);
