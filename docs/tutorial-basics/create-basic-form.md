---
sidebar_position: 2
---

# 创建基础表单

学习完基础的表单开发流程，我们来创建一下常见的表单字段。

> 除了下面所演示的组件外，用户可自由扩展。


## 组件

### 输入框
```tsx
import { nodeUtil } from '@easy-page/antd-ui';

export const name = nodeUtil.createField('name', '姓名', {
  value: '',
});
```

### 单选框

```tsx
import { nodeUtil } from '@easy-page/antd-ui';

export const sex = nodeUtil.createField(
  'sex',
  '性别',
  { value: '', mode: 'single' },
  {
    radioGroup: {
      options: [
        { label: '男', value: 'main' },
        { label: '女', value: 'female' },
      ],
    },
  }
);

```

### 多选框

```tsx
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

```

### 下拉框

```tsx
import { SelectState, UI_COMPONENTS, nodeUtil } from '@easy-page/antd-ui';

export const friend = nodeUtil.createField<SelectState<string>>(
  'friend',
  '朋友',
  { mode: 'single' },
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



```

### 文本框

```tsx
import { UI_COMPONENTS, nodeUtil } from '@easy-page/antd-ui';

export const desc = nodeUtil.createField(
  'desc',
  '介绍',
  {
    value: '',
  },
  {
    ui: UI_COMPONENTS.TEXTAREA,
  }
);

```

### 日期框
```tsx
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

```

### 日期范围框

```tsx
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

```

### 开关

开关打开后，展示一个字段

```tsx
import { UI_COMPONENTS, nodeUtil } from '@easy-page/antd-ui';

export const myswitch = nodeUtil
  .createField<boolean, { myswitch: boolean }>(
    'myswitch',
    '测试',
    {
      value: false,
      childrenWhen: {
        effectedKeys: ['myswitch'],
        show({ effectedData }) {
          return effectedData.myswitch === true;
        },
      },
    },
    {
      ui: UI_COMPONENTS.SWITCH,
    }
  )
  .appendChildren([
    nodeUtil.createField<string, { name: string }>('test1', '测试1', {
      value: '',
    }),
  ]);

```

### 增删子表单

参考：[增删子表单](/docs/tutorial-basics/create-child-form)章节。

## Demo

import BasicForms from '@site/src/demos/topic05';

<BasicForms></BasicForms>