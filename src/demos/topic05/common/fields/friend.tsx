import { SelectState, UI_COMPONENTS, nodeUtil } from '@easy-page/antd-ui';

export const friend = nodeUtil.createField<SelectState<string>>(
  'friend',
  '朋友',
  { mode: 'single', value: { value: '' } },
  {
    ui: UI_COMPONENTS.SELECT,
    select: {
      options: [
        { label: '朋友1', value: 'friend1' },
        { label: '朋友2', value: 'friend2' },
      ],
    },
  }
);
