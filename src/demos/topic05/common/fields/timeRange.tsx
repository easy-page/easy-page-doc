import { UI_COMPONENTS, nodeUtil } from '@easy-page/antd-ui';
import { RangePickerProps } from 'antd/es/date-picker';

export const timeRange = nodeUtil.createField<RangePickerProps['value'][]>(
  'timeRange',
  '时间范围',
  {
    postprocess(context) {
      return {
        timeRange: context.value?.map((e) => e?.toString()),
      };
    },
  },
  { ui: UI_COMPONENTS.DATE_PICKER_RANGE }
);
