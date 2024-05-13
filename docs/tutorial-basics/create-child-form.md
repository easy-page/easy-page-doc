---
sidebar_position: 4
---

# 增删子表单

我们常常会在表单里嵌入持续增加的子表单：
- 可以添加子表单
- 可以删除子表单
传统的写法，往往会耗费很多精力处理状态管理的事情，而现在，只需要一个 API 即可：`createChildForm`

## 案例

### 创建子表单基本信息
首先，我们创建一个子表单的信息：
- 创建一个子表单里的字段：`testChild` （/childForm/fields/testChild.ts）

```tsx
import { nodeUtil } from '@easy-page/antd-ui';

export const testChild = nodeUtil.createField('test1', '测试1', {});

```

- 放入子表单页面信息：

```tsx
import { PageUtil } from '@easy-page/antd-ui';
import { testChild } from './fields';
const pu = new PageUtil({ pageId: 'xx' })

pu.addFields([testChild]);

export const childFormInfo = pu.getPageInfo()

```
### 创建子表单容器、放入 childFormInfo 信息

- 我们通过 `createChildForm` 创建一个子表单容器，放入子表单页面。


```tsx

const prefix = 'child-form';
const defaultId = generateId(prefix);

export const childFormField = nodeUtil.createChildForm<ChildFormState>(
  'cc',
  {
    value: {
      childForms: [{ id: defaultId, label: '子活动' }],
      choosedItemId: defaultId,
    },
    childFormContainer: ({ setChildFormRef, value, onChange }) => {
      const { childForms, choosedItemId } = value;
      return (
        <Tabs
          activeKey={choosedItemId}
          onChange={(val) =>
            onChange({
              ...(value || ({} as ChildFormState)),
              choosedItemId: val,
            })
          }
          items={childForms.map((e, idx) => ({
            label: `子表单${idx}`,
            id: e.id,
            key: e.id,
            children: (
              <EasyPage<ChildFormState>
                {...childFormInfo}
                pageType="form"
                components={DEFAULT_COMPONENTS}
                setFormUtil={(ref) => setChildFormRef(ref, e.id)}
              />
            ),
          }))}
        ></Tabs>
      );
    },
  },
  {}
);
```
如上展示：
- 我们通过：`createChildForm` 创建了子表单
- 我们通过：`value` 定义，给子表单默认了一个表单选项。
- 我们通过：`childFormContainer` 创建了子表单的布局，采用 `Tabs` 布局
- 我们通过：`items` 属性，传递了子表单组件 `EasyPage`，组件内容为我们刚才定义的：`childFormInfo` 信息

到此，我们就完成了子表单的基础信息创建：容器、页面结构。

:::tips
需要注意的是：`onChange` 的处理以及：`setFormUtil` 的传递，是必须的，大家写的时候可参考上述示例使用。
:::

### 增加子表单、删除子表单功能
- 我们通过 `onEdit` 快速完成子表单增删。

```tsx
 childFormContainer: ({
      setChildFormRef,
      onAdd,
      onRemove,
      value,
      onChange,
    }) => {
      const { childForms, choosedItemId } = value;
      return (
        <Tabs
          onEdit={(e, action) => {
            if (action === 'add') {
              onAdd();
            } else if (action === 'remove') {
              onRemove(e as string);
            }
          }}
          ...
        ></Tabs>
```
可以发现，我们只是添加了: `onEdit` 就实现了效果，其他我们不用操心

### 数据提交处理

```tsx
export const childFormField = nodeUtil.createChildForm<ChildFormState>(
  'cc',
  {
    value: {
      childForms: [{ id: defaultId, label: '' }],
      choosedItemId: defaultId,
    },
    ...,
    postprocess({ value }) {
      const { formUtils, childForms } = value;
      return {
        activities: childForms.map((e) => {
          const util = formUtils?.[e.id];
          const data = util?.getFormData();
          return data;
        }),
      };
    },
  })
```

我们增加了 `postprocess` 定义，通过 `value` 里的 `formUtils` 获取了完整的字表单数据，并返回。

### 子表单验证


```tsx
export const childFormField = nodeUtil.createChildForm<ChildFormState>(
  'cc',
  {
    value: {
      childForms: [{ id: defaultId, label: '' }],
      choosedItemId: defaultId,
    },
    ...,
    validate: async ({ value }) => {
      const results = await validateAllChildForm(value);
      const hasError = results.find((e) => Boolean(e.errors));
      return { success: !hasError };
    },
  })
```
我们增加了：`validate` 方法，当最外层表单调用验证的时候，会执行此表单这个方法，我们通过：`validateAllChildForm` 就验证完了所有子表单。

### 数据回填

```tsx
export const childFormField = nodeUtil.createChildForm<ChildFormState>(
  'cc',
  {
    value: {
      childForms: [{ id: defaultId, label: '' }],
      choosedItemId: defaultId,
    },
    ...,
    preprocess({ defaultValues }) {
      const acts = defaultValues.activities || [];
      const defaultActId1 = generateId(prefix);
      return {
        childForms: acts.map((e, idx: number) => ({
          label: `子活动${idx}`,
          id: idx === 0 ? defaultActId1 : generateId(prefix),
        })),
        choosedItemId: defaultActId1,
      };
    },
  })
```

回填的时候，我们只是增加了：`preprocess` 方法，将子表单的数量和 ID 基本信息做了处理。

接着，我们在：`childFormContaienr` 子表单处，获取相应的默认值即可。

```tsx
 childFormContainer: ({
      frameworkProps: { store },
      ...
    }) => {
      const { childForms, choosedItemId } = value;
      const defaultValues = store.getDefaultValues();
      return (
        <Tabs
          ...
          items={childForms.map((e, idx) => {
            const defaultValue = defaultValues?.activities?.[idx];
            return {
              label: `子表单${e.id}`,
              id: e.id,
              key: e.id,
              children: (
                <EasyPage<ChildFormState>
                  {...childFormInfo}
                  defaultValues={defaultValue}
                  components={DEFAULT_COMPONENTS}
                  setFormUtil={(ref) => setChildFormRef(ref, e.id)}
                />
              ),
            }
          })}
        ></Tabs>
      );
    },
```

- 我们通过：`framworkprops.store` 获取全部默认值：`store.getDefaultValues()`
- 我们根据提交时的数据 key：`activities` 和表单 idx 获得对应表单默认值：
  `const defaultValue = defaultValues?.activities?.[idx];`
- 最后放到 EasyPage 上即可：

  ```tsx
  <EasyPage<ChildFormState>
      {...childFormInfo}
      defaultValues={defaultValue}
      pageType="form"
      components={DEFAULT_COMPONENTS}
      setFormUtil={(ref) => setChildFormRef(ref, e.id)}
    />
  ```

### Demo

import EasyCase4 from '@site/src/demos/topic37';

<EasyCase4></EasyCase4>