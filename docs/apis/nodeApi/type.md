---
sidebar_position: 1
---

# 范型定义

为了更好的使用体验，我们可以严格约束类型定义，每个字段的定义上，大概有如下几种类型定义：

```tsx
<
    FieldType = string,
    PageState = Record<string, any>,
    PageProps = Empty,
    EffectResultType = any
  >
```

- `FieldType` 表示当前字段的值类型，默认是：`string`
- `PageState` 表示当前表单里所有字段的类型，默认是：`Record<string, any>`
- `PageProps` 表示页面外部透传的 `Props` 的类型，即前面说的 context 中透传的，默认是：`Empty`
- `EffectResultType = any` 副作用返回值类型，我们每个字段都支持执行副作用，和针对不同组件定制化的副作用返回结果。

**上述定义是标准化的，几乎所有的 api 类型定义都保持一致。**

具体如下：

```tsx
export type FormPageProps = {
  mode: string;
};

export type FormPageState = {
  text: string;
};

<EasyPage<FormPageState, FormPageProps> context={{ mode: 'edit' }}></EasyPage>;
```

上面定义表明，表单里有一个字段：`text`，表单外部透传了 `props` ：`{ mode: 'edit' }`

因此，我们在写字段的时候：

```tsx
export const text = nodeUtil.createField<string, FormPageState, FormPageProps>('text', ...)
```

我们希望，当 `mode` 变化时候，`text` 组件增加 placeholder：`mode = edit`，我们可以这样定义：

```tsx
export const text = nodeUtil.createField<
  string,
  FormPageState,
  FormPageProps,
  InputEffectedType
>('text', '测试', {
  actions: [
    {
      effectedKeys: ['mode'],
      action: ({ effectedData }) => {
        return {
          effectResult: {
            inputProps: {
              placeholder: 'mode = edit',
            },
          },
        };
      },
    },
  ],
});
```

如上，我们定义了 `effectResult` 结果类型 `InputEffectedType` 并返回了 `placeholder`。
