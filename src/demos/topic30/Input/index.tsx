import { ComponentProps, connector } from '@easy-page/antd-ui';
import { Input as AntdInput, InputProps as AntdInputProps } from 'antd';
import React from 'react';

/** 1. 组件的基础属性 **/
export type InputBaseProps = AntdInputProps;

/** 2. 结合框架的 Props */
export type CustomInputProps = ComponentProps<InputBaseProps, string>;

/** 3. 声明类型提示 */
declare module '@easy-page/antd-ui' {
  export interface FieldUIConfig {
    customInput?: InputBaseProps;
  }
}

/** 4. 通过 connector 和 React.memo 包裹组件 */
export const CustomInput = connector(
  React.memo((props: CustomInputProps) => {
    const { frameworkProps: _, value, onChange, ...baseProps } = props;
    console.log('baseProps:', baseProps);
    return <AntdInput {...baseProps} onChange={onChange} value={value} />;
  })
);
