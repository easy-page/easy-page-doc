/* eslint-disable @typescript-eslint/no-explicit-any */
import { Empty, InputEffectedType, nodeUtil } from '@easy-page/antd-ui';
import React from 'react';

export const age = nodeUtil.createField<
  string,
  { name: string },
  Empty,
  InputEffectedType
>(
  'age',
  '年龄',
  {
    /** 默认值 */
    value: '',
    /** 必填 * 号 */
    required: true,
    /** 数据预处理 */
    postprocess(context) {
      return {
        age: Number(context.value),
      };
    },
    /** 字段验证 */
    validate({ value, pageState }) {
      if (!value) {
        return { success: false, errorMsg: '请输入年龄' };
      }
      if (+value < 0 || (+value > 200 && pageState.name !== 'pk')) {
        return { success: false, errorMsg: '请输入合法年龄' };
      }
      return { success: true };
    },
    /** 字段副作用 */
    actions: [
      {
        effectedKeys: ['name'],
        /** 加载时，立即执行 */
        initRun: true,
        action: ({ effectedData }) => {
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
    /** 字段显示与隐藏 */
    when: {
      effectedKeys: ['name'],
      show({ effectedData }) {
        return effectedData.name !== 'a';
      },
    },
  },
  {
    /** 输入框配置 */
    input: { trigger: 'onChange' },
    /** FormItem 配置 */
    formItem: {
      /** 自定义提示语：带上下文 */
      customExtra: ({ value }) => {
        return <div>{value && +value < 10 ? '儿童' : ''}</div>;
      },
    },
  }
);
