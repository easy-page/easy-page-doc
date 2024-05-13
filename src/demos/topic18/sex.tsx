import { UI_COMPONENTS, nodeUtil } from '@easy-page/antd-ui';

export const sex = nodeUtil
  .createField('sex', '性别', {
    value: 'man',
    mode: 'single',
  })
  .appendChildren([
    nodeUtil.createNode('man', { name: '男' }).appendChildren([
      nodeUtil.createField<string, { name: string }>('field1', '字段1', {
        value: '',
        when: {
          effectedKeys: ['name'],
          show({ effectedData }) {
            return effectedData.name === 'pk';
          },
        },
      }),
    ]),
    nodeUtil
      .createNode('female', { name: '女' })
      .appendChildren([nodeUtil.createField('field2', '字段2', { value: '' })]),
  ]);
