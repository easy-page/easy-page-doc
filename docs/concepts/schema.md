---
sidebar_position: 1
---

# Schema 设计

`EasyPage` 的 `Schema` 描述主要用于表达："数据和数据之间的关系"
- 描述数据本身
- 描述数据关系：同级关系（互斥、共存、无）、父子关系

> - 理论上这样的描述可表达完所有 `DOM` 节点树。

## BaseSchema

最基础的 `Schema`，结构如下：

```tsx
export type BaseSchema = {
  id: string; // node id
  name: string; // node name
};
```
- `id` 节点 ID，在表单里也表示字段的：`ID`，类型为：`string`
- `name` 节点名，在表单里也表示字段的：`名称`，类型为：`string`

```tsx
const schema: BaseSchema = {
  id: 'name',
  name: '姓名'
}
```


## Schema
完整的 `Schema` 协议定义如下，我们逐一解答：
```tsx
export type Schema<
  FieldType,
  PageState = Record<string, unknown>,
  PageProps = Record<string, unknown>,
  EffectedResultType = unknown
> = BaseSchema & {
  /** field value */
  value?: FieldType;
  /** - internal 概念，被 FormItem 包裹的元素 */
  isFormField: boolean; // 是否是表单元素，api 指定，默认：false
  desc?: string;
  childrenRelation?: 'coexist' | 'single' | 'none';
  children?: Schema<unknown, PageState, PageProps, unknown>[];
  /** before submit handle data */
  postprocess?: (
    context: DataContext<FieldType, PageState, PageProps>
  ) => Record<string, unknown>;
  /** inject data in form  */
  preprocess?: (
    context: Pick<
      DataContext<FieldType, PageState, PageProps>,
      'defaultValues' | 'pageProps'
    >
  ) => FieldType;
  /** when state or props changed, do something */
  actions?: Array<
    EffectActionType<FieldType, PageState, PageProps, EffectedResultType>
  >;
  validate?: Validate<FieldType, PageState, PageProps>;
  when?: WhenType<FieldType, PageState, PageProps>;
};
```

### value
**定义**：字段默认值

**默认值**：空

**类型**：`FieldType` 范型，由用户传入节点类型。

**示例**：

```tsx
const name: Schema<string> = { // FieldType 为 string
  id: 'name',
  name: '姓名',
  value: 'pk' // 默认值为：'pk'
}
```

### desc
**定义**：字段补充描述

**默认值**：空

**类型**：`string` 

**示例**：

```tsx
const name: Schema<string> = { // FieldType 为 string
  id: 'name',
  name: '姓名',
  value: 'pk', // 默认值为：'pk'
  desc: '这是一段描述'
}
```

### children
**定义**：子元素

**默认值**：空

**类型**：`Schema[]` 

**示例**：

```tsx
const name: Schema<string> = { // FieldType 为 string
  id: 'name',
  name: '姓名',
  value: 'pk', // 默认值为：'pk'
  desc: '这是一段描述',
  children: [{id: 'child1', name: '子元素'}]
}
```

### childrenRelation
**定义**：子元素关系

**默认值**：`'none'`

**类型**：`'coexist' | 'single' | 'none'` 

**示例**：

```tsx
const name: Schema<string> = { // FieldType 为 string
  id: 'name',
  name: '姓名',
  value: 'pk', // 默认值为：'pk'
  desc: '这是一段描述',
  childrenRelation: 'single',
  children: [{id: 'child1', name: '子元素1'}, {id: 'child2', name: '子元素2'}]
}
```
children 数组中的元素是：“互斥关系”，表明字段 `name` 是一个选择型字段数据，为：单选型。

> - 更多示例可见：[创建基础表单](/docs/tutorial-basics/create-basic-form)


### postprocess
**定义**：提交前数据预处理

**默认值**：空

**类型**：`(context: DataContext<FieldType, PageState, PageProps>) => Record<string, unknown>` 

