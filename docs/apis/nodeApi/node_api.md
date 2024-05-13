---
sidebar_position: 2
---

# NodeUtil

## createField

```tsx
  createNode<
    FieldType = string,
    PageState = Record<string, any>,
    PageProps = Empty,
    EffectResultType = any
  >(
    id: string,
    options: NodeWithChildrenOption<
      FieldType,
      PageState,
      PageProps,
      EffectResultType
    > & {
      name?: string;
    },
    fieldUIConfig?: FieldUIConfig
  ): NodeInfoWithChildren<FieldType, PageState, PageProps, EffectResultType>

```

> 范型解读参考：[范型](/docs/apis/nodeApi/type)

- **作用**：创建表单字段，`Field` 结尾的 api 会被：`formItem` 自动包裹。
- **完整使用使用方式**

  ```tsx
  export const name = nodeUtil.createField<
    string,
    FormPageState,
    FormPageProps,
    InputEffectedType
  >(
    'name',
    '姓名',
    {
      value: 'pk', // 默认值
      required: true, // 必填
      preprocess: ({ defaultValues }) => defaultValues?.userName,
      postprocess: ({ value }) => ({ userName: value }),
      actions: [
        {
          effectedKeys: ['sex'],
          action: () => {
            return {
              effectResult: {
                inputProps: { placeholder: 'somethins' },
              },
            };
          },
        },
        {
          effectedKeys: ['mode'],
          action: () => {
            return {
              fieldValue: '',
            };
          },
        },
      ],
      when: {
        effectedKeys: ['mode'],
        show({ effectedData }) {
          return effectedData['mode'] === 'edit';
        },
      },
    },
    {
      ui: UI_COMPONENTS.INPUT,
      formItem: {
        tooltip: '1111',
      },
      input: { maxLength: 12 },
    },
  );
  ```

  我们上面展示了一个非常完整的实例：

  - 定义了输入框基本信息：`name`、姓名、默认值：pk、必填
  - 定义了数据处理：
    - 回填的时候从 `defaultValues.userName` 获得默认值
    - 提交的时候，将提交到表单的字段改为：`userName: value`
  - 定义了副作用处理：
    - 当表单里的 `sex` 字段发生变化的时候，更新 `name` 字段的 `placeholder`
    - 当表单外的 `mode` 发生变化的时候，清空 `name` 字段的值。
  - 定义了显示与隐藏
    - 当 `mode = new ` 时候，展示 `name` 输入框
  - 指定了渲染组件：`ui: UI_COMPONENTS.INPUT`
  - 给 `FormItem` 传递了 `tooltip` 提示语
  - 给 `input` 组件传递了组件属性：`maxLength`

> 关于：表单外的 Props 透传：[context 属性](/docs/apis/components/easy_page)

详细 Demo 可见下方：

import EasyCase from '@site/src/demos/topic34';

<EasyCase></EasyCase>

## createCustomField

```tsx
createCustomField<
    FieldType = string,
    PageState = Record<string, any>,
    PageProps = Empty,
    EffectResultType = any
  >(
    id: string,
    name: string,
    component: FC<Omit<CustomProps<FieldType>, 'component'>>,
    options: NodeWithChildrenOption<
      FieldType,
      PageState,
      PageProps,
      EffectResultType
    >,
    fieldUIConfig?: FieldUIConfig | undefined
  ): NodeInfoWithChildren<FieldType, PageState, PageProps, EffectResultType>
```

创建自定义组件字段，通常用于：默认的组件无法满足需求，使用方式如下：

```tsx
export const text = nodeUtil.createCustomField(
  'text',
  '测试',
  ({ value, onChange }) => {
    return (
      <div>
        前缀：
        <Input value={value} onChange={(e) => onChange(e.target.value)} />
      </div>
    );
  },
  {},
);
```

如上述实例展示：

- 创建了一个带前缀的自定义输入框，它同样会被 `formItem` 包裹。
- 其余使用方式同之前的: `createField`

详细用例如下：

