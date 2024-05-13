import { Empty, nodeUtil } from '@easy-page/antd-ui';
import { EXT_UI_COMPONENTS } from './constant';
import { InputEffectedType } from './Input';

export const name2 = nodeUtil.createField<
  string,
  { name: string },
  Empty,
  InputEffectedType
>(
  'name2',
  '姓名2',
  {
    value: '',
    actions: [
      {
        effectedKeys: ['name'],
        initRun: true,
        action: ({ effectedData }) => {
          return {
            effectResult: {
              inputProps: {
                placeholder: `基于 name: ${
                  effectedData.name || ''
                } 的 placeholder`,
              },
            },
          };
        },
      },
    ],
  },
  {
    ui: EXT_UI_COMPONENTS.CUSTOM_INPUT,
    customInput: {
      placeholder: '这是姓名字段',
    },
  }
);