**示例**：

```tsx
const name: Schema<string> = { // FieldType 为 string
  id: 'name',
  name: '姓名',
  value: 'pk', // 默认值为：'pk'
  desc: '这是一段描述',
  postProcess: ({value}) => { return { name: 'suffix' + value } },
  children: [{id: 'child1', name: '子元素'}]
}
```

> - 更多可见：[字段数据处理](/docs/tutorial-extras/process)

### preprocess

**定义**：编辑时，数据回填处理

**默认值**：空

**类型**：`(context: Pick<DataContext<FieldType, PageState, PageProps>，'defaultValues' | 'pageProps'>) => FieldType` 

**示例**：

```tsx
const name: Schema<string> = { // FieldType 为 string
  id: 'name',
  name: '姓名',
  value: 'pk', // 默认值为：'pk'
  desc: '这是一段描述',
  preprocess: ({ defaultValues }) => { return defaultValues.name },
  children: [{id: 'child1', name: '子元素'}]
}
```

> - 更多可见：[字段数据处理](/docs/tutorial-extras/process)

### actions

**定义**：状态变化时，字段副作用处理

**默认值**：空

**类型**：`Array<EffectActionType<FieldType, PageState, PageProps, EffectedResultType>>` 

**示例**：

```tsx
const name: Schema<string> = { // FieldType 为 string
  id: 'name',
  name: '姓名',
  value: 'pk', // 默认值为：'pk'
  desc: '这是一段描述',
  preprocess: ({ defaultValues }) => { return defaultValues.name },
  actions: [{
    effectedKeys: ['age'],
    action: ({ effectedData }) => {
      if (effectedData.age === 10) {
        return {
          fieldValue: ''
        }
      }
    }
  }],
  children: [{id: 'child1', name: '子元素'}]
}
```

如上定义了一个副作用：
- 当`age`字段变化且为 10 时，执行副作用，清空 `name` 的值。

> - 更多使用可见：[字段联动](/docs/tutorial-extras/actions)

### validate

**定义**：字段的验证

**默认值**：空

**类型**：`Validate<FieldType, PageState, PageProps>` 

**示例**：

```tsx
const name: Schema<string> = { // FieldType 为 string
  id: 'name',
  name: '姓名',
  value: 'pk', // 默认值为：'pk'
  desc: '这是一段描述',
  preprocess: ({ defaultValues }) => { return defaultValues.name },
  validate: ({ value }) => {
    if (!value) {
      return { success: false, error: '请输入姓名' }
    }
    return { success: true }
  },
  children: [{id: 'child1', name: '子元素'}]
}
```
其中，验证函数的入参如下：
```tsx
export type DataContext<FieldType, PageState, PageProps, DefaultValues = Record<string, any>> = {
  pageState: Partial<PageState>; // 当前页面状态
  pageProps: Partial<PageProps>; // 当前页面 Props
  value: FieldType; // 当前字段值
  defaultValues: Partial<DefaultValues>; // 当前表单默认值
};
```


> - 更多使用可见：[字段校验](/docs/tutorial-extras/actions)

### when

**定义**：字段的显示与隐藏控制

**默认值**：空

**类型**：`WhenType<FieldType, PageState, PageProps>` 

**示例**：

```tsx
const name: Schema<string> = { // FieldType 为 string
  id: 'name',
  name: '姓名',
  value: 'pk', // 默认值为：'pk'
  desc: '这是一段描述',
  when: {
    show: () => false,
  },
  children: [{id: 'child1', name: '子元素'}]
}
```

如上所示，`show` 函数始终返回 `false` 则字段将始终不展示。

> - 更多使用可见：[字段显隐](/docs/tutorial-extras/when)

### isFormField
- 内部概念，表明字段是否是一个表单字段。（在 UI 解析里的含义是：字段是否会被 `FormItem` 包裹）

> - 唯一感觉设计不合理的一个字段