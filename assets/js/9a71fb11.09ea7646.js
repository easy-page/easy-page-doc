"use strict";(self.webpackChunkeasy_page_doc=self.webpackChunkeasy_page_doc||[]).push([[1075],{6262:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>_,contentTitle:()=>y,default:()=>O,frontMatter:()=>U,metadata:()=>N,toc:()=>v});var o=t(6070),s=t(6113),r=t(758);const a=n=>(0,o.jsx)("img",{src:n.src,width:"100%",style:{backgroundSize:"100%"}});var l=t(8981),p=t(3533);const c={...l.UI_COMPONENTS,CUSTOM_INPUT:"customInput"},i=l.nodeUtil.createField("name","\u59d3\u540d",{value:""},{ui:c.CUSTOM_INPUT,customInput:{placeholder:"\u8fd9\u662f\u59d3\u540d\u5b57\u6bb5"}}),d=new l.PageUtil({pageId:"form-page"});d.addFields([i,p.K]);const u=d.getPageInfo();console.log("pageInfo:",u);var m=t(6129);const x=(0,l.connector)(r.memo((n=>{const{frameworkProps:e,value:t,onChange:s,...r}=n;return console.log("baseProps:",r),(0,o.jsx)(m.A,{...r,onChange:s,value:t})}))),h=()=>(0,o.jsx)(l.EasyPage,{...u,components:{...l.DEFAULT_COMPONENTS,[c.CUSTOM_INPUT]:x},pageType:"form"}),g={...l.UI_COMPONENTS,CUSTOM_INPUT:"customInput"},f=l.nodeUtil.createField("name","\u59d3\u540d",{value:""},{ui:g.CUSTOM_INPUT,customInput:{placeholder:"\u8fd9\u662f\u59d3\u540d\u5b57\u6bb5"}}),P=l.nodeUtil.createField("name2","\u59d3\u540d2",{value:"",actions:[{effectedKeys:["name"],initRun:!0,action:n=>{let{effectedData:e}=n;return{effectResult:{inputProps:{placeholder:`\u57fa\u4e8e name: ${e.name||""} \u7684 placeholder`}}}}}]},{ui:g.CUSTOM_INPUT,customInput:{placeholder:"\u8fd9\u662f\u59d3\u540d\u5b57\u6bb5"}}),I=new l.PageUtil({pageId:"form-page"});I.addFields([f,P,p.K]);const j=I.getPageInfo();console.log("pageInfo:",j);const C=(0,l.connector)(r.memo((n=>{const{frameworkProps:{effectedResult:e},value:t,onChange:s,...r}=n;return console.log("baseProps:",r),(0,o.jsx)(m.A,{...r,...e?.inputProps||{},onChange:s,value:t})}))),T=()=>(0,o.jsx)(l.EasyPage,{...j,components:{...l.DEFAULT_COMPONENTS,[g.CUSTOM_INPUT]:C},pageType:"form"}),U={sidebar_position:9},y="\u6269\u5c55\u4e00\u4e2a\u901a\u7528\u7ec4\u4ef6",N={id:"tutorial-extras/extends_components",title:"\u6269\u5c55\u4e00\u4e2a\u901a\u7528\u7ec4\u4ef6",description:"\u6211\u4eec\u77e5\u9053\uff0c\u6211\u4eec\u6709\u4e2a\u9ed8\u8ba4\u7684 UI \u5e93\uff0c\u5305\u542b\u4e86\u4e00\u4e9b\u57fa\u7840\u7ec4\u4ef6\uff0c\u4f46\u82e5\u662f\u8fd9\u4e9b\u7ec4\u4ef6\u8fd8\u65e0\u6cd5\u6ee1\u8db3\u9700\u6c42\uff0c\u6211\u4eec\u5e0c\u671b\u901a\u8fc7\uff1aui \u5c5e\u6027\u6307\u5b9a\u6211\u4eec\u60f3\u8981\u7684\u7ec4\u4ef6\uff0c\u8be5\u600e\u4e48\u529e\u5462\uff1f",source:"@site/docs/tutorial-extras/extends_components.mdx",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/extends_components",permalink:"/docs/tutorial-extras/extends_components",draft:!1,unlisted:!1,editUrl:"https://github.com/easy-page/easy-page-doc/docs/tutorial-extras/extends_components.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u5b57\u6bb5\u81ea\u5b9a\u4e49\u7ec4\u4ef6",permalink:"/docs/tutorial-extras/custom"},next:{title:"\u6269\u5c55 UI \u5e93",permalink:"/docs/tutorial-extras/extends_libs"}},_={},v=[{value:"\u6269\u5c55\u4e00\u4e2a\u8f93\u5165\u6846",id:"\u6269\u5c55\u4e00\u4e2a\u8f93\u5165\u6846",level:2},{value:"\u4f7f\u7528\u526f\u4f5c\u7528",id:"\u4f7f\u7528\u526f\u4f5c\u7528",level:2},{value:"\u6269\u5c55\u8f93\u5165\u6846\u7684\u80fd\u529b",id:"\u6269\u5c55\u8f93\u5165\u6846\u7684\u80fd\u529b",level:2}];function E(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"\u6269\u5c55\u4e00\u4e2a\u901a\u7528\u7ec4\u4ef6",children:"\u6269\u5c55\u4e00\u4e2a\u901a\u7528\u7ec4\u4ef6"}),"\n",(0,o.jsxs)(e.p,{children:["\u6211\u4eec\u77e5\u9053\uff0c\u6211\u4eec\u6709\u4e2a\u9ed8\u8ba4\u7684 UI \u5e93\uff0c\u5305\u542b\u4e86\u4e00\u4e9b\u57fa\u7840\u7ec4\u4ef6\uff0c\u4f46\u82e5\u662f\u8fd9\u4e9b\u7ec4\u4ef6\u8fd8\u65e0\u6cd5\u6ee1\u8db3\u9700\u6c42\uff0c\u6211\u4eec\u5e0c\u671b\u901a\u8fc7\uff1a",(0,o.jsx)(e.code,{children:"ui"})," \u5c5e\u6027\u6307\u5b9a\u6211\u4eec\u60f3\u8981\u7684\u7ec4\u4ef6\uff0c\u8be5\u600e\u4e48\u529e\u5462\uff1f"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"\u6211\u4eec\u53ef\u4ee5\u6269\u5c55\u7ec4\u4ef6"}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"\u6269\u5c55\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u5927\u6982\u6709\u8fd9\u4e9b\u6b65\u9aa4\uff1a"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\u9700\u8981\u901a\u8fc7 ",(0,o.jsx)(e.code,{children:"connector"})," \u7ed9\u7ec4\u4ef6\u8fde\u63a5\u526f\u4f5c\u7528\u5904\u7406\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:["\u9700\u8981\u58f0\u660e\u7ec4\u4ef6\u7684\uff1a",(0,o.jsx)(e.code,{children:"Props"})," \u7c7b\u578b\uff0c\u7528\u4e8e\u5c5e\u6027\u900f\u4f20 ",(0,o.jsx)(e.code,{children:"Props"}),"\u3002","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"Props"})," \u7684\u7ec4\u6210\u4e3a\uff1a",(0,o.jsx)(e.code,{children:"\u6846\u67b6\u901a\u7528 Props"})," + ",(0,o.jsx)(e.code,{children:"\u7ec4\u4ef6\u81ea\u8eab Props"})," + ",(0,o.jsx)(e.code,{children:"\u6269\u5c55 Props"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\u5b9a\u4e49\u7ec4\u4ef6\u7684 ",(0,o.jsx)(e.code,{children:"EffectType"}),"\uff0c\u4f7f\u5176\u5177\u5907\u526f\u4f5c\u7528\u5904\u7406\u80fd\u529b"]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"\u542c\u8d77\u6765\u5f88\u590d\u6742\uff0c\u5b9e\u9645\u5e94\u8be5\u6bd4\u8f83\u7b80\u5355\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u770b\u4e0b\u9762\u7684\u4f8b\u5b50\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"\u6269\u5c55\u4e00\u4e2a\u8f93\u5165\u6846",children:"\u6269\u5c55\u4e00\u4e2a\u8f93\u5165\u6846"}),"\n",(0,o.jsx)(e.p,{children:"\u6211\u4eec\u81ea\u5b9a\u4e49\u4e00\u4e2a\u8f93\u5165\u6846\u5427:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"// Input/index.tsx\nimport { ComponentProps, connector } from '@easy-page/antd-ui';\nimport { Input as AntdInput, InputProps as AntdInputProps } from 'antd';\nimport React from 'react';\n\n/** 1. \u7ec4\u4ef6\u7684\u57fa\u7840\u5c5e\u6027 **/\nexport type InputBaseProps = AntdInputProps;\n\n/** 2. \u7ed3\u5408\u6846\u67b6\u7684 Props */\nexport type CustomInputProps = ComponentProps<InputBaseProps, string>;\n\n/** 3. \u58f0\u660e\u7c7b\u578b\u63d0\u793a */\ndeclare module '@easy-page/antd-ui' {\n  export interface FieldUIConfig {\n    customInput?: InputBaseProps;\n  }\n}\n\n/** 4. \u901a\u8fc7 connector \u548c React.memo \u5305\u88f9\u7ec4\u4ef6 */\nexport const CustomInput = connector(\n  React.memo((props: CustomInputProps) => {\n    const { frameworkProps: _, value, onChange, ...baseProps } = props;\n    return <AntdInput {...baseProps} onChange={onChange} value={value} />;\n  })\n);\n\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\u901a\u8fc7 ",(0,o.jsx)(e.code,{children:"declare module '@easy-page/antd-ui'"})," \u7684\u58f0\u660e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5b9a\u4e49\u5b57\u6bb5\u65f6\uff0c\u6709\u63d0\u793a\uff1a"]}),"\n","\n",(0,o.jsx)(a,{src:"/img/docs/custom_component.png"}),"\n",(0,o.jsxs)(e.p,{children:["\u57fa\u4e8e\u4e0a\u8ff0\uff1a1 - 4 \u6b65\uff0c\u6211\u4eec\u5c31\u5b8c\u6210\u4e86\u4e00\u4e2a\u7ec4\u4ef6\u7684\u6269\u5c55\uff0c\u6211\u4eec\u6ce8\u518c\u4e00\u4e0b\u7ec4\u4ef6\u3002\u9996\u5148\uff0c\u5bf9 ",(0,o.jsx)(e.code,{children:"UI_COMPONETS"})," \u5e38\u91cf\u6269\u5c55\u4e00\u4e0b\uff1a"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"import { UI_COMPONENTS } from \"@easy-page/antd-ui\";\n\nexport const EXT_UI_COMPONENTS = {\n  ...UI_COMPONENTS,\n  CUSTOM_INPUT: 'customInput'\n}\n\n"})}),"\n",(0,o.jsx)(e.admonition,{type:"warning",children:(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\u8fd9\u91cc\u6709\u4e2a\u7ec6\u8282\uff1a",(0,o.jsx)(e.code,{children:"CUSTOM_INPUT: 'customInput'"})," \u540e\u9762\u7684\uff1a",(0,o.jsx)(e.code,{children:"customInput"})," \u5176\u5b9e\u662f",(0,o.jsx)(e.code,{children:"declare module '@easy-page/antd-ui'"})," \u4e2d\u5b9a\u4e49\u7684\u5c5e\u6027\u7684 key\uff0c\u5426\u5219\u627e\u4e0d\u5230\u5bf9\u5e94\u7684\u914d\u7f6e\u3002"]}),"\n"]})}),"\n",(0,o.jsxs)(e.p,{children:["\u5728 ",(0,o.jsx)(e.code,{children:"EasyPage"})," \u4e2d\u6ce8\u518c\u6b64\u7ec4\u4ef6\uff1a"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"import { DEFAULT_COMPONENTS, EasyPage } from '@easy-page/antd-ui';\nimport React from 'react';\nimport '../common/style';\nimport '@easy-page/antd-ui/style.css';\nimport { pageInfo } from './pageInfo';\nimport { EXT_UI_COMPONENTS } from './constant';\nimport { CustomInput } from './Input';\n\nconst Topic29 = () => {\n  return (\n    <EasyPage<{ name: string; age: string }>\n      {...pageInfo}\n      /** \u6309\u9700\u52a0\u8f7d\u8868\u5355\u6240\u9700\u7ec4\u4ef6 * */\n      components={{\n        ...DEFAULT_COMPONENTS,\n        [EXT_UI_COMPONENTS.CUSTOM_INPUT]: CustomInput,\n      }}\n      pageType=\"form\"\n    />\n  );\n};\n\nexport default Topic29;\n\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u63a5\u7740\uff0c\u6211\u4eec\u5728\u5b9a\u4e49\u5b57\u6bb5\u7684\u65f6\u5019\uff0c\u6307\u5b9a\u6211\u4eec\u7684\u6269\u5c55\u7ec4\u4ef6\uff0c\u5e76\u7ed9\u5176\u900f\u4f20\u5c5e\u6027\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"import { nodeUtil } from '@easy-page/antd-ui';\nimport { EXT_UI_COMPONENTS } from './constant';\n\nexport const name = nodeUtil.createField(\n  'name',\n  '\u59d3\u540d',\n  {\n    value: '',\n  },\n  {\n    ui: EXT_UI_COMPONENTS.CUSTOM_INPUT,\n    customInput: {\n      placeholder: '\u8fd9\u662f\u59d3\u540d\u5b57\u6bb5',\n    },\n  }\n);\n\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u6548\u679c\u5982\u4e0b\uff1a"}),"\n","\n",(0,o.jsx)(h,{}),"\n",(0,o.jsx)(e.h2,{id:"\u4f7f\u7528\u526f\u4f5c\u7528",children:"\u4f7f\u7528\u526f\u4f5c\u7528"}),"\n",(0,o.jsx)(e.p,{children:"\u6211\u4eec\u7ed9\u5b9a\u4e49\u7684\u8f93\u5165\u6846\u589e\u52a0\u4e00\u4e0b\u526f\u4f5c\u7528\u7684\u80fd\u529b\uff1a"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\u53ef\u4ee5\u57fa\u4e8e\u526f\u4f5c\u7528\u6539\u53d8\u7ec4\u4ef6\u7684 ",(0,o.jsx)(e.code,{children:"Props"})]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["\u9996\u5148\uff0c\u6211\u4eec\u5b9a\u4e49\u526f\u4f5c\u7528\u7c7b\u578b\uff1a",(0,o.jsx)(e.code,{children:"InputEffectedType"}),":"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"export type InputEffectedType = {\n  inputProps?: InputBaseProps;\n};\n\n/**\n * - 1. \u5b9a\u4e49\u7ec4\u4ef6 Props\uff0c\u4e00\u822c\u7531\uff1aUI \u5e93\u7ec4\u4ef6\u672c\u8eab Props + \u6846\u67b6\u901a\u7528\u7ec4\u4ef6 Props + \u81ea\u5b9a\u4e49\u7ec4\u4ef6 Props \u6784\u6210\n */\nexport type InputProps = ComponentProps<InputBaseProps, any, InputEffectedType>;\n\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u7136\u540e\uff0c\u6211\u4eec\u5c31\u62ff\u7740\u4f20\u9012\u8fc7\u6765\u7684\u526f\u4f5c\u7528\u7ed3\u679c\uff0c\u76f4\u63a5\u653e\u5230\u7ec4\u4ef6\u4e0a\u5373\u53ef\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"export const CustomInput = connector(\n  React.memo((props: CustomInputProps) => {\n    const {\n      frameworkProps: { effectedResult },\n      value,\n      onChange,\n      ...baseProps\n    } = props;\n    console.log('baseProps:', baseProps);\n    return (\n      <AntdInput\n        {...baseProps}\n        {...(effectedResult?.inputProps || {})}\n        onChange={onChange}\n        value={value}\n      />\n    );\n  })\n);\n\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\u5982\u4e0a\uff0c\u6211\u4eec\u5728\uff1a",(0,o.jsx)(e.code,{children:"frameworkProps"})," \u4e2d\u53d6\u51fa\uff1a",(0,o.jsx)(e.code,{children:"effectedResult"})," \u653e\u5230\u4e86\u8f93\u5165\u6846\u4e0a\uff0c\u5c31\u4f7f\u5176\u5177\u5907\u4e86\u6b64\u80fd\u529b\uff0c\u6548\u679c\u5982\u4e0b\uff1a"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\u59d3\u540d2 \u57fa\u4e8e\u59d3\u540d\u7684\u503c\u5c55\u793a:",(0,o.jsx)(e.code,{children:"placeholder"})]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"import { Empty, nodeUtil } from '@easy-page/antd-ui';\nimport { EXT_UI_COMPONENTS } from './constant';\nimport { InputEffectedType } from './Input';\n\nexport const name2 = nodeUtil.createField<\n  string,\n  { name: string },\n  Empty,\n  InputEffectedType\n>(\n  'name2',\n  '\u59d3\u540d2',\n  {\n    value: '',\n    actions: [\n      {\n        effectedKeys: ['name'],\n        initRun: true,\n        action: ({ effectedData }) => {\n          return {\n            effectResult: {\n              inputProps: {\n                placeholder: `\u57fa\u4e8e name: ${\n                  effectedData.name || ''\n                } \u7684 placeholder`,\n              },\n            },\n          };\n        },\n      },\n    ],\n  },\n  {\n    ui: EXT_UI_COMPONENTS.CUSTOM_INPUT,\n  }\n);\n\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u6548\u679c\u5982\u4e0b\uff1a"}),"\n","\n",(0,o.jsx)(T,{}),"\n",(0,o.jsx)(e.h2,{id:"\u6269\u5c55\u8f93\u5165\u6846\u7684\u80fd\u529b",children:"\u6269\u5c55\u8f93\u5165\u6846\u7684\u80fd\u529b"}),"\n",(0,o.jsx)(e.p,{children:"\u6211\u4eec\u7ed9\u8f93\u5165\u6846\u589e\u52a0\u4e00\u4e2a\u80fd\u529b\uff1a"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["\u5f53\u8bbe\u7f6e\u4e86: ",(0,o.jsx)(e.code,{children:"trigger = 'onBlur'"})," \u65f6\uff0c\u5728 ",(0,o.jsx)(e.code,{children:"onBlur"})," \u65f6\u624d\u89e6\u53d1\u503c\u7684\u53d8\u5316\u3002"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"export type InputBaseProps = AntdInputProps & {\n  /** \u5b57\u6bb5\u53d8\u5316\u65f6\u95f4\uff1aonBlur \u8868\u793a onBlur \u65f6\u624d\u63d0\u4ea4\u53d8\u5316, \u9ed8\u8ba4 onBlur */\n  trigger?: 'onChange' | 'onBlur';\n};\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"\u8be6\u7ec6\u6539\u52a8\u5982\u4e0b\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"/* eslint-disable @typescript-eslint/no-explicit-any */\nimport { ComponentProps, connector } from '@easy-page/react-ui';\nimport { Input as AntdInput, InputProps as AntdInputProps } from 'antd';\nimport React, { useEffect, useState } from 'react';\n\nexport type InputBaseProps = AntdInputProps & {\n  /** \u5b57\u6bb5\u53d8\u5316\u65f6\u95f4\uff1aonBlur \u8868\u793a onBlur \u65f6\u624d\u63d0\u4ea4\u53d8\u5316, \u9ed8\u8ba4 onBlur */\n  trigger?: 'onChange' | 'onBlur';\n};\n\nexport type InputEffectedType = {\n  inputProps?: InputBaseProps;\n};\n/**\n * - 1. \u5b9a\u4e49\u7ec4\u4ef6 Props\uff0c\u4e00\u822c\u7531\uff1aUI \u5e93\u7ec4\u4ef6\u672c\u8eab Props + \u6846\u67b6\u901a\u7528\u7ec4\u4ef6 Props + \u81ea\u5b9a\u4e49\u7ec4\u4ef6 Props \u6784\u6210\n */\nexport type InputProps = ComponentProps<InputBaseProps, any, InputEffectedType>;\n\n/**\n * - 2. \u91cd\u5199 FieldUIConfig\uff0c\u589e\u52a0\u7ec4\u4ef6\u914d\u7f6e\u63d0\u793a\n */\ndeclare module '@easy-page/react-ui/interface' {\n  export interface FieldUIConfig {\n    input?: InputBaseProps;\n  }\n}\n/**\n * - 3. \u7f16\u5199\u901a\u7528\u7ec4\u4ef6\u903b\u8f91\n * @param props\n * @returns\n */\nexport const Input = connector(\n  React.memo((props: InputProps) => {\n    const {\n      frameworkProps: { effectedResult },\n      value,\n      onChange,\n      onBlur,\n      trigger = 'onChange',\n      ...baseProps\n    } = props;\n    const [fieldValue, setFieldValue] = useState(value);\n    useEffect(() => {\n      if (value && value !== fieldValue) {\n        setFieldValue(value);\n      }\n    }, [value]);\n    if (trigger === 'onChange') {\n      return (\n        <AntdInput\n          {...baseProps}\n          onBlur={onBlur}\n          {...(effectedResult?.inputProps || {})}\n          onChange={onChange}\n          value={value}\n        />\n      );\n    }\n    return (\n      <AntdInput\n        {...baseProps}\n        {...(effectedResult?.inputProps || {})}\n        onBlur={(e) => {\n          onChange({ target: { value: fieldValue } });\n          onBlur?.(e);\n        }}\n        onChange={(val) => {\n          setFieldValue(val.target.value);\n        }}\n        value={fieldValue}\n      />\n    );\n  })\n);\n\n"})}),"\n",(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\u5176\u4f59\u7ec4\u4ef6\u6269\u5c55\u53ef\u53c2\u8003\uff1a",(0,o.jsx)(e.code,{children:"@easy-page/antd-ui"})," \u91cc\u7684\u7ec4\u4ef6\u8fdb\u884c\u6269\u5c55\uff0c\u6d41\u7a0b\u5927\u540c\u5c0f\u5f02\u3002"]}),"\n"]})})]})}function O(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(E,{...n})}):E(n)}},3533:(n,e,t)=>{t.d(e,{K:()=>p});var o=t(8981),s=(t(758),t(6137)),r=t(6070);const a=o.nodeUtil.createCustomNode("validate",(n=>{let{frameworkProps:{getFormUtil:e}}=n;return(0,r.jsx)(s.Ay,{onClick:async()=>{const n=e?.();try{await(n?.validateAll())}catch(t){console.log("\u9a8c\u8bc1\u7ed3\u679c:",t)}},children:"\u9a8c\u8bc1"})}),{value:""}),l=o.nodeUtil.createCustomNode("submit",(n=>{let{frameworkProps:{getFormUtil:e}}=n;return(0,r.jsx)(s.Ay,{type:"primary",style:{marginLeft:12},onClick:()=>{const n=e?.();console.log("\u8868\u5355\u503c\uff1a",n?.getFormData())},children:"\u8868\u5355\u503c"})}),{value:""}),p=o.nodeUtil.createContainer("tool-bar",(n=>{let{children:e}=n;return(0,r.jsx)("div",{className:"flex flex-row",style:{marginBottom:12},children:e})})).appendChildren([a,l])}}]);