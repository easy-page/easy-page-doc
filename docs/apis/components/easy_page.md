---
sidebar_position: 1
---

# EasyPage

`EasyPage` 是我们的主要组件，用于解析和渲染页面。基础使用如下：

```tsx
import { DEFAULT_COMPONENTS, EasyPage } from '@easy-page/antd-ui';
import React from 'react';
import '../common/style';
import '@easy-page/antd-ui/style.css';
// import { pageInfo } from './pageInfo';

const Topic32 = () => {
  return (
    <EasyPage
      schema={{
        id: 'form_page',
        name: '',
        isFormField: false,
        childrenRelation: 'none',
        children: [
          {
            id: 'name',
            isFormField: true,
            name: '姓名',
            value: '',
            childrenRelation: 'none',
            actions: [],
          },
        ],
      }}
      uiConfig={{
        form_page_name: {
          formItem: { required: true },
        },
      }}
      /** 按需加载表单所需组件 * */
      components={DEFAULT_COMPONENTS}
      pageType="form"
    />
  );
};

export default Topic32;
```


import Topic32 from '@site/src/demos/topic32';

<Topic32></Topic32>

## 属性简介

### schema

```tsx
export type EasyPageProps<
  PageState,
  PageProps extends DefaultPageProps<PageState>,
  DefaultValues = Record<string, any>
> = {
  schema: Schema<unknown, PageState, PageProps>;
  ...
}
```

`schema` 描述的是页面内容，协议参考：[Schema 设计](/docs/concepts/schema)，按照协议，我们描述了如下：
```tsx
{
  id: 'form_page',
  name: '',
  isFormField: false,
  childrenRelation: 'none',
  children: [
    {
      id: 'name',
      isFormField: true,
      name: '姓名',
      value: '',
      childrenRelation: 'none',
      actions: [],
    },
  ],
}
```
它表示，我描述了一个表单页面，里面包含一个字段：“name”。

**一般，我们不直接写 `Schema`，因为太低效且难以维护**。我们会通过：`nodeUtil` 和 `pageUtil` 生成。如上内容，我们这么写即可：
- 创建 `name` 字段
  ```tsx
  import { nodeUtil } from '@easy-page/antd-ui';
  export const name = nodeUtil.createField('name', '姓名', {
    value: '',
    required: true,
  });

  ```
- 创建一个页面，放入 `name` 字段

  ```tsx
  import { PageUtil } from '@easy-page/antd-ui';
  import { name } from './name';

  const pu = new PageUtil({ pageId: 'form-page' });
  /** 添加 name 字段到页面结构中 * */
  pu.addFields([name]);

  /** 返回页面结构数据 * */
  export const pageInfo = pu.getPageInfo();

  ```
- 页面上直接使用：

  ```tsx
    const EasyCase = () => {
      return (
        <EasyPage
          {...pageInfo}
          /** 按需加载表单所需组件 * */
          components={DEFAULT_COMPONENTS}
          pageType="form"
        />
      );
    };
  ```

### uiConfig
```tsx
export type EasyPageProps<
  PageState,
  PageProps extends DefaultPageProps<PageState>,
  DefaultValues = Record<string, any>
> = {
  uiConfig: UIConfig;
  ...
}
```
描述的是节点的 UI 配置：使用的组件 + 组件的 Props，类型如下：

```tsx
export type UIConfig = Record<string, FieldUIConfig>;
```
其中，key 为：“父节点 ID + 子节点的 ID”，如上所示：`form_page_name，value 为对应节点的 UI 配置，如上所示：
```tsx
form_page_name: {
    formItem: { required: true },
  }
