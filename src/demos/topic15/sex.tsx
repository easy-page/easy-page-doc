import { UI_COMPONENTS, nodeUtil } from '@easy-page/antd-ui';

export const sex = nodeUtil
  .createField('sex', '性别', {
    value: 'man',
    mode: 'single',
  })
  .appendChildren([
    nodeUtil
      .createNode('man', { name: '男' })
      .appendChildren([nodeUtil.createField('field1', '字段1', { value: '' })]),
    nodeUtil
      .createNode('female', { name: '女' })
      .appendChildren([nodeUtil.createField('field2', '字段2', { value: '' })]),
  ]);
