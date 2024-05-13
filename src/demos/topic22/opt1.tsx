import { SelectState, UI_COMPONENTS, nodeUtil } from '@easy-page/antd-ui';

export const opt1 = nodeUtil.createField<SelectState<string>>(
  'opt1',
  '选项字段1',
  {
    value: { choosed: '1' },
    required: true,
    mode: 'single',
  },
  {
    ui: UI_COMPONENTS.SELECT,
    select: {
      options: [
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' },
      ],
    },
  }
);
