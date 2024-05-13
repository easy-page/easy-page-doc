import { nodeUtil } from '@easy-page/antd-ui';

export const fieldA = nodeUtil
  .createField<string[]>(
    'fieldA',
    '字段 A',
    {
      mode: 'multiple',
      required: true,
      validate: ({ value }) => {
        return {
          success: Boolean(value),
          errorMsg: '请选择字段 A',
        };
      },
    },
    {
      formItem: {
        tooltip: '测试文案',
      },
    }
  )
  .appendChildren([
    nodeUtil.createNode('opt1', { name: '选项1' }),
    nodeUtil.createNode('opt2', { name: '选项2' }),
  ]);