import EasyCase2 from '@site/src/demos/topic35';

<EasyCase2></EasyCase2>

## createContainer

```tsx
  createContainer<
    PageState = Record<string, any>,
    PageProps = Empty,
    FieldType = string,
    EffectResultType = any
  >(
    id: string,
    component: React.FC<Omit<CustomProps<any>, 'component'>>,
    options?: Omit<
      NodeWithChildrenOption<FieldType, PageState, PageProps, EffectResultType>,
      'value'
    > & {
      fieldUIConfig?: FieldUIConfig;
    }
```

给各种字段，创建一个容器，便于布局。和其他 api 不一样的是：`fieldUIConfig` 放的位置。

```tsx
export const rowContainer = nodeUtil
  .createContainer('container', ({ children }) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {children}
      </div>
    );
  })
  .appendChildren([name, sex]);
```

我们创建了一个横向布局，放了：name、sex 字段

import EasyCase3 from '@site/src/demos/topic36';

<EasyCase3></EasyCase3>

## createChildForm

```tsx
  createChildForm<
    FieldType = string,
    PageState = Record<string, any>,
    PageProps = Empty,
    EffectResultType = any
  >(
    id: string,
    options: NodeOption<FieldType, PageState, PageProps, EffectResultType> & {
      name?: string;
      childFormContext?: EffectKeys<PageState, PageProps>;
      childFormContainer: FC<
        ComponentProps<
          ChildFormContainerProps,
          ChildFormState,
          any,
          PageState,
          PageProps & DefaultPageProps<PageState>
        >
      >;
    },
    fieldUIConfig?: FieldUIConfig
  ): NodeInfo<FieldType, PageState, PageProps, EffectResultType>
```

创建子表单，这事一个比较复杂的组件，主要适用于有增加删除子表单的场景：

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
  {},
);
```

- 首先，我们通过：`values` 设置了子表单的默认值，默认了 1 个表单，并生成了唯一 id
- 其次，我们在 `childFormContainer` 里定义了子表单的布局，我们采用 Tab 布局，并将每个子表单的东西，放到了：items 里。（另一个 `<EasyPage />` 组件）
  - 需要注意的是：`onChange` 的处理以及：`setFormUtil` 的传递，是必须的，大家写的时候可参考上述示例使用。

我们再为上面添加一下如下功能：增加子表单、删除子表单

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

import EasyCase4 from '@site/src/demos/topic37';

<EasyCase4></EasyCase4>

我们已经完整了子表单的增删，现在我们来做一下数据提交处理即可：

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

接着，我们来增加下子表单的验证：

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

最后是，数据回填

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

## createNode

```ts
  createNode<
  FieldType = string,
  PageState = Record<string, any>,
  PageProps = Empty,
  EffectResultType = any
>(
  id: string,
  options: NodeWithChildrenOption<
    FieldType,
    PageState,
    PageProps,
    EffectResultType
  > & {
    name?: string;
  },
  fieldUIConfig?: FieldUIConfig
): NodeInfoWithChildren<FieldType, PageState, PageProps, EffectResultType>
```

- 创建一个无状态节点，目前主要用于创建：下拉框、单选、多选框选项；
- 一般在会在：选择完某个选项后出现新的字段场景下使用，如下：

```tsx
nodeUtil
  .createNode('man', { name: '男' })
  .appendChildren([nodeUtil.createField('like', '喜欢看的书', { value: '' })]);
```

如上，我创建了一个选项男，当我选择之后，出现 `like` 字段，完整的如下：

```tsx
export const sex = nodeUtil
  .createField('sex', '性别', { value: '', mode: 'single' })
  .appendChildren([
    nodeUtil
      .createNode('man', { name: '男' })
      .appendChildren([
        nodeUtil.createField('like', '喜欢看的书', { value: '' }),
      ]),
    nodeUtil.createNode('female', { name: '女' }),
  ]);
```

import EasyCase5 from '@site/src/demos/topic38';

<EasyCase5></EasyCase5>

## extends

```tsx
extends<
    FieldType = string,
    PageState = Record<string, any>,
    PageProps = Empty,
    EffectResultType = any
  >(
    curNode:
      | NodeInfo<any, any, any, any>
      | NodeInfoWithChildren<any, any, any, any>,
    options: WrapperNodeOption<
      FieldType,
      PageState,
      PageProps,
      EffectResultType
    > & {
      name?: string;
      id?: string;
      fieldUIConfig?: (oldFieldUIConfig?: FieldUIConfig) => FieldUIConfig;
      /** 收敛一个通用逻辑，当需要监听变化，刷新自己时使用 */
      effectedKeys?: EffectKeys<PageState, PageProps>
    }
  ): NodeInfoWithChildren<FieldType, PageState, PageProps, EffectResultType>
```

可以继承某个字段，做所有属性的复用和修改，如下我有这样一个字段：

```tsx
export const fieldA = nodeUtil.createField<string[]>(
  'fieldA',
  '字段 A',
  {
    mode: 'multiple',
    required: true,
    validate: ({ value }) => {
      return {
        success: Boolean(value),
        errorMsg: '请选择字段 A',
      };
    },
  },
  {
    formItem: {
      tooltip: '测试文案',
    },
  },
);
```

- 有一个字段 A，多选，必填，存在提示文案："测试文案"，存在验证：'请选择字段 A'

```tsx
import { nodeUtil } from '@easy-page/antd-ui';
import { fieldA } from './fieldA';

export const fieldB = nodeUtil.extends(fieldA, {
  required: false,
  mode: 'single',
  name: '字段 B',
  id: 'fieldB',
  validate(oldValidate) {
    return async (context) => {
      const oldRes = await oldValidate?.(context);
      console.log('oldRes:', oldRes);
      if (oldRes && !oldRes?.success) {
        return oldRes;
      }
      if (context.value === 'opt2') {
        return {
          success: false,
          errorMsg: '不可以选择',
        };
      }
      return {
        success: true,
      };
    };
  },
});
```

我继承了字段 A，并将：

- id 修改为：fieldB，名字修改为：fieldB
- 必填改成了非必填
- 模式改成了单选
- 继承了验证的同时增加了一个自己的验证。

import EasyCase6 from '@site/src/demos/topic39';

<EasyCase6></EasyCase6>

## createCustomNode

```ts
createCustomNode<
    FieldType = string,
    PageState = Record<string, any>,
    PageProps = Empty,
    EffectResultType = any
  >(
    id: string,
    component: FC<Omit<CustomProps<any, EffectResultType, PageState, PageProps>, 'component'>>,
    options: NodeWithChildrenOption<
      FieldType,
      PageState,
      PageProps,
      EffectResultType
    >,
    fieldUIConfig?: FieldUIConfig | undefined
  ): NodeInfoWithChildren<FieldType, PageState, PageProps, EffectResultType>
```

创建自定义组件节点，一般这种节点是默认组件无法满足诉求，并且不希望被 `FormItem` 包裹，又可以获得表单一样的上下文进行处理的节点，如：提交按钮。

> - 以 Node 结尾的 Api 都不会被 `FormItem` 包裹。

```tsx
export const submit = nodeUtil.createCustomNode(
  'submit',
  ({ frameworkProps: { getFormUtil } }) => {
    return (
      <Button
        type="primary"
        style={{ marginLeft: 12 }}
        onClick={() => {
          const formUtil = getFormUtil?.();
          console.log('表单值：', formUtil?.getFormData());
        }}
      >
        表单值
      </Button>
    );
  },
  {
    value: '',
  },
);
```

如上，提交按钮，我们通过：`getFormUtil` 获取到了表单的值，但这个节点本身，不会在表单里出现值。

:::warning

- `const formUtil = getFormUtil?.();` 只可以在 `onClick` 里定义，不能放在组件里，因为那时候还没挂载 `ref`。
- 如果像在组件上获得表单的值，可以通过：`framworkprops.store` 对象获得，但是获取的是表单原始数据哦。
  :::
