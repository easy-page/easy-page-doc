import { nodeUtil } from '@easy-page/antd-ui';

export const age = nodeUtil.createField<
  string,
  {
    age: string;
  }
>('age', '年龄', {
  value: '',
  required: true,
  /** 提交前，将数据处理成数字 */
  postprocess({ value }) {
    return { ['people.age']: value ? Number(value) : 0 };
  },
  /** 数据回显时，从后端数据中将 age 取出，并转换成字符串 */
  preprocess({ defaultValues, pageProps }) {
    return `${defaultValues.people?.age}`;
  },
});
