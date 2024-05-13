---
sidebar_position: 2
---

# 字段组件 Props 透传

:::info
- 下方以 `nodeUtil.createField` 为例，其余 API 的数据处理类似，详情可见 API 文档。
:::


## 给组件透传 Props

字段的 UI 配置，其实就指的是我们给组件传递 `Props`。如下示例，如下示例：

```tsx
import { nodeUtil } from '@easy-page/antd-ui';

export const name = nodeUtil.createField(
  'name',
  '姓名1',
  {
    value: '',
    required: true,
  },
  {
    input: {
      placeholder: '请输入姓名',
      prefix: '前缀',
      showCount: true,
    },
  }
);

```
在简介中有提过，一般创建的默认组件：
- 输入型，默认：输入框组件
- 选择型，默认：单选-RadioGroup、多选-CheckBoxGroup （会配置：mode 属性）

上述未做任何配置，因此是输入型，默认为 `Input` 组件，我们给 `Input` 传递了 `Props`:

```
{
  ...
  input: {
    placeholder: '请输入姓名',
    prefix: '前缀',
    showCount: true,
  },
}
```
这个配置的 `input`  key 是怎么知道的？其实咱们有个约定：
- 组件的 `Props` 命名一般是组件名的：**首字母小写+驼峰**，如：`TextArea` 组件，它的属性配置 key 就是：`textArea`

那这个 key 是在哪儿定义的呢，其实在定义基础组件的时候就定义了。

```tsx
declare module '@easy-page/react-ui/interface' {
  export interface FieldUIConfig {
    /** 这里的 key 就是上面的 Props **/
    input?: InputBaseProps;
  }
}
```
> 详细，请参考章节：[扩展基础组件](/docs/tutorial-extras/extends_components)

定义了上述配置，我们看看效果:

import Case from '@site/src/demos/topic08'

<Case></Case>


## 指定组件

上述示例中，展示了默认组件，我们也可以指定我们想要渲染的组件， 如下：

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
    textArea: {
      placeholder: '请输入介绍',
    },
  }
);


```

如上，我们通过：`ui` 属性指定了 `TextArea` 组件，按照上述规则，传了 `Props`，案例如下：

import Topic09 from '@site/src/demos/topic09'

<Topic09></Topic09>



## 指定 FormItem 的 Props

:::tip
- 关于单个字段的 `Dom` 结构，请看：[字段 Dom 结构章节](/docs/concepts/node)
:::

我们前面有介绍，使用：`nodeUtil.createField` 创建的表单元素（ API 以 `Field` 结尾），会自动被 `FormItem` 包裹，因此，我们可以直接透传 `Props` 给
`FormItem`。

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
    textArea: {
      placeholder: '请输入介绍',
    },
    formItem: {
      extra: '增加提示信息',
    },
  }
);

```

如上，我们给 `FormItem` 增加了提示信息：`extra`，效果如下：

import Topic10 from '@site/src/demos/topic10'

<Topic10></Topic10>


## 更换默认的 FormItem 组件

有时候，我们觉得框架默认的 `FormItem` 组件不能满足需求，想自己扩展后指定对应的组件，这时候有两种方式：

### 全局 `FormItem` 替换

我们只需要在表单注册组件时，替换对应 Key 的组件即可，如下：

```tsx
const Topic10 = () => {
  return (
    <EasyPage
      {...pageInfo}
      /** 按需加载表单所需组件 * */
      components={{
        ...DEFAULT_COMPONENTS,
        [UI_COMPONENTS.FORMITEM]: CustomFormItem
      }}
      pageType="form"
    />
  );
};

```

> 关于如何扩展 `FormItem` 组件，可参考章节：[组件扩展](/docs/tutorial-extras/extends_components)

### 局部 `FormItem` 替换

我们只需要对字段指定对应的自定义组件即可，如 `formItemUI: UI_COMPONENTS.CUSTOM_FORM_ITEEM`：

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
    textArea: {
      placeholder: '请输入介绍',
    },
    formItemUI: UI_COMPONENTS.CUSTOM_FORM_ITEM
    customFormItem: {
      extra: '增加提示信息',
    },
  }
);

```

如上，我们指定了自定义组件：`UI_COMPONENTS.CUSTOM_FORM_ITEM`，传递了组件属性：`customFormItem`



## 动态传递组件 Props

可能我们有这样的场景，一个字段要显示什么内容和上下文相关，比如：
- 年龄字段的提示语，改为：`${name} 的年龄`

效果如下：

import Topic11 from '@site/src/demos/topic11'

<Topic11></Topic11>

此时 `name` 字段的值变化，年龄的 `placeholder` 随之变化，这种联动，我们称之为副作用：`actions`，我们可以如下定义：

```tsx
import { Empty, InputEffectedType, nodeUtil } from '@easy-page/antd-ui';

export const age = nodeUtil.createField<
  string,
  { name: string },
  Empty,
  InputEffectedType
>('age', '年龄', {
  value: '',
  required: true,
  /** 字段副作用 */
  actions: [
    {
      effectedKeys: ['name'],
      /** 加载时，立即执行 */
      initRun: true,
      action: ({ effectedData, value, initRun }) => {
        return {
          effectResult: {
            inputProps: {
              placeholder: `${effectedData.name || '-'} 的年龄`,
            },
          },
        };
      },
    },
  ],
});

```
基于上面定义，我们写了一个 `action`，首先我们定义了受谁影响：`effectedKeys: ['name']`。精确指定了，只有当：`name` 变化的时候，才执行副作用；其次，我们指定了：`initRun:true`，表示组件挂在时，就执行一次此逻辑。
最后，我们定义了副作用的 `action`，根据 `name` 的值，返回副作用结果：`effectResult`，变更 `inputProps`

```tsx
 effectResult: {
    inputProps: {
      placeholder: `${effectedData.name || '-'} 的年龄`,
    },
  }
```


:::tip
- 更多关于 `actions` 请参考：[字段联动](/docs/tutorial-extras/actions)
:::
