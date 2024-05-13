import { nodeUtil } from '@easy-page/antd-ui';
import { PageState } from '../../interface';

export const hobby = nodeUtil.createField<string[], PageState>(
  'hobby',
  '兴趣',
  {
    value: [],
    mode: 'multiple',
  },
  {
    checkBoxGroup: {
      options: [
        { label: '读书', value: 'read' },
        { label: '听歌', value: 'listen' },
      ],
    },
  }
);
