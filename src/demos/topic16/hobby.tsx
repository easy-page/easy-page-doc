import { UI_COMPONENTS, nodeUtil } from '@easy-page/antd-ui';

export const hobby = nodeUtil
  .createField<string[]>('hobby', '兴趣', {
    value: ['read'],
    mode: 'multiple',
  })
  .appendChildren([
    nodeUtil
      .createNode('read', { name: '读书' })
      .appendChildren([nodeUtil.createField('field1', '字段1', { value: '' })]),
    nodeUtil
      .createNode('song', { name: '唱歌' })
      .appendChildren([nodeUtil.createField('field2', '字段2', { value: '' })]),
  ]);
