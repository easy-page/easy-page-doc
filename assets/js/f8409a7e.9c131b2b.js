"use strict";(self.webpackChunkeasy_page_doc=self.webpackChunkeasy_page_doc||[]).push([[6903],{6937:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>C,contentTitle:()=>I,default:()=>T,frontMatter:()=>P,metadata:()=>F,toc:()=>w});var i=s(6070),r=s(6113),l=s(4432),t=s(8981);s(758);const a=t.nodeUtil.createField("sex","\u6027\u522b",{value:"",mode:"single"}).appendChildren([t.nodeUtil.createNode("man",{name:"\u7537"}).appendChildren([t.nodeUtil.createField("like","\u559c\u6b22\u770b\u7684\u4e66",{value:""})]),t.nodeUtil.createNode("female",{name:"\u5973"})]),d=new t.PageUtil({pageId:"form-page"});d.addFields([a]);const c=d.getPageInfo(),o=()=>(0,i.jsx)(t.EasyPage,{...c,components:t.DEFAULT_COMPONENTS,pageType:"form"}),h=t.nodeUtil.createField("age","\u5e74\u9f84",{value:"",required:!0,postprocess:e=>({age:Number(e.value)}),validate(e){let{value:n,pageState:s}=e;return n?+n<0||+n>200&&"pk"!==s.name?{success:!1,errorMsg:"\u8bf7\u8f93\u5165\u5408\u6cd5\u5e74\u9f84"}:{success:!0}:{success:!1,errorMsg:"\u8bf7\u8f93\u5165\u5e74\u9f84"}},actions:[{effectedKeys:["name"],initRun:!0,action:e=>{let{effectedData:n}=e;return{effectResult:{inputProps:{placeholder:`${n.name||"-"} \u7684\u5e74\u9f84`}}}}}],when:{effectedKeys:["name"],show(e){let{effectedData:n}=e;return"a"!==n.name}}},{input:{trigger:"onChange"},formItem:{customExtra:e=>{let{value:n}=e;return(0,i.jsx)("div",{children:n&&+n<10?"\u513f\u7ae5":""})}}});var p=s(3533);const x=t.nodeUtil.createField("name","\u59d3\u540d",{value:""},{input:{trigger:"onChange"}}),u=new t.PageUtil({pageId:"form-page"});u.addFields([x,h,p.K]);const g=u.getPageInfo(),m=()=>(0,i.jsx)(t.EasyPage,{...g,components:t.DEFAULT_COMPONENTS,pageType:"form"}),j=t.nodeUtil.createField("name","\u59d3\u540d",{value:""},{input:{trigger:"onChange"}}),f=t.nodeUtil.createField("age","\u5e74\u9f84",{value:"",required:!0,postprocess:e=>({age:Number(e.value)}),validate(e){let{value:n,pageState:s}=e;return n?+n<0||+n>200&&"pk"!==s.name?{success:!1,errorMsg:"\u8bf7\u8f93\u5165\u5408\u6cd5\u5e74\u9f84"}:{success:!0}:{success:!1,errorMsg:"\u8bf7\u8f93\u5165\u5e74\u9f84"}},actions:[{effectedKeys:["name"],initRun:!0,action:e=>{let{effectedData:n}=e;return{effectResult:{inputProps:{placeholder:`${n.name||"-"} \u7684\u5e74\u9f84`}}}}}],when:{effectedKeys:["name"],show(e){let{effectedData:n}=e;return"a"!==n.name}}},{input:{trigger:"onChange"},formItem:{customExtra:e=>{let{value:n}=e;return(0,i.jsx)("div",{children:n&&+n<10?"\u513f\u7ae5":""})}}}),y=t.nodeUtil.extends(f,{name:"\u6211\u7684\u5e74\u9f84",required:!1,validate:e=>n=>n.value?e?.(n):{success:!0},when:e=>({effectedKeys:e?.effectedKeys||[],show:e=>!0}),fieldUIConfig:e=>{const n={...e||{}};return n.formItem=n.formItem||{},n.formItem.tooltip="\u8fd9\u662f\u65b0\u7684\u5e74\u9f84",n}}),v=new t.PageUtil({pageId:"form-page"});v.addFields([j,y,p.K]);const E=v.getPageInfo(),U=()=>(0,i.jsx)(t.EasyPage,{...E,components:t.DEFAULT_COMPONENTS,pageType:"form"}),P={sidebar_position:1},I="\u7b80\u4ecb",F={id:"intro",title:"\u7b80\u4ecb",description:"\u4ec0\u4e48\u662f EasyPage \uff1f",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/easy-page-doc/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/easy-page/easy-page-doc/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Schema \u8bbe\u8ba1",permalink:"/easy-page-doc/docs/concepts/schema"}},C={},w=[{value:"\u4ec0\u4e48\u662f EasyPage \uff1f",id:"\u4ec0\u4e48\u662f-easypage-",level:2},{value:"EasyPage \u80fd\u505a\u4ec0\u4e48\uff1f",id:"easypage-\u80fd\u505a\u4ec0\u4e48",level:2},{value:"EasyPage \u7684\u4f18\u52bf\u662f\u4ec0\u4e48\uff1f",id:"easypage-\u7684\u4f18\u52bf\u662f\u4ec0\u4e48",level:2},{value:"\u7b80\u6d01\u6027",id:"\u7b80\u6d01\u6027",level:3},{value:"\u9ad8\u5185\u805a\u3001\u4f4e\u8026\u5408",id:"\u9ad8\u5185\u805a\u4f4e\u8026\u5408",level:3},{value:"\u590d\u7528\u6027",id:"\u590d\u7528\u6027",level:3},{value:"\u6269\u5c55\u6027",id:"\u6269\u5c55\u6027",level:3},{value:"EasyPage \u548c Formily",id:"easypage-\u548c-formily",level:2},{value:"\u76f8\u540c\u70b9",id:"\u76f8\u540c\u70b9",level:3},{value:"\u5dee\u5f02",id:"\u5dee\u5f02",level:3}];function N(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,i.jsx)(n.h2,{id:"\u4ec0\u4e48\u662f-easypage-",children:"\u4ec0\u4e48\u662f EasyPage \uff1f"}),"\n",(0,i.jsx)(n.p,{children:"EasyPage \u6b63\u5982\u5176\u540d\uff0c\u542b\u4e49\u662f\uff1a\u7b80\u5355\u7684\u9875\u9762\u3002\u5b83\u80fd\u8ba9\u6211\u4eec\u7684\u524d\u7aef\u9875\u9762\u5f00\u53d1\u66f4\u52a0\u7b80\u5355\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Make Front-End Development Easier"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5b83\u63d0\u4f9b\u4e86\u4e00\u5957\u63cf\u8ff0\u5f0f\u7684 API\uff0c\u6765\u5e2e\u52a9\u4f60\u9ad8\u6548\u5730\u5f00\u53d1\u7528\u6237\u754c\u9762\u3002\u65e0\u8bba\u662f\u7b80\u5355\u8fd8\u662f\u590d\u6742\u7684\u754c\u9762\uff0cEasyPage \u90fd\u53ef\u4ee5\u80dc\u4efb\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u4e00\u4e2a\u6700\u57fa\u672c\u7684\u793a\u4f8b\uff0c\u521b\u5efa\u4e00\u4e2a\u59d3\u540d\u7684\u8868\u5355\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"// ./name.tsx\nimport { nodeUtil } from '@easy-page/antd-ui';\n\nexport const name = nodeUtil.createField('name', '\u59d3\u540d', {\n  value: '',\n  required: true,\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u7ed3\u679c\u5c55\u793a"})}),"\n","\n",(0,i.jsx)(l.A,{}),"\n",(0,i.jsx)(n.p,{children:"\u4e0a\u9762\u7684\u5b57\u6bb5\u5b9a\u4e49\uff0c\u5c55\u793a\u4e86 EasyPage \u7684\u4e24\u4e2a\u7279\u6027\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u7b80\u6d01\u6027","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6211\u60f3\u7528\u4efb\u4f55\u7684\u5199\u6cd5\u53bb\u63cf\u8ff0\u4e00\u4e2a\u59d3\u540d\u5b57\u6bb5\uff0c\u90fd\u4f1a\u6bd4\u4e0a\u9762\u66f4\u957f\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u968f\u7740\u573a\u666f\u7684\u590d\u6742\uff0cEasyPage \u7684\u7b80\u6d01\u4f18\u52bf\u5219\u66f4\u52a0\u660e\u663e\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u63cf\u8ff0\u6027","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u57fa\u4e8e\u63cf\u8ff0\uff0c\u4e0e UI \u201d\u89e3\u8026\u201c\uff0c\u5e95\u5c42\u53ef\u505a\u66f4\u591a\u9002\u914d\uff08antd\u3001acro \u7b49 UI\uff09\uff0c\u4e3a\u4e1a\u52a1\u903b\u8f91\u7684\u590d\u7528\u6027\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u60f3\u8c61\u7a7a\u95f4\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4f60\u53ef\u80fd\u5df2\u7ecf\u6709\u4e86\u4e9b\u7591\u95ee\u2014\u2014\u5148\u522b\u6025\uff0c\u5728\u540e\u7eed\u7684\u6587\u6863\u4e2d\u6211\u4eec\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\u6bcf\u4e00\u4e2a\u7ec6\u8282\u3002\u73b0\u5728\uff0c\u8bf7\u7ee7\u7eed\u770b\u4e0b\u53bb\uff0c\u4ee5\u786e\u4fdd\u4f60\u5bf9 EasyPage \u4f5c\u4e3a\u4e00\u4e2a\u6846\u67b6\u5230\u5e95\u63d0\u4f9b\u4e86\u4ec0\u4e48\u6709\u4e00\u4e2a\u5b8f\u89c2\u7684\u4e86\u89e3\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"easypage-\u80fd\u505a\u4ec0\u4e48",children:"EasyPage \u80fd\u505a\u4ec0\u4e48\uff1f"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5b83\u53ef\u4ee5\u7528\u4e8e\u5f00\u53d1",(0,i.jsx)(n.strong,{children:"\u8868\u5355\u9875\u9762"}),"\uff0c\u4e5f\u53ef\u76f4\u63a5\u7528\u4e8e\u5f00\u53d1",(0,i.jsx)(n.strong,{children:"\u524d\u7aef\u9875\u9762"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5b83\u53ef\u4ee5\u5e2e\u6211\u4eec\u505a\u9875\u9762",(0,i.jsx)(n.strong,{children:"\u72b6\u6001\u7ba1\u7406"}),"\uff0c\u518d\u4e5f\u4e0d\u7528\u624b\u52a8\u5728\u7ec4\u4ef6\u95f4\u5404\u79cd\u900f\u4f20 Props\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5b83\u53ef\u4ee5\u5e2e\u6211\u4eec\u505a\u9875\u9762\u7684",(0,i.jsx)(n.strong,{children:"\u7cbe\u786e\u6e32\u67d3"}),"\uff0c\u518d\u4e5f\u4e0d\u7528\u4e3a\u56e0\u4e3a\u72b6\u6001\u53d8\u5316\uff0c\u5bfc\u81f4\u5237\u65b0\u8fc7\u591a\uff0c\u964d\u4f4e\u9875\u9762\u6027\u80fd\u800c\u70e6\u607c\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5b83\u53ef\u4ee5\u5e2e\u6211\u4eec\u76d1\u542c\u9875\u9762\u5185\u4efb\u610f\u72b6\u6001\u53d8\u5316\uff0c\u5e76\u6267\u884c\u76f8\u5173",(0,i.jsx)(n.strong,{children:"\u526f\u4f5c\u7528\u5904\u7406"}),"\uff0c\u53bb\u6539\u53d8\u7ec4\u4ef6\u7684\uff1a\u503c\u3001\u7ec4\u4ef6 Props\u3001\u9009\u9879\u3001\u663e\u9690\u72b6\u6001\u7b49\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5b83\u53ef\u4ee5\u5e2e\u6211\u4eec\u66f4\u597d\u7684",(0,i.jsx)(n.strong,{children:"\u590d\u7528\u903b\u8f91"}),"\uff0c\u51cf\u5c11\u4ee3\u7801\u4e2d\u5927\u91cf\u7684 if else \u5224\u65ad\u4ee5\u53ca\u76f8\u4e92\u5f71\u54cd\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5b83\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u89e3\u51b3\u590d\u6742\u7684\u4e1a\u52a1\u573a\u666f\u96be\u9898\uff0c\u5982\uff1a",(0,i.jsx)(n.strong,{children:"\u7236\u5b50\u8868\u5355"}),"\u591a\u5c42\u5d4c\u5957\u5185\u5916\u8054\u52a8\u3001",(0,i.jsx)(n.strong,{children:"\u6570\u7ec4\u8868\u5355\u589e\u5220"}),"\u7b49\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5728\u540e\u7eed\u7684\u6587\u6863\u4e2d\uff0c\u6211\u4eec\u5c06\u4e00\u4e00\u89c1\u8bc6\u5230\u4e0a\u8ff0\u597d\u5904\u3002 :::"}),"\n"]}),"\n"]}),(0,i.jsx)(n.h2,{id:"easypage-\u7684\u4f18\u52bf\u662f\u4ec0\u4e48",children:"EasyPage \u7684\u4f18\u52bf\u662f\u4ec0\u4e48\uff1f"}),(0,i.jsx)(n.h3,{id:"\u7b80\u6d01\u6027",children:"\u7b80\u6d01\u6027"}),(0,i.jsx)(n.p,{children:"\u4e0a\u8ff0\u793a\u4f8b\u53ef\u4ee5\u521d\u6b65\u770b\u5230\u5176\u7b80\u6d01\u6027\uff0c\u4e0b\u9762\u6211\u4eec\u63cf\u8ff0\u5982\u4e0b\u590d\u6742\u903b\u8f91\uff0c\u518d\u770b\u5176\u7b80\u6d01\u6027\u3002"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u65b0\u5efa\u4e00\u4e2a\u6027\u522b\u5b57\u6bb5\uff0c\u4e24\u4e2a\u9009\u9879\uff1a\u7537\u3001\u5973"}),"\n",(0,i.jsx)(n.li,{children:"\u5f53\u9009\u4e2d\u201c\u7537\u201d\u65f6\uff0c\u51fa\u73b0\u5b57\u6bb5\uff1a\u559c\u6b22\u770b\u7684\u4e66\uff08\u8f93\u5165\u6846\uff09"}),"\n",(0,i.jsx)(n.li,{children:"\u5f53\u9009\u4e2d\u201c\u5973\u201d\u65f6\uff0c\u4e0d\u51fa\u73b0\u4efb\u4f55\u5185\u5bb9\u3002"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"/** \u9009\u9879 **/\nconst manOption = nodeUtil.createNode('man', { name: '\u7537' });\nconst womenOption = nodeUtil.createNode('female', { name: '\u5973' });\n\n/** \u5b57\u6bb5 **/\nconst sexField = nodeUtil.createField('sex', '\u6027\u522b', {\n  value: '',\n  mode: 'single',\n});\n\n/** \u5b50\u8868\u5355\u5b57\u6bb5 **/\nconst hobby = nodeUtil.createField('like', '\u559c\u6b22\u770b\u7684\u4e66', { value: '' });\n\nexport const sex = sexField.appendChildren([\n  manOption.appendChildren([hobby]),\n  womenOption,\n]);\n"})}),(0,i.jsx)(n.p,{children:"\u975e\u5e38\u8f7b\u677e\u5c31\u63cf\u8ff0\u51fa\u4e86\u4e00\u4e2a\u590d\u6742\u7684\u8054\u52a8\u6548\u679c\uff1a"}),(0,i.jsx)(o,{}),(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u82e5\u6b64\u573a\u666f\u6709\u66f4\u7b80\u6d01\u7684\u5199\u6cd5\uff0c\u8bf7\u5728 Github \u4e0b\u8bc4\u8bba\u3002"}),"\n"]}),"\n"]}),(0,i.jsx)(n.h3,{id:"\u9ad8\u5185\u805a\u4f4e\u8026\u5408",children:"\u9ad8\u5185\u805a\u3001\u4f4e\u8026\u5408"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u4f60\u53ef\u4ee5\u60f3\u8c61\u5230\u7684\u5173\u4e8e\u5b57\u6bb5\u7684\u4e00\u5207\uff0c\u90fd\u53ef\u4ee5\u5728\u81ea\u8eab\u5b9a\u4e49\u4e2d\uff0c\u5b8c\u6574\u72ec\u7acb\u903b\u8f91\u95ed\u73af\u3002"})}),(0,i.jsx)(n.p,{children:"\u4ee5\u4e0b\u8fd8\u662f\u4ee5\u8868\u5355\u5143\u7d20\u4e3a\u4e00\u4e2a\u5b9e\u9645\u7684\u4f8b\u5b50\uff0c\u6765\u5c55\u793a\u4e0a\u8ff0\u7279\u70b9\uff1a"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u65b0\u5efa\u4e00\u4e2a\u5e74\u9f84\u5b57\u6bb5\uff0c\u4ee5\u8f93\u5165\u6846\u5c55\u793a\uff0c\u5fc5\u586b\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { Empty, InputEffectedType, nodeUtil } from '@easy-page/antd-ui';\nimport React from 'react';\n\nexport const age = nodeUtil.createField<\n  string,\n  { name: string },\n  Empty,\n  InputEffectedType\n>('age', '\u5e74\u9f84', {\n  /** \u9ed8\u8ba4\u503c */\n  value: '',\n  /** \u5fc5\u586b * \u53f7 */\n  required: true,\n});\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u3010\u8054\u52a8\u5c5e\u6027\u3011\u57fa\u4e8e\u59d3\u540d\u5b57\u6bb5\uff0c\u6765\u5c55\u793a placeholder: ",(0,i.jsx)(n.code,{children:"${name} \u7684\u5e74\u9f84"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"    import { Empty, InputEffectedType, nodeUtil } from '@easy-page/antd-ui';\n    import React from 'react';\n\n    export const age = nodeUtil.createField<string,{ name: string },Empty,InputEffectedType>(\n      'age',\n      '\u5e74\u9f84',\n      {\n        ...,\n        actions: [\n          {\n            effectedKeys: ['name'],\n            /** \u52a0\u8f7d\u65f6\uff0c\u7acb\u5373\u6267\u884c */\n            initRun: true,\n            action: ({ effectedData }) => {\n              return {\n                effectResult: {\n                  inputProps: {\n                    placeholder: `${effectedData.name || '-'} \u7684\u5e74\u9f84`,\n                  },\n                },\n              };\n            },\n          },\n        ],\n    );\n\n    ```\n\n\n- \u3010\u8054\u52a8\u663e\u9690\u3011\u5f53 `\u59d3\u540d=a` \u65f6\uff0c\u9690\u85cf\u5e74\u9f84\n\n    ```tsx\n      import { Empty, InputEffectedType, nodeUtil } from '@easy-page/antd-ui';\n      import React from 'react';\n\n      export const age = nodeUtil.createField<string,{ name: string },Empty,InputEffectedType>(\n        'age',\n        '\u5e74\u9f84',\n        {\n        ...,\n          /** \u5b57\u6bb5\u663e\u793a\u4e0e\u9690\u85cf */\n          when: {\n            effectedKeys: ['name'],\n            show({ effectedData }) {\n              return effectedData.name !== 'a';\n            },\n          },\n        },\n        {\n          ...\n        }\n      );\n\n    ```\n\n- \u3010\u8054\u52a8\u63d0\u793a\u3011\u5f53 `age < 10` \u65f6\uff0c\u63d0\u793a\uff1a\u513f\u7ae5\n\n    ```tsx\n    import { Empty, InputEffectedType, nodeUtil } from '@easy-page/antd-ui';\n    import React from 'react';\n\n    export const age = nodeUtil.createField<string,{ name: string },Empty,InputEffectedType>(\n      'age',\n      '\u5e74\u9f84',\n      {\n        ...\n      },\n      {\n        /** \u8f93\u5165\u6846\u914d\u7f6e */\n        input: { trigger: 'onChange' },\n        /** FormItem \u914d\u7f6e */\n        formItem: {\n          /** \u81ea\u5b9a\u4e49\u63d0\u793a\u8bed\uff1a\u5e26\u4e0a\u4e0b\u6587 */\n          customExtra: ({ value }) => {\n            return <div>{value && +value < 10 ? '\u513f\u7ae5' : ''}</div>;\n          },\n        },\n      }\n    );\n\n    ```\n\n- \u3010\u63d0\u4ea4\u65f6\uff0c\u6570\u636e\u5904\u7406\u3011\u5c06\u6570\u636e\u5904\u7406\u6210\u6570\u5b57\n\n    ```tsx\n    import { Empty, InputEffectedType, nodeUtil } from '@easy-page/antd-ui';\n    import React from 'react';\n\n    export const age = nodeUtil.createField<string,{ name: string },Empty,InputEffectedType>(\n      'age',\n      '\u5e74\u9f84',\n      {\n        ...,\n        /** \u6570\u636e\u9884\u5904\u7406 */\n        postprocess(context) {\n          return {\n            age: Number(context.value),\n          };\n        },\n        ...\n      },\n      {\n        ...\n      }\n    );\n\n    ```\n\n- \u3010\u8054\u52a8\u6821\u9a8c\u3011\u5f53 `age < 0 || age > 200` \u65f6\uff0c\u63d0\u793a\uff1a\u8bf7\u8f93\u5165\u5408\u6cd5\u5e74\u9f84\uff1b\u5f53 `\u59d3\u540d=pk` \u65f6\uff0cage > 200 \u5408\u6cd5\uff1b\u5f53\u59d3\u540d\u53d8\u5316\u65f6\uff0c\u89e6\u53d1 age \u6821\u9a8c\u3002\n\n    ```tsx\n    import { Empty, InputEffectedType, nodeUtil } from '@easy-page/antd-ui';\n    import React from 'react';\n\n    export const age = nodeUtil.createField<string,{ name: string },Empty,InputEffectedType>(\n      'age',\n      '\u5e74\u9f84',\n      {\n        ...,\n        /** \u5b57\u6bb5\u9a8c\u8bc1 */\n        validate({ value, pageState }) {\n          if (!value) {\n            return { success: false, errorMsg: '\u8bf7\u8f93\u5165\u5e74\u9f84' };\n          }\n          if (+value < 0 || (+value > 200 && pageState.name !== 'pk')) {\n            return { success: false, errorMsg: '\u8bf7\u8f93\u5165\u5408\u6cd5\u5e74\u9f84' };\n          }\n          return { success: true };\n        },\n\n      },\n      {\n        ...\n        },\n      }\n    );\n\n    ```\n"})}),"\n"]}),"\n"]}),(0,i.jsx)(n.p,{children:"\u6548\u679c\uff1a"}),(0,i.jsx)(m,{}),(0,i.jsxs)(n.p,{children:["\u4ece\u4e0a\u53ef\u89c1\uff0c\u4e0a\u8ff0\u5b57\u6bb5\u903b\u8f91\u6bd4\u8f83\u590d\u6742\uff0c\u4f9d\u8d56 ",(0,i.jsx)(n.code,{children:"name"})," \u7684\u586b\u5199\uff0c\u505a\u76f8\u5173\u8054\u52a8\uff0c\u4f46\u4ece\u5934\u5230\u5c3e\uff0c\u5e76\u6ca1\u6709\u53bb\u5176\u4ed6\u5730\u65b9\u505a\u4efb\u4f55\u4e8b\u60c5\uff0c\u81ea\u8eab\u5c31\u53ef\u4ee5\u628a\u903b\u8f91\u5b8c\u5168\u63cf\u8ff0\u3002\u5145\u5206\u53ef\u89c1\u5176\uff1a",(0,i.jsx)(n.strong,{children:"\u9ad8\u5185\u805a\u3001\u4f4e\u8026\u5408"}),"\u7279\u70b9\u3002"]}),(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5c0f\u60ca\u559c\uff1a\u6211\u4eec\u7684 API \u63cf\u8ff0\u5bf9\u4e8e\u7c7b\u578b\u63d0\u793a\u5f88\u53cb\u597d\u54e6\uff01"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u793a\u4f8b\u4e00",src:s(1467).A+"",width:"1216",height:"240"})}),"\n"]}),"\n"]})})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u8868\u5355\u5143\u7d20\u5f80\u5f80\u903b\u8f91\u6700\u91cd\uff0c\u8054\u52a8\u6700\u591a\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u82e5\u6b64\u573a\u666f\u6709\u66f4\u7b80\u6d01\u7684\u5199\u6cd5\uff0c\u8bf7\u5728 Github \u4e0b\u8bc4\u8bba\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u590d\u7528\u6027",children:"\u590d\u7528\u6027"}),"\n",(0,i.jsx)(n.p,{children:"\u5bf9\u4e8e\u7ec4\u4ef6\u590d\u7528\uff0c\u76f8\u4fe1\u5927\u5bb6\u90fd\u4e0d\u964c\u751f\uff0c\u5728\u8fd9\u79cd\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u62bd\u79bb\u516c\u5171\u7ec4\u4ef6\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u68b3\u7406\u62bd\u8c61\u4e1a\u52a1\u903b\u8f91\u3001\u5b9a\u4e49\u7ec4\u4ef6\u63a5\u53e3"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4f46\u968f\u7740\u4e1a\u52a1\u7684\u6108\u53d1\u590d\u6742\uff0c\u6211\u4eec\u53d1\u73b0\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u3010\u62bd\u8c61\u96be\u3011\u7ec4\u4ef6\u5f88\u96be\u62bd\u8c61\u7684\u5f88\u5b8c\u7f8e\uff0c\u51e0\u4e4e\u90fd\u4f1a\u6709\u4e0d\u6ee1\u8db3\u7684\u60c5\u51b5\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u3010\u573a\u666f\u590d\u6742\u3011\u7ec4\u4ef6\u5185\u6e10\u6e10\u57fa\u4e8e\u4e1a\u52a1\u573a\u666f\uff0c\u9010\u6b65\u589e\u591a\u7684 if else\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u3010\u8026\u5408\u3011\u7275\u4e00\u53d1\u800c\u52a8\u5168\u8eab\uff0c\u6709\u65f6\u6539\u4e86\u67d0\u4e2a\u7ec4\u4ef6\uff0c\u5374\u5f71\u54cd\u4e86\u5176\u4ed6\u9875\u9762\u903b\u8f91\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u79cd\u73b0\u8c61\u548c\u95ee\u9898\u5728\u8868\u5355\u91cc\u4f53\u73b0\u7684\u66f4\u52a0\u6dcb\u6f13\u5c3d\u81f4\u3002JAVA \u9762\u5411\u5bf9\u8c61\u601d\u60f3\u4e2d\uff0c\u63d0\u51fa\u4e86\uff1a\u7ee7\u627f\u7684\u6982\u5ff5\u6765\u89e3\u51b3\u590d\u7528\u6027\u95ee\u9898\uff0c\u4f46\u5728\u524d\u7aef hooks \u7684\u5199\u6cd5\u4e0b\uff0c\u5f88\u96be\u5b9e\u8df5\u3002\u4e5f\u9020\u6210\u4e86\u73b0\u5728\u7684\u56f0\u6270\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4f46\uff0cEasyPage \u63d0\u51fa\u4e86\u9488\u5bf9\u8fd9\u4e00\u573a\u666f\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u4ee5\u4e0b\u8fd8\u662f\u627f\u63a5\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u6765\u5c55\u793a\u5176\u590d\u7528\u6027\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u7ee7\u627f age \u7684\u5c5e\u6027\uff0c\u5b9a\u4e49\u4e00\u4e2a newAge \u5b57\u6bb5\uff0c\u53d8\u5316\u5982\u4e0b\uff1a","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5b57\u6bb5\u540d\u6539\u4e3a\uff1a\u6211\u7684\u5e74\u9f84"}),"\n",(0,i.jsx)(n.li,{children:"\u5b57\u6bb5\u6539\u4e3a\uff1a\u975e\u5fc5\u586b"}),"\n",(0,i.jsx)(n.li,{children:"\u5b57\u6bb5\u6821\u9a8c\uff1a\u5141\u8bb8\u4e3a\u7a7a"}),"\n",(0,i.jsx)(n.li,{children:"\u5b57\u6bb5\u663e\u793a\uff1a\u4efb\u4f55\u65f6\u5019\u90fd\u5c55\u793a"}),"\n",(0,i.jsx)(n.li,{children:"\u5b57\u6bb5\u589e\u52a0 Tooltip \u63d0\u793a\uff1a\u8fd9\u662f\u65b0\u7684\u5e74\u9f84"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { nodeUtil } from '@easy-page/antd-ui';\nimport { age } from './age';\n\nexport const newAge = nodeUtil.extends(age, {\n  name: '\u6211\u7684\u5e74\u9f84',\n  required: false,\n  validate(oldValidate) {\n    return (options) => {\n      if (!options.value) {\n        return { success: true };\n      }\n      return oldValidate?.(options);\n    };\n  },\n  when(oldWhen) {\n    return {\n      effectedKeys: oldWhen?.effectedKeys || [],\n      show(context) {\n        return true;\n      },\n    };\n  },\n  fieldUIConfig: (oldConfig) => {\n    const newConfig = { ...(oldConfig || {}) };\n    newConfig.formItem = newConfig.formItem || {};\n    newConfig.formItem.tooltip = '\u8fd9\u662f\u65b0\u7684\u5e74\u9f84';\n    return newConfig;\n  },\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6548\u679c\uff1a"}),"\n","\n",(0,i.jsx)(U,{}),"\n",(0,i.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0c\u4e0a\u8ff0\u5e74\u9f84\u5b57\u6bb5\u7ee7\u627f\u4e86\u539f\u6765\u7684\u6240\u6709\u903b\u8f91\uff0c\u5e76\u8fdb\u884c\u4e86\u4fee\u6539\u548c\u66f4\u65b0\uff0c\u5e76\u548c\u539f\u6765\u7684\u4ee3\u7801\u65e0\u4efb\u4f55\u51b2\u7a81\u548c\u4ea4\u96c6\uff0c\u4e5f\u65e0\u9700\u505a\u4efb\u4f55\u7684\u62bd\u8c61\u5904\u7406\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6269\u5c55\u6027",children:"\u6269\u5c55\u6027"}),"\n",(0,i.jsx)(n.p,{children:"\u6269\u5c55\u6027\u4e3b\u8981\u662f\u4ece\u5f00\u53d1\u89d2\u5ea6\u6765\u63cf\u8ff0\uff0c\u5982\u4f55\u66f4\u7075\u6d3b\u7684\u5e94\u5bf9\u5404\u79cd\u573a\u666f\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\uff0c\u6211\u4eec\u60f3\u521b\u5efa\u4e00\u4e2a\u8f93\u5165\u6846\u5b57\u6bb5\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { nodeUtil } from '@easy-page/antd-ui';\n\nexport const name = nodeUtil.createField('name', '\u59d3\u540d', {\n  value: '',\n  required: true,\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u822c\u521b\u5efa\u7684\u9ed8\u8ba4\u7ec4\u4ef6\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u8f93\u5165\u578b\uff0c\u9ed8\u8ba4\uff1a\u8f93\u5165\u6846\u7ec4\u4ef6"}),"\n",(0,i.jsx)(n.li,{children:"\u9009\u62e9\u578b\uff0c\u9ed8\u8ba4\uff1a\u5355\u9009-RadioGroup\u3001\u591a\u9009-CheckBoxGroup"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5176\u4f59\uff0c\u9760\u6307\u5b9a\u7ec4\u4ef6\uff0c\u5982\uff1a\u5199\u4e00\u4e2a\u63cf\u8ff0\u5b57\u6bb5\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"export const desc = nodeUtil.createField(\n  'desc',\n  '\u4ecb\u7ecd',\n  {\n    value: '',\n  },\n  {\n    /** \u6307\u5b9a TextArea \u7ec4\u4ef6 **/\n    ui: UI_COMPONENTS.TEXTAREA,\n  },\n);\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@easy-page/antd-ui"})," \u5305\u91cc\u7684\u7ec4\u4ef6\u5373\u76ee\u524d\u6240\u652f\u6301\u7684\u7ec4\u4ef6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u9ed8\u8ba4\u7684\u7ec4\u4ef6\uff0c\u8fd8\u65e0\u6cd5\u6ee1\u8db3\u8981\u6c42\u3002\u6b64\u65f6\uff0c\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u91c7\u7528\u81ea\u5b9a\u4e49\u8282\u70b9\u5b8c\u6210","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"export const desc1 = nodeUtil.createCustomField(\n  'desc',\n  '\u4ecb\u7ecd',\n  ({ value, onChange }) => {\n    /** \u81ea\u5b9a\u4e49\u8f93\u5165\u6846\u7ec4\u4ef6 */\n    return <Input value={value} onChange={onChange} />;\n  },\n  {\n    value: '',\n  },\n);\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/tutorial-extras/extends_components",children:"\u6269\u5c55\u4e00\u4e2a\u901a\u7528\u7ec4\u4ef6"}),"\uff0c\u518d\u901a\u8fc7 ui \u5c5e\u6027\u8fdb\u884c\u914d\u7f6e\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u9664\u4e86\u53ef\u4ee5\uff1a\u6269\u5c55\u4e00\u4e2a\u901a\u7528\u7ec4\u4ef6\u5916\uff0c\u53ef\u80fd\u8fd8\u56e0\u4e3a\u4e0d\u540c\u7684\u516c\u53f8\uff0c\u8981\u6c42\u7684\u57fa\u7840\u7ec4\u4ef6\u5e93\u4e0d\u4e00\u6837\uff0c\u5982\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5728\u5b57\u8282\u53ef\u80fd\u662f arco\u3001\u5728\u963f\u91cc\u53ef\u80fd\u662f antd"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u53c2\u8003\uff1a",(0,i.jsx)(n.code,{children:"@easy-page/antd-ui"})," \u6269\u5c55\u4e00\u4e2a\u81ea\u5df1\u7684\u7ec4\u4ef6\u5e93\uff0c\u6269\u5c55\u6210\u672c\u5927\u6982\u5728 1 - 2 \u5929\u5de6\u53f3\u3002"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5728\u6846\u67b6\u7684\u8bbe\u8ba1\u4e0a\uff0c\u9884\u7559\u4e86\u652f\u6301 vue \u7684\u53ef\u80fd"}),"\n",(0,i.jsx)(n.li,{children:"\u9664\u4e86\u7f16\u5199\u9875\u9762\u5916\uff0c\u505a cli \u7684\u95ee\u9898\u5217\u8868\u5f00\u53d1\uff0c\u4e5f\u53ef\u4ee5\u6269\u5c55"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"easypage-\u548c-formily",children:"EasyPage \u548c Formily"}),"\n",(0,i.jsx)(n.h3,{id:"\u76f8\u540c\u70b9",children:"\u76f8\u540c\u70b9"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u90fd\u662f\u57fa\u4e8e Schema \u63cf\u8ff0 + \u89e3\u6790\u5f15\u64ce\u6a21\u5f0f\u6e32\u67d3\u9875\u9762"}),"\n",(0,i.jsx)(n.li,{children:"\u90fd\u80fd\u505a\u5230\u7cbe\u786e\u6e32\u67d3"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5dee\u5f02",children:"\u5dee\u5f02"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u9762\u5411\u573a\u666f\u4e0d\u540c"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6211\u4eec\u4e0d\u5355\u5355\u89e3\u51b3",(0,i.jsx)(n.strong,{children:"\u8868\u5355"}),"\u5f00\u53d1\u7684\u95ee\u9898\uff0c\u66f4\u89e3\u51b3",(0,i.jsx)(n.strong,{children:"\u524d\u7aef\u9875\u9762"}),"\u5f00\u53d1\u7684\u95ee\u9898\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Schema \u8bbe\u8ba1\u4e0d\u540c"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Formily \u6700\u521d\u8bbe\u8ba1\u66f4\u503e\u5411\u4e8e\u7528 Schema \u63cf\u8ff0\u4e00\u5207\uff0cSchema \u6bd4\u8f83\u5e9e\u5927\uff0c\u53ea\u80fd\u662f JSON \u6a21\u5f0f\uff0c\u800c\u975e JS\u3002"}),"\n",(0,i.jsx)(n.li,{children:"EasyPage \u53ea\u63cf\u8ff0\u6570\u636e\u548c\u6570\u636e\u4e4b\u95f4\u7684\u5173\u7cfb\uff0cSchema + UIConfig\uff0c\u6570\u636e\u548c UI \u4fe1\u606f\u5206\u79bb\uff0cSchema \u6bd4\u8f83\u7b80\u6d01\uff0c\u662f JS \u534f\u8bae\uff0c\u975e\u7eaf\u7cb9 JSON Schema\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u89e3\u51b3\u7814\u53d1\u63d0\u6548\u601d\u8def\u4e0d\u540c"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Formily \u66f4\u503e\u5411\u4e8e\u901a\u8fc7\uff1aSchema \u63cf\u8ff0\uff08\u62d6\u62c9\u62fd\u7b49\u65b9\u5f0f\uff09\u51cf\u5c11\u57fa\u7840\u4ee3\u7801\u5f00\u53d1\u91cf\uff0c\u63d0\u5347\u5f00\u53d1\u6548\u7387\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["\u6211\u4eec\u5219\u662f\u503e\u5411\u4e8e\u5efa\u7acb\u7814\u53d1\u6807\u51c6\uff0c\u51cf\u5c11\u4ee3\u7801\u91cf\uff0c\u5728\u5177\u6709\u975e\u5e38\u597d\u7684",(0,i.jsx)(n.strong,{children:"\u53ef\u7ef4\u62a4\u6027"}),"\u540c\u65f6\uff0c\u63d0\u5347\u7814\u53d1\u6548\u7387\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f\u4e0d\u540c"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Formily \u53ef\u4ee5\u901a\u8fc7\uff1a\u62d6\u62c9\u62fd\u3001\u7ec4\u4ef6\u63cf\u8ff0\u3001schema \u63cf\u8ff0\u7b49\u591a\u79cd\u65b9\u5f0f\u6765\u5f00\u53d1\u9875\u9762\u3002"}),"\n",(0,i.jsx)(n.li,{children:"EasyPage \u901a\u8fc7\u8f7b\u91cf\u7684 API\uff0c\u6765\u5f00\u53d1\u9875\u9762\u3002\uff08\u540e\u7eed\u4f1a\u652f\u6301\u66f4\u8d5e\u7684\u65b9\u5f0f\uff0c\u57cb\u4e00\u4e2a\u5f69\u86cb\uff01\uff09"}),"\n"]}),"\n"]}),"\n"]})]})}function T(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(N,{...e})}):N(e)}},3533:(e,n,s)=>{s.d(n,{K:()=>d});var i=s(8981),r=(s(758),s(6137)),l=s(6070);const t=i.nodeUtil.createCustomNode("validate",(e=>{let{frameworkProps:{getFormUtil:n}}=e;return(0,l.jsx)(r.Ay,{onClick:async()=>{const e=n?.();try{await(e?.validateAll())}catch(s){console.log("\u9a8c\u8bc1\u7ed3\u679c:",s)}},children:"\u9a8c\u8bc1"})}),{value:""}),a=i.nodeUtil.createCustomNode("submit",(e=>{let{frameworkProps:{getFormUtil:n}}=e;return(0,l.jsx)(r.Ay,{type:"primary",style:{marginLeft:12},onClick:()=>{const e=n?.();console.log("\u8868\u5355\u503c\uff1a",e?.getFormData())},children:"\u8868\u5355\u503c"})}),{value:""}),d=i.nodeUtil.createContainer("tool-bar",(e=>{let{children:n}=e;return(0,l.jsx)("div",{className:"flex flex-row",style:{marginBottom:12},children:n})})).appendChildren([t,a])},4432:(e,n,s)=>{s.d(n,{A:()=>c});var i=s(8981);s(758);const r=i.nodeUtil.createField("name","\u59d3\u540d",{value:"",required:!0});var l=s(3533);const t=new i.PageUtil({pageId:"form-page"});t.addFields([r,l.K]);const a=t.getPageInfo();console.log("pageInfo11:",a);var d=s(6070);const c=()=>(0,d.jsx)(i.EasyPage,{...a,components:i.DEFAULT_COMPONENTS,pageType:"form"})},1467:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/effect_keys_tips-42230b8f7dce7ede84d6cb416668ebc1.png"}}]);