import { UI_COMPONENTS, nodeUtil } from '@easy-page/antd-ui';

export const myswitch = nodeUtil
  .createField<boolean, { myswitch: boolean }>(
    'myswitch',
    '测试',
    {
      value: false,
      childrenWhen: {
        effectedKeys: ['myswitch'],
        show({ effectedData }) {
          return effectedData.myswitch === true;
        },
      },
    },
    {
      ui: UI_COMPONENTS.SWITCH,
    }
  )
  .appendChildren([
    nodeUtil.createField<string, { name: string }>('test1', '测试1', {
      value: '',
    }),
  ]);
