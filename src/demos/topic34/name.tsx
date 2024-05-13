import { nodeUtil, InputEffectedType, UI_COMPONENTS } from '@easy-page/antd-ui';
import { FormPageProps, FormPageState } from './interface';

export const name = nodeUtil.createField<
  string,
  FormPageState,
  FormPageProps,
  InputEffectedType
>(
  'name',
  '姓名',
  {
    value: 'pk', // 默认值，如果有 preprocess 会被覆盖
    required: true, // 必填
    preprocess: ({ defaultValues }) => defaultValues?.userName,
    postprocess: ({ value }) => ({ userName: value }),
    actions: [
      {
        effectedKeys: ['sex'],
        action: () => {
          return {
            effectResult: {
              inputProps: { placeholder: 'somethins' },
            },
          };
        },
      },
      {
        effectedKeys: ['mode'],
        action: () => {
          return {
            fieldValue: '',
          };
        },
      },
    ],
    when: {
      effectedKeys: ['mode'],
      show({ effectedData }) {
        return effectedData['mode'] === 'new';
      },
    },
  },
  {
    ui: UI_COMPONENTS.INPUT,
    formItem: {
      tooltip: '1111',
    },
    input: { maxLength: 12 },
  }
);
