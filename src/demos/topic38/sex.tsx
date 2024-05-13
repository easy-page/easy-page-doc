import { nodeUtil } from '@easy-page/antd-ui';

export const sex = nodeUtil
  .createField(
    'sex',
    '性别',
    { value: '', mode: 'single' },
  )
  .appendChildren([
    nodeUtil
      .createNode('man', { name: '男' })
      .appendChildren([
        nodeUtil.createField('like', '喜欢看的书', { value: '' }),
      ]),
    nodeUtil.createNode('female', { name: '女' }),
  ]);
