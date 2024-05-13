---
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# 字段显隐

:::info
- 下方以 `nodeUtil.createField` 为例，其余 API 的数据处理类似，详情可见 API 文档。
:::


## 字段本身显示与隐藏
### 不展示控制

如下，设置后 `when` 配置后，任何情况都不展示年龄字段：

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Empty, InputEffectedType, nodeUtil } from '@easy-page/antd-ui';

export const age = nodeUtil.createField<
  string,
  { name: string },
  Empty,
  InputEffectedType
>('age', '年龄', {
  value: '',
  when: {
    show: () => false,
  },
});

```
效果如下，表单中包含 `name` 和 `age` 字段，`age` 字段不展示，提交也不会打印出 `age` 的值：

import EasyCase from '@site/src/demos/topic12';

<EasyCase></EasyCase>

### 根据条件展示

如：当输入 `name=pk` 时，展示年龄字段：

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Empty, InputEffectedType, nodeUtil } from '@easy-page/antd-ui';

export const age = nodeUtil.createField<
  string,
  { name: string },
  Empty,
  InputEffectedType
>('age', '年龄', {
  value: '',
  when: {
    effectedKeys: ['name'],
    show: ({ effectedData }) => effectedData.name === 'pk',
  },
});

```

如上，我们定义了：`effectedKeys: ['name']`，表示受到 `name` 影响，其表现为：
- `show: ({ effectedData }) => effectedData.name === 'pk'`，

当 `name = pk` 时，展示年龄，效果如下：

import Topic13 from '@site/src/demos/topic13';

<Topic13></Topic13>

当输入`name = pk`时，展示 `age` 字段，表单提交时，`age`有值，当输入`name !== pk`时，不展示 `age` 字段，表单提交时，`age` 无值。

## 子表单

在表单中常见的场景是：
- 在选择某一个选项后，隐藏某些子表单，或者展示某些子表单。

### 常见的场景
常见的交互一般是：
- 单选框，选择某个选项展示，其余不展示
- 多选框，选择哪个，就展示哪个选项的一些表单
- 下拉框，同单选、多选场景
- 开关打开，展示表单、关闭隐藏

上述场景，除了开关以外，无需向上面的例子一样，定义 `when`，逻辑都被默认，只需要如下案例中写即可。

#### 单选框

创建一个 `sex` 字段，当选中 `男生` 或者 `女生` 时出现其响应选项。

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
import Topic15 from '@site/src/demos/topic15';

<Topic15></Topic15>

上述例子中，我们创建了一个单选型字段：`mode: 'single'`，默认为：`RadioGroup` 组件。创建了两个选项：

```tsx
nodeUtil.createNode('man', { name: '男' })
```
并为其添加了一个子表单：

```tsx
nodeUtil
  .createNode('man', { name: '男' })
  .appendChildren([
    nodeUtil.createField('field1', '字段1', { value: '' })
  ])
```

#### 多选框

```tsx
import { UI_COMPONENTS, nodeUtil } from '@easy-page/antd-ui';

export const hobby = nodeUtil
  .createField<string[]>('hobby', '兴趣', {
    value: ['read'],
    mode: 'multiple',
  })
  .appendChildren([
    nodeUtil
      .createNode('read', { name: '读书' })
      .appendChildren([nodeUtil.createField('field1', '字段1', { value: '' })]),
    nodeUtil
      .createNode('song', { name: '唱歌' })
      .appendChildren([nodeUtil.createField('field2', '字段2', { value: '' })]),
  ]);

```


import Topic16 from '@site/src/demos/topic16';

<Topic16></Topic16>

如上所示：
- 当我们选择了读书后，出现字段一；同时选择唱歌后出现字段二。


#### 下拉框

我们还以兴趣为例，给其指定：`ui: UI_COMPONENTS.SELECT`，它就变成下拉框了。

```tsx
import { UI_COMPONENTS, nodeUtil, SelectState } from '@easy-page/antd-ui';
export const hobby = nodeUtil
  .createField<SelectState<string[]>>(
    'hobby',
    '兴趣',
    {
      value: { choosed: ['read'] },
      mode: 'multiple',
    },
    {
      ui: UI_COMPONENTS.SELECT,
    }
  )
  .appendChildren([
    nodeUtil
      .createNode('read', { name: '读书' })
      .appendChildren([nodeUtil.createField('field1', '字段1', { value: '' })]),
    nodeUtil
      .createNode('song', { name: '唱歌' })
      .appendChildren([nodeUtil.createField('field2', '字段2', { value: '' })]),
  ]);


```
通过上述示例，我们在 `EasyPage` 组件上还需要传递自定义匹配方法才行：
```tsx
  <EasyPage
    {...pageInfo}
    /** 按需加载表单所需组件 * */
    showChildren={{
      hobby: ({ fieldValue, curNode }) => {
        // 这里可以具体判断某一个字段的时候，采取某种方式匹配
      return fieldValue.choosed?.includes(curNode.id);
      }
    }}
    components={{ ...DEFAULT_COMPONENTS, ...EXTRA_COMPONENTS }}
    pageType="form"
  />
```
其中 key 为对应字段，value 为该字段的子元素表单字段展示条件判断。

