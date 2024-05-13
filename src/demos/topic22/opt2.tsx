import { SelectState, UI_COMPONENTS, nodeUtil } from '@easy-page/antd-ui';

export const opt2 = nodeUtil.createField<
  SelectState<string>,
  {
    opt1: SelectState<string>;
  }
>(
  'opt2',
  '选项字段2',
  {
    value: { choosed: '3' },
    required: true,
    mode: 'single',
    actions: [
      {
        effectedKeys: ['opt1'],
        action: ({ effectedData, value }) => {
          console.log('effectedData:', effectedData);
          if (effectedData.opt1.choosed === '1') {
            return { fieldValue: { ...value, choosed: '3' } };
          } else if (effectedData.opt1.choosed === '2') {
            return { fieldValue: { ...value, choosed: '4' } };
          }
          return {};
        },
      },
    ],
  },
  {
    ui: UI_COMPONENTS.SELECT,
    select: {
      options: [
        { label: '选项3', value: '3' },
        { label: '选项4', value: '4' },
      ],
    },
  }
);
