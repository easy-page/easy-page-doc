---
sidebar_position: 1
---

# PageUtil

我们通过 `NodeUtil` 创建好各种字段后，就可以通过 `PageUtil` 进行拼接页面。

## constructor

```tsx
export type CommonPageUtilProps<T> = T & {
  /** 根元素 ID */
  pageId: string;
  /** 页面名设置 */
  pageName?: string;
  rootUIConfig?: FieldUIConfig;
  commonUIConfig?: FieldUIConfig;
};

constructor(options: CommonPageUtilProps<T>)
```
- `pageId` 为必填，默认写一个就好了。

  ```tsx
  const pu = new PageUtil({pageId: 'form-1' })
  ```

- `rootUIConfig` 页面跟元素的样式定义。

  ```tsx
  const pu = new PageUtil({
    pageId: 'form-1', 
    rootUIConfig: {
      form: { className: 'p-4' } // rootContainer: { className: 'p-4' }
    } }
  )
  ```
  - 如上，我们给根元素：`form` 设置了 `className`。
  - 一般：pageType = "form" 时候，根元素是：`form` 组件，否则为默认的：`rootContainer` 组件。
  - 这个其实用的少，直接用：`commonUIConfig` 效果一样，还不用理解根元素概念。


- `commonUIConfig` 表单内部通用样式定义，如：通用 `FormItem`、`Input` 等组件通用样式定义

  ```tsx
    const pu = new PageUtil({
      pageId: 'form-1', 
      commonUIConfig: {
        form: { className: 'p-4' },
        input: { placeholder: "请输入" }
      } }
    )
  ```
  - 如上，我们定义了整个表单的通用样式，以及表单中所有输入框默认添加了：‘placehoder’

## addFields
我们可以把之前创建的字段，添加到表单信息中来，如之前的例子中：

```tsx
  const pu = new PageUtil({ pageId: 'form-page' });
  pu.addFields([sex, toolbar]);
```

## getPageInfo

定义好表单结构后，通过此方法获取表单信息，并返回结果到 `EasyPage` 使用。

```tsx
  const pu = new PageUtil({ pageId: 'form-page' });
  /** 添加 name 字段到页面结构中 * */
  pu.addFields([sex, toolbar]);

  /** 返回页面结构数据 * */
  export const pageInfo = pu.getPageInfo();

```

使用场景如下：

```tsx
  <EasyPage<FormPageState, FormPageProps>
      {...pageInfo}
    /** 按需加载表单所需组件 * */
    components={DEFAULT_COMPONENTS}
    pageType="form"
  />
```

返回的结构包含如下内容：

```tsx
export type PageInfo<PageState, PageProps> = {
    schema: Schema<any, PageState, PageProps>; // 表单的 schema
    uiConfig: UIConfig; // 表单的 ui 配置
}; 
```