这就得说为什么：单选框、多选框可以直接联动了？
- 联动的原理是因为在 `layout` 组件内部循环子表单的时候判断：
  - 如果字段值是数组，则看数组里是否包含当前选项，包含当前选项则呈现：对应子表单
  - 如果字段的值是 string，则直接比较：当前选中的值和当前选项 ID 是否相等，相等则呈现：对应子表单

但是对于下拉框而言，他的状态即不是数组、也不是 string，为了更好的扩展性，提供了：
- `showChildren` 配置，来判断子表单是否要显示

这样，对于任意组件，值非默认的数组或者字符串，则可以使用此方法进行显示隐藏控制。

 

:::tip
> - 因为我们封装的下拉框具备更多能力，因此状态的类型有点差异是：`SelectState<string[]>`，其余不变
> - 关于下拉框，可参考：[搜索下拉框](/docs/tutorial-basics/create-select)
> - 关于 layout 配置，请参考：[节点 Dom 结构](/docs/concepts/node)
:::


示例：

import Topic17 from '@site/src/demos/topic17';

<Topic17></Topic17>

> - 如果想让其成为单选下拉框，只需要：`mode:"single"` 即可。

#### 开关

```tsx
import { UI_COMPONENTS, nodeUtil } from '@easy-page/antd-ui';

export const switchTest = nodeUtil
  .createField<boolean, { switchTest: boolean }>(
    'switchTest',
    '开关测试',
    {
      value: false,
      childrenWhen: {
        effectedKeys: ['switchTest'],
        show({ effectedData }) {
          return effectedData.switchTest === true;
        },
      },
    },
    {
      ui: UI_COMPONENTS.SWITCH,
    }
  )
  .appendChildren([
    nodeUtil.createField('field1', '字段1', { value: '' }),
    nodeUtil.createField('field2', '字段2', { value: '' }),
  ]);

```

import Topic14 from '@site/src/demos/topic14';

<Topic14></Topic14>

我们发现，开关和下拉框、多选框他们不一样，增加了：`childrenWhen` 来控制孩子节点的显隐藏。
原因是，对于：多选、单选、下拉框等而言：
- `nodeUtil.createField(...).appendChildren([])` 中 `appendChildren` 为其选项，对应的选项里添加了自己的子表单，因此可以默认逻辑：
  ```tsx
    nodeUtil
      .createNode('read', { name: '读书' })
      .appendChildren([nodeUtil.createField('field1', '字段1', { value: '' })])
  ```
- 而开关 `appendChildren` 增加的就是其自己的子表单，何时显示，需要写副作用函数：`childrenWhen`，来对所有孩子节点整体控制。
  ```tsx
    childrenWhen: {
      effectedKeys: ['switchTest'],
      show({ effectedData }) {
        return effectedData.switchTest === true;
      },
    },
  ```

  :::tip
  - 我们发现，点击提交的时候，开关的值也在里面，此时我们并不需要开关是一个表单元素，我们可以增加：`postprocess` 在提交时过滤掉即可：
    ```tsx
     {
      ...,
      value: false,
      postprocess(context) {
        return {};
      },
    ```
  :::

### 更多联动

如果我们来增加联动的复杂度，以单选框为例：
- 当选中：“男” 的时候，判断一下名字，如果名字：`name=pk` 时，才展示自己的选项。

我们只需要给“男”的子表单“字段1” 增加 `when` 函数即可：

```tsx
...
nodeUtil.createField<string, { name: string }>('field1', '字段1', {
        value: '',
        when: {
          effectedKeys: ['name'],
          show({ effectedData }) {
            return effectedData.name === 'pk';
          },
        },
      }),
```


效果如下：

import Topic18 from '@site/src/demos/topic18';

<Topic18></Topic18>

上述表明，字段1 受到 `name` 字段的影响，是否显示取决于 `name` 字段的值（输入 pk 时显示）和 `sex` 选项的值。

> - 其余情况就不展示了，原理一样。

### 子表单样式

我们在上面的联动，发现，子表单没有布局样式，咱们可能不喜欢，该怎么做呢？我们以：多选框为例子
- 给子表单增加背景颜色和缩进

```tsx
import { nodeUtil } from '@easy-page/antd-ui';
import styles from './index.module.css';

export const hobby = nodeUtil
  .createField<string[]>(
    'hobby',
    '兴趣',
    {
      value: ['read'],
      mode: 'multiple',
    },
    {
      layout: {
        indentation: true,
        childrenContainerClassName: styles['child-container'],
      },
    }
  )
  .appendChildren([
    ...
  ]);

```

我们把之前的多选框，增加了如下配置，就完成了子表单样式的设置：

```tsx
  layout: {
    /** 是否缩进，即是否放到一个 div 容器里，缩进后可通过：childrenContainerClassName 设置整体样式 **/
    indentation: true,
    childrenContainerClassName: styles['child-container'],
  },
```

效果如下：

import Topic19 from '@site/src/demos/topic19';

<Topic19></Topic19>