```
> 这里只是底层设计讲解，实际上我们并不需要手动的去拼接：“父节点 ID + 子节点的 ID” key，通过: `nodeUtil` 和 `pageUtil` 自动处理。

配置了 `name` 节点包裹的：`formItem` 组件的 `required: true`

其中：`FieldUIConfig` 的基础类型如下：

```tsx
export interface FieldUIConfig {
  ui?: string; // 字段本身 UI 组件
  formItemUI?: string; // 字段本身包裹的 FormItem 组件名，默认为：`FormItem`
  layoutUI?: string; // 字段本身包裹的布局组件名
}
```
我们可以通过：`ui`、`formItemUI`、`layoutUI`分别指定对应节点的三种 UI。
> - 关于节点的结构：[表单字段的 Dom 结构](/docs/concepts/node)

指定了对应组件，我们就可以通过：`FieldUIConfig` 给组件传递 Props。
- `FieldUIConfig` 会在组件定义的时候，扩展接口定义，从而可以给组件传递 Props。
- 组件 Props 传递的规则就是指定组件名的：**首字母小写驼峰**，如：`Input` 组件，其 Props 的 key 为：`input`， 如：`TEXTAREA` 组件，其 Props 的 key 为：`textArea`
- 关于组件的 Props 定义，可参考章节：[扩展一个通用组件](//docs/tutorial-extras/extends_components)了解细节。

如：
```tsx
 uiConfig={{
    form_page_name: {
      ui: UI_COMPONENTS.TEXTAREA,
      formItem: { required: true },
      textArea: { placeholder: '请输入姓名' }
    },
  }}
```
我们给 `TextArea` 组件传递了 `Props`: `textArea.placeholder` 属性。

### commonUIConfig
```tsx
export type EasyPageProps<
  PageState,
  PageProps extends DefaultPageProps<PageState>,
  DefaultValues = Record<string, any>
> = {
  commonUIConfig?: CommonUIConfig;
  ...
}
```
通常，我们可以通过上面讲的，给某个节点指定：`ui` 组件以及传递 `Props`，但通用的组件，如果都去指定和写 `Props` 就会很麻烦。如：
- 给表单所有的 `input` 框默认 placeHolder: '请输入'
- 给表单所有的 `FormItem` 组件默认 `required: true`

此时，如果给每个输入框都传一个，就会很麻烦，我们就可以设置 `CommonUIConfig`通用 UI 配置：

```tsx
export type CommonUIConfig = Omit<FieldUIConfig, 'ui'>
```

`demo` 如下：

import Topic33 from '@site/src/demos/topic33';

<Topic33></Topic33>


### components

```tsx
components?: Record<string, React.JSXElementConstructor<any>>;
```

用于向表单里注册需要的组件，使用方式如下：

```tsx
import { Input } from 'antd';

<EasyPage components={{input: Input }} ... />
```

### pageType

```tsx
pageType?: 'form' | 'page';
```
EasyPage 支持的使用模式是：表单、非表单页面，传递为：`form` 则指表单页面，这样，
通过 `nodeUtil` 以 `Field` 结尾的 api 创建的节点都会带上：`formItem` 元素的包裹，非表单页面模式则不会。

```tsx
<EasyPage pageType="form" ... />
```

### context

```tsx
context?: PageProps;
```
- 基本作用

  EasyPage 页面的上下文，由外部传入的状态，类似于组件的：`props`，当其变化了，表单里也可以通过：`effects` 中的 `effectedKeys` 进行监听相关属性变化，执行相关 `action`。

  使用方式如下：

  ```tsx
  <EasyPage context={{ mode: 'edit' }} />
  ```
  当传递了上下文后，表单中的字段就可以监听其变化，如下：

  ```tsx
  const text = nodeUtil.createField<string,Empty, { mode: edit }>('text', '测试字段', {
    actions: [{
      effectedKeys: ['mode'],
      action: ({ effectedData }) => {
        /** 如果是编辑模式，则清空当前字段 **/
        if (effectedData['mode'] === 'edit') {
          return { fieldValue: '' }
        }
        return {}
      }
    }]
  })
  ```
- 控制页面字段的可编辑状态

  props 存在默认的类型结构，我们可以通过如下类型传递，控制页面字段是否可编辑
  
  ```tsx
    export type DefaultPageProps<PageState> = {
      editable?: EditableConfig<PageState>;
    };

    export type EditableConfig<PageState> =
    | boolean
    | {
        /** 白名单模式：只有配置了此 key 的字段可编辑 */
        canEditKeys?: Array<keyof Partial<PageState>>;
        /** 黑名单模式：配置了此 key 的字段不可编辑 */
        canNotEditKeys?: Array<keyof Partial<PageState>>;
      };
  ```
  如下使用方式：
  
  ```tsx
  <EasyPage context={ editable: false } />
  ```
  当：`editable = false` 时，整个表单禁止编辑。

  ```tsx
  <EasyPage context={ canEditKeys: ['text'] } />
  ```

  只有 key 为：`text` 的字段才可以进行编辑。

  ```tsx
  <EasyPage context={ canNotEditKeys: ['text'] } />
  ```

  只有 key 不为：`text` 的字段才可以编辑。




### setFormUtil

```tsx
setFormUtil?: (formUtil: FormUtil<PageState>) => void;
```

表单的 `FormRef` 实例，可用于表单的各种操作。

### onChange

```tsx

