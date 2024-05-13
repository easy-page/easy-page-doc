import { UI_COMPONENTS, nodeUtil } from '@easy-page/antd-ui';
import { DatePickerProps } from 'antd';

export const date = nodeUtil.createField<DatePickerProps['value']>(
  'date',
  '时间',
  {
    value: undefined,
    postprocess(context) {
      return {
        date: context.value?.toString(),
      };
    },
  },
  { ui: UI_COMPONENTS.DATE_PICKER }
);
