import { UI_COMPONENTS, nodeUtil } from '@easy-page/antd-ui';

export const switchTest = nodeUtil
  .createField<boolean, { switchTest: boolean }>(
    'switchTest',
    '开关测试',
    {
      value: false,
      postprocess(context) {
        return {};
      },
      childrenWhen: {
        effectedKeys: ['switchTest'],
        show({ effectedData }) {
          return effectedData.switchTest === true;
        },
      },
    },
    {
      ui: UI_COMPONENTS.SWITCH,
    }
  )
  .appendChildren([
    nodeUtil.createField('field1', '字段1', { value: '' }),
    nodeUtil.createField('field2', '字段2', { value: '' }),
  ]);