export type EasyPageOnChageContext<PageState> = {
  value: Partial<PageState>, // 当前变化的值
  values: Record<string, any>, // 表单执行完所有 postprocess 的值
  oriFormData: Partial<PageState> // 表单原始数据
  formUtil?: FormUtil<PageState> | null
}

onChange?: (context: EasyPageOnChageContext<PageState> & {
    hasChanged: (key: Partial<keyof PageState>) => boolean // 某个字段是否存在变化，简化使用。
  }) => void;
```

`onChange` 属性，表示表单值变化时，用户可以做一些监听处理。

```tsx
<EasyPage onChange={({ hasChanged }) => {
  if (hasChanged('text')) {
    doSomething()...
  }
}} />
```
如上，如果：EasyPage 中有元素 text 发生变化，则执行相关操作。


### effects

```tsx
export type EasyPageEffect<PageState> = {
  changedKeys: Array<keyof PageState>
  action: (context: EasyPageOnChageContext<PageState>) => void;
}

effects?: EasyPageEffect<PageState>[];
```

表单的副作用字段，表示：当表单字段变化后，执行某个动作。和 `onChange` 有些类似，不同的是，它写起来会比 `onChange` 规范，使用场景上：
- `onChange` 执行的动作更倾向于，无论什么发生变化，我都要做一件事情，比如通知。
- `effects` 的使用场景是，某个字段变化，对应执行某个动作。

```tsx
<EasyPage 
  effects=[{
    effectedKeys: ["text"], 
    action: () => {
      doSomething()...
    }}
  ] />
```

如上表示，当：`text` 发生变化后，执行动作。

### defaultValues

表单的默认值，传递后，每个字段会根据自己的 `preprocess` 函数进行处理返回成自己想要的结构；
如果未配置 `preprocess` 则默认根据 `defaultValues` 里的 key 进行匹配回填值。

如：

```
<EasyPage defaultValues={{ name: "pk" , a: 2 }} />
```

则表单里的字段如：

```tsx
  export const name = nodeUtil.createField('name', '姓名', {
    value: '',
    required: true,
  });
```
因为字段 key `name` 和默认值里的 `name` 匹配，则会自动回填到 `name` 字段上。

```tsx
  export const age = nodeUtil.createField('age', '年龄', {
    value: '',
    required: true,
    preporcess: ({ defaultValues }) => defaultValues.a
  });
```
因为字段 key 未匹配到对应默认值，通过：`preporcess` 处理了数据转化，回填。

### layout

```tsx
layout?: EasyPageLayout<PageState>;
```

表单的最外层容器布局，如果需要表单布局，则可以传递。

```tsx
<EasyPage layout={({ children }) => 
  <div> 
      <div>标题</div>
      {children}
  </div>
} />
```

其中，`children` 就是表单内容，我们给表单增加了一个标题的布局。