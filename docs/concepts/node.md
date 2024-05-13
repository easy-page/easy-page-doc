---
sidebar_position: 3
---

# 表单字段 DOM 结构

### 输入框字段的 DOM 结构

在表单页面中，以`Field` 结尾的 API 创建的单个字段会默认被 `FormItem 组件`包裹，如：

```tsx
export const name = nodeUtil.createField('name', '姓名', {
  value: '',
});
```

上述示例默认是一个输入框，我们可以通过指定：`ui` 来制定为：`TextArea`，如：

```tsx
export const name = nodeUtil.createField('name', '姓名', {
  value: '',
}, { ui: UI_COMPONENTS.TEXTAREA });
```

指定后，`name` 字段的组件结构如下：

```tsx
<FormItem>
  <TextArea />
</FormItem>
```

我们可以通过配置给：`FormItem` 传递 `Props` 或者更换 `FormItem` 组件，如：

```tsx
export const name = nodeUtil.createField('name', '姓名', {
  value: '',
}, {
  ui: UI_COMPONENTS.TEXTAREA,
  formItemUI: UI_COMPONENTS.CUSTOM_FORM_ITEM
  
});
```
> - `formItemUI` 为指定：`FormItem` 组件的key，默认组件为：`UI_COMPONENTS.FORM_ITEM`
> - `CUSTOM_FORM_ITEM` 为自定义组件，关于自定义组件的使用，请看：[扩展一个通用组件](/docs/tutorial-extras/extends_components)



### 输入框字段带子表单的 DOM 结构
倘若，我们希望字段下面存在子表单结构，我们即可这样定义：

```tsx
import { nodeUtil } from '@easy-page/antd-ui';

const text = nodeUtil.createField('text', '字段一', {
  value: '',
});
const text2 = nodeUtil.createField('text2', '字段二', {
  value: '',
});

export const name = nodeUtil
  .createField('name', '姓名', {
    value: '',
  })
  .appendChildren([text, text2]);
```

看起来，就是名字下面跟了一个字段一、字段二，实际结构如下：

```tsx
<Layout>
  <FormItem id="name">
    <TextArea />
  </FormItem>
  <div className="xx">
    <FormItem id="text">
    <TextArea />
  </FormItem>
   <FormItem id="text2">
    <TextArea />
  </FormItem>
  </div>
</Layout>
```

其中，layout 为默认组件，我们可以给它设置缩进：

```tsx
export const name = nodeUtil
  .createField(
    'name',
    '姓名',
    {
      value: '',
    },
    {
      layout: {
        /** 缩进子表单 */
        indentation: true,
      },
      ui: UI_COMPONENTS.TEXTAREA,
    },
  )
  .appendChildren([text]);
```

### 自定义 Layout 组件

我们对这样的子表单样式不是很满意，我们可以自定义通用的 `Layout` 组件，参考：[扩展一个通用的组件](/docs/tutorial-extras/extends_components)，自定义后，我们可以这样指定 `Layout` 组件：
```tsx
export const name = nodeUtil
  .createField('name', '姓名', {
    value: '',
  }, {
    ui: UI_COMPONENTS.TEXTAREA,
    layoutUI: UI_COMPONENTS.CUSTOM_LAYOUT,
  })
  .appendChildren([text, text2]);

```

> - `layoutUI` 为指定：`Layout` 组件的key，默认组件为：`UI_COMPONENTS.LAYOUT`
> - `CUSTOM_LAYOUT` 为自定义组件，关于自定义组件的使用，请看：[扩展一个通用的组件](/docs/tutorial-extras/extends_components)


## 总结
- 除了选择型组件（单选、多选）外其余使用了 `nodeUtil.createxxx().apendChildren([])` 中的 `apendChildren` 都默认会被一个 `Layout` 组件包裹。
  - 我们可以通过配置禁用此布局组件：`disableLayout`。
  - 我们也可以通过 `layoutUI` 指定对应的 ui 布局组件。
- 选择型组件使用：`appendChildren` 表示添加的其选项，如果选项创建时再使用了 `appendChildren` 表明添加了子表单，此时会有：`Layout` 布局，如：
  ```tsx
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
  ```

  > 详细介绍可查看：[字段显隐藏](/docs/tutorial-extras/when) 章节。

  - 指定字段节点的 UI 有三种类型：
    - `ui`: 字段本身组件，如：输入框组件、下拉框等
    - `formItemUI`: 表示包裹字段的：`FormItem` 组件的 UI
    - `layoutUI`: 表示包裹字段的布局组件 


