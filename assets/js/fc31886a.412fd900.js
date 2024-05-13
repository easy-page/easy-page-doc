"use strict";(self.webpackChunkeasy_page_doc=self.webpackChunkeasy_page_doc||[]).push([[4469],{9425:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var d=l(6070),i=l(6113),s=l(2708);const r={sidebar_position:4},t="\u589e\u5220\u5b50\u8868\u5355",o={id:"tutorial-basics/create-child-form",title:"\u589e\u5220\u5b50\u8868\u5355",description:"\u6211\u4eec\u5e38\u5e38\u4f1a\u5728\u8868\u5355\u91cc\u5d4c\u5165\u6301\u7eed\u589e\u52a0\u7684\u5b50\u8868\u5355\uff1a",source:"@site/docs/tutorial-basics/create-child-form.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-child-form",permalink:"/easy-page-doc/docs/tutorial-basics/create-child-form",draft:!1,unlisted:!1,editUrl:"https://github.com/easy-page/easy-page-doc/docs/tutorial-basics/create-child-form.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u641c\u7d22\u4e0b\u62c9\u6846",permalink:"/easy-page-doc/docs/tutorial-basics/create-select"},next:{title:"\u5b57\u6bb5\u6570\u636e\u5904\u7406",permalink:"/easy-page-doc/docs/tutorial-extras/process"}},a={},c=[{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2},{value:"\u521b\u5efa\u5b50\u8868\u5355\u57fa\u672c\u4fe1\u606f",id:"\u521b\u5efa\u5b50\u8868\u5355\u57fa\u672c\u4fe1\u606f",level:3},{value:"\u521b\u5efa\u5b50\u8868\u5355\u5bb9\u5668\u3001\u653e\u5165 childFormInfo \u4fe1\u606f",id:"\u521b\u5efa\u5b50\u8868\u5355\u5bb9\u5668\u653e\u5165-childforminfo-\u4fe1\u606f",level:3},{value:"\u589e\u52a0\u5b50\u8868\u5355\u3001\u5220\u9664\u5b50\u8868\u5355\u529f\u80fd",id:"\u589e\u52a0\u5b50\u8868\u5355\u5220\u9664\u5b50\u8868\u5355\u529f\u80fd",level:3},{value:"\u6570\u636e\u63d0\u4ea4\u5904\u7406",id:"\u6570\u636e\u63d0\u4ea4\u5904\u7406",level:3},{value:"\u5b50\u8868\u5355\u9a8c\u8bc1",id:"\u5b50\u8868\u5355\u9a8c\u8bc1",level:3},{value:"\u6570\u636e\u56de\u586b",id:"\u6570\u636e\u56de\u586b",level:3},{value:"Demo",id:"demo",level:3}];function h(e){const n={code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"\u589e\u5220\u5b50\u8868\u5355",children:"\u589e\u5220\u5b50\u8868\u5355"}),"\n",(0,d.jsx)(n.p,{children:"\u6211\u4eec\u5e38\u5e38\u4f1a\u5728\u8868\u5355\u91cc\u5d4c\u5165\u6301\u7eed\u589e\u52a0\u7684\u5b50\u8868\u5355\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u53ef\u4ee5\u6dfb\u52a0\u5b50\u8868\u5355"}),"\n",(0,d.jsxs)(n.li,{children:["\u53ef\u4ee5\u5220\u9664\u5b50\u8868\u5355\n\u4f20\u7edf\u7684\u5199\u6cd5\uff0c\u5f80\u5f80\u4f1a\u8017\u8d39\u5f88\u591a\u7cbe\u529b\u5904\u7406\u72b6\u6001\u7ba1\u7406\u7684\u4e8b\u60c5\uff0c\u800c\u73b0\u5728\uff0c\u53ea\u9700\u8981\u4e00\u4e2a API \u5373\u53ef\uff1a",(0,d.jsx)(n.code,{children:"createChildForm"})]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u6848\u4f8b",children:"\u6848\u4f8b"}),"\n",(0,d.jsx)(n.h3,{id:"\u521b\u5efa\u5b50\u8868\u5355\u57fa\u672c\u4fe1\u606f",children:"\u521b\u5efa\u5b50\u8868\u5355\u57fa\u672c\u4fe1\u606f"}),"\n",(0,d.jsx)(n.p,{children:"\u9996\u5148\uff0c\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u5b50\u8868\u5355\u7684\u4fe1\u606f\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u521b\u5efa\u4e00\u4e2a\u5b50\u8868\u5355\u91cc\u7684\u5b57\u6bb5\uff1a",(0,d.jsx)(n.code,{children:"testChild"})," \uff08/childForm/fields/testChild.ts\uff09"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"import { nodeUtil } from '@easy-page/antd-ui';\n\nexport const testChild = nodeUtil.createField('test1', '\u6d4b\u8bd51', {});\n\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u653e\u5165\u5b50\u8868\u5355\u9875\u9762\u4fe1\u606f\uff1a"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"import { PageUtil } from '@easy-page/antd-ui';\nimport { testChild } from './fields';\nconst pu = new PageUtil({ pageId: 'xx' })\n\npu.addFields([testChild]);\n\nexport const childFormInfo = pu.getPageInfo()\n\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u521b\u5efa\u5b50\u8868\u5355\u5bb9\u5668\u653e\u5165-childforminfo-\u4fe1\u606f",children:"\u521b\u5efa\u5b50\u8868\u5355\u5bb9\u5668\u3001\u653e\u5165 childFormInfo \u4fe1\u606f"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u6211\u4eec\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"createChildForm"})," \u521b\u5efa\u4e00\u4e2a\u5b50\u8868\u5355\u5bb9\u5668\uff0c\u653e\u5165\u5b50\u8868\u5355\u9875\u9762\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"\nconst prefix = 'child-form';\nconst defaultId = generateId(prefix);\n\nexport const childFormField = nodeUtil.createChildForm<ChildFormState>(\n  'cc',\n  {\n    value: {\n      childForms: [{ id: defaultId, label: '\u5b50\u6d3b\u52a8' }],\n      choosedItemId: defaultId,\n    },\n    childFormContainer: ({ setChildFormRef, value, onChange }) => {\n      const { childForms, choosedItemId } = value;\n      return (\n        <Tabs\n          activeKey={choosedItemId}\n          onChange={(val) =>\n            onChange({\n              ...(value || ({} as ChildFormState)),\n              choosedItemId: val,\n            })\n          }\n          items={childForms.map((e, idx) => ({\n            label: `\u5b50\u8868\u5355${idx}`,\n            id: e.id,\n            key: e.id,\n            children: (\n              <EasyPage<ChildFormState>\n                {...childFormInfo}\n                pageType=\"form\"\n                components={DEFAULT_COMPONENTS}\n                setFormUtil={(ref) => setChildFormRef(ref, e.id)}\n              />\n            ),\n          }))}\n        ></Tabs>\n      );\n    },\n  },\n  {}\n);\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u4e0a\u5c55\u793a\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u6211\u4eec\u901a\u8fc7\uff1a",(0,d.jsx)(n.code,{children:"createChildForm"})," \u521b\u5efa\u4e86\u5b50\u8868\u5355"]}),"\n",(0,d.jsxs)(n.li,{children:["\u6211\u4eec\u901a\u8fc7\uff1a",(0,d.jsx)(n.code,{children:"value"})," \u5b9a\u4e49\uff0c\u7ed9\u5b50\u8868\u5355\u9ed8\u8ba4\u4e86\u4e00\u4e2a\u8868\u5355\u9009\u9879\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u6211\u4eec\u901a\u8fc7\uff1a",(0,d.jsx)(n.code,{children:"childFormContainer"})," \u521b\u5efa\u4e86\u5b50\u8868\u5355\u7684\u5e03\u5c40\uff0c\u91c7\u7528 ",(0,d.jsx)(n.code,{children:"Tabs"})," \u5e03\u5c40"]}),"\n",(0,d.jsxs)(n.li,{children:["\u6211\u4eec\u901a\u8fc7\uff1a",(0,d.jsx)(n.code,{children:"items"})," \u5c5e\u6027\uff0c\u4f20\u9012\u4e86\u5b50\u8868\u5355\u7ec4\u4ef6 ",(0,d.jsx)(n.code,{children:"EasyPage"}),"\uff0c\u7ec4\u4ef6\u5185\u5bb9\u4e3a\u6211\u4eec\u521a\u624d\u5b9a\u4e49\u7684\uff1a",(0,d.jsx)(n.code,{children:"childFormInfo"})," \u4fe1\u606f"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u5230\u6b64\uff0c\u6211\u4eec\u5c31\u5b8c\u6210\u4e86\u5b50\u8868\u5355\u7684\u57fa\u7840\u4fe1\u606f\u521b\u5efa\uff1a\u5bb9\u5668\u3001\u9875\u9762\u7ed3\u6784\u3002"}),"\n",(0,d.jsx)(n.div,{children:(0,d.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff1a",(0,d.jsx)(n.code,{children:"onChange"})," \u7684\u5904\u7406\u4ee5\u53ca\uff1a",(0,d.jsx)(n.code,{children:"setFormUtil"})," \u7684\u4f20\u9012\uff0c\u662f\u5fc5\u987b\u7684\uff0c\u5927\u5bb6\u5199\u7684\u65f6\u5019\u53ef\u53c2\u8003\u4e0a\u8ff0\u793a\u4f8b\u4f7f\u7528\u3002"]})}),"\n",(0,d.jsx)(n.h3,{id:"\u589e\u52a0\u5b50\u8868\u5355\u5220\u9664\u5b50\u8868\u5355\u529f\u80fd",children:"\u589e\u52a0\u5b50\u8868\u5355\u3001\u5220\u9664\u5b50\u8868\u5355\u529f\u80fd"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u6211\u4eec\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"onEdit"})," \u5feb\u901f\u5b8c\u6210\u5b50\u8868\u5355\u589e\u5220\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:" childFormContainer: ({\n      setChildFormRef,\n      onAdd,\n      onRemove,\n      value,\n      onChange,\n    }) => {\n      const { childForms, choosedItemId } = value;\n      return (\n        <Tabs\n          onEdit={(e, action) => {\n            if (action === 'add') {\n              onAdd();\n            } else if (action === 'remove') {\n              onRemove(e as string);\n            }\n          }}\n          ...\n        ></Tabs>\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u53ef\u4ee5\u53d1\u73b0\uff0c\u6211\u4eec\u53ea\u662f\u6dfb\u52a0\u4e86: ",(0,d.jsx)(n.code,{children:"onEdit"})," \u5c31\u5b9e\u73b0\u4e86\u6548\u679c\uff0c\u5176\u4ed6\u6211\u4eec\u4e0d\u7528\u64cd\u5fc3"]}),"\n",(0,d.jsx)(n.h3,{id:"\u6570\u636e\u63d0\u4ea4\u5904\u7406",children:"\u6570\u636e\u63d0\u4ea4\u5904\u7406"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"export const childFormField = nodeUtil.createChildForm<ChildFormState>(\n  'cc',\n  {\n    value: {\n      childForms: [{ id: defaultId, label: '' }],\n      choosedItemId: defaultId,\n    },\n    ...,\n    postprocess({ value }) {\n      const { formUtils, childForms } = value;\n      return {\n        activities: childForms.map((e) => {\n          const util = formUtils?.[e.id];\n          const data = util?.getFormData();\n          return data;\n        }),\n      };\n    },\n  })\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u6211\u4eec\u589e\u52a0\u4e86 ",(0,d.jsx)(n.code,{children:"postprocess"})," \u5b9a\u4e49\uff0c\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"value"})," \u91cc\u7684 ",(0,d.jsx)(n.code,{children:"formUtils"})," \u83b7\u53d6\u4e86\u5b8c\u6574\u7684\u5b57\u8868\u5355\u6570\u636e\uff0c\u5e76\u8fd4\u56de\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u5b50\u8868\u5355\u9a8c\u8bc1",children:"\u5b50\u8868\u5355\u9a8c\u8bc1"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"export const childFormField = nodeUtil.createChildForm<ChildFormState>(\n  'cc',\n  {\n    value: {\n      childForms: [{ id: defaultId, label: '' }],\n      choosedItemId: defaultId,\n    },\n    ...,\n    validate: async ({ value }) => {\n      const results = await validateAllChildForm(value);\n      const hasError = results.find((e) => Boolean(e.errors));\n      return { success: !hasError };\n    },\n  })\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u6211\u4eec\u589e\u52a0\u4e86\uff1a",(0,d.jsx)(n.code,{children:"validate"})," \u65b9\u6cd5\uff0c\u5f53\u6700\u5916\u5c42\u8868\u5355\u8c03\u7528\u9a8c\u8bc1\u7684\u65f6\u5019\uff0c\u4f1a\u6267\u884c\u6b64\u8868\u5355\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u6211\u4eec\u901a\u8fc7\uff1a",(0,d.jsx)(n.code,{children:"validateAllChildForm"})," \u5c31\u9a8c\u8bc1\u5b8c\u4e86\u6240\u6709\u5b50\u8868\u5355\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u6570\u636e\u56de\u586b",children:"\u6570\u636e\u56de\u586b"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:"export const childFormField = nodeUtil.createChildForm<ChildFormState>(\n  'cc',\n  {\n    value: {\n      childForms: [{ id: defaultId, label: '' }],\n      choosedItemId: defaultId,\n    },\n    ...,\n    preprocess({ defaultValues }) {\n      const acts = defaultValues.activities || [];\n      const defaultActId1 = generateId(prefix);\n      return {\n        childForms: acts.map((e, idx: number) => ({\n          label: `\u5b50\u6d3b\u52a8${idx}`,\n          id: idx === 0 ? defaultActId1 : generateId(prefix),\n        })),\n        choosedItemId: defaultActId1,\n      };\n    },\n  })\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u56de\u586b\u7684\u65f6\u5019\uff0c\u6211\u4eec\u53ea\u662f\u589e\u52a0\u4e86\uff1a",(0,d.jsx)(n.code,{children:"preprocess"})," \u65b9\u6cd5\uff0c\u5c06\u5b50\u8868\u5355\u7684\u6570\u91cf\u548c ID \u57fa\u672c\u4fe1\u606f\u505a\u4e86\u5904\u7406\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u63a5\u7740\uff0c\u6211\u4eec\u5728\uff1a",(0,d.jsx)(n.code,{children:"childFormContaienr"})," \u5b50\u8868\u5355\u5904\uff0c\u83b7\u53d6\u76f8\u5e94\u7684\u9ed8\u8ba4\u503c\u5373\u53ef\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:" childFormContainer: ({\n      frameworkProps: { store },\n      ...\n    }) => {\n      const { childForms, choosedItemId } = value;\n      const defaultValues = store.getDefaultValues();\n      return (\n        <Tabs\n          ...\n          items={childForms.map((e, idx) => {\n            const defaultValue = defaultValues?.activities?.[idx];\n            return {\n              label: `\u5b50\u8868\u5355${e.id}`,\n              id: e.id,\n              key: e.id,\n              children: (\n                <EasyPage<ChildFormState>\n                  {...childFormInfo}\n                  defaultValues={defaultValue}\n                  components={DEFAULT_COMPONENTS}\n                  setFormUtil={(ref) => setChildFormRef(ref, e.id)}\n                />\n              ),\n            }\n          })}\n        ></Tabs>\n      );\n    },\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u6211\u4eec\u901a\u8fc7\uff1a",(0,d.jsx)(n.code,{children:"framworkprops.store"})," \u83b7\u53d6\u5168\u90e8\u9ed8\u8ba4\u503c\uff1a",(0,d.jsx)(n.code,{children:"store.getDefaultValues()"})]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u6211\u4eec\u6839\u636e\u63d0\u4ea4\u65f6\u7684\u6570\u636e key\uff1a",(0,d.jsx)(n.code,{children:"activities"})," \u548c\u8868\u5355 idx \u83b7\u5f97\u5bf9\u5e94\u8868\u5355\u9ed8\u8ba4\u503c\uff1a\n",(0,d.jsx)(n.code,{children:"const defaultValue = defaultValues?.activities?.[idx];"})]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6700\u540e\u653e\u5230 EasyPage \u4e0a\u5373\u53ef\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-tsx",children:'<EasyPage<ChildFormState>\n    {...childFormInfo}\n    defaultValues={defaultValue}\n    pageType="form"\n    components={DEFAULT_COMPONENTS}\n    setFormUtil={(ref) => setChildFormRef(ref, e.id)}\n  />\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"demo",children:"Demo"}),"\n","\n",(0,d.jsx)(s.A,{})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},3533:(e,n,l)=>{l.d(n,{K:()=>o});var d=l(8981),i=(l(758),l(6137)),s=l(6070);const r=d.nodeUtil.createCustomNode("validate",(e=>{let{frameworkProps:{getFormUtil:n}}=e;return(0,s.jsx)(i.Ay,{onClick:async()=>{const e=n?.();try{await(e?.validateAll())}catch(l){console.log("\u9a8c\u8bc1\u7ed3\u679c:",l)}},children:"\u9a8c\u8bc1"})}),{value:""}),t=d.nodeUtil.createCustomNode("submit",(e=>{let{frameworkProps:{getFormUtil:n}}=e;return(0,s.jsx)(i.Ay,{type:"primary",style:{marginLeft:12},onClick:()=>{const e=n?.();console.log("\u8868\u5355\u503c\uff1a",e?.getFormData())},children:"\u8868\u5355\u503c"})}),{value:""}),o=d.nodeUtil.createContainer("tool-bar",(e=>{let{children:n}=e;return(0,s.jsx)("div",{className:"flex flex-row",style:{marginBottom:12},children:n})})).appendChildren([r,t])},2708:(e,n,l)=>{l.d(n,{A:()=>f});var d=l(8981),i=(l(758),l(3533));const s=d.nodeUtil.createField("test1","\u6d4b\u8bd51",{}),r=new d.PageUtil({pageId:"xx"});r.addFields([s]);const t=r.getPageInfo();var o=l(9449),a=l(6070);const c="child-form",h=(0,d.generateId)(c),m=d.nodeUtil.createChildForm("cc",{value:{childForms:[{id:h,label:""}],choosedItemId:h,formUtils:{}},preprocess(e){let{defaultValues:n}=e;const l=n.activities||[],i=(0,d.generateId)(c);return{childForms:l.map(((e,n)=>({label:e.name,id:0===n?i:(0,d.generateId)(c)}))),choosedItemId:i,formUtils:{}}},postprocess(e){let{value:n}=e;const{formUtils:l,childForms:d}=n;return console.log("postprocess formUtils:",n),{activities:d.map((e=>{const n=l?.[e.id],d=n?.getFormData();return d}))}},validate:async e=>{let{value:n}=e;return{success:!(await(0,d.validateAllChildForm)(n)).find((e=>Boolean(e.errors)))}},childFormContainer:e=>{let{setChildFormRef:n,onAdd:l,onRemove:i,value:s,frameworkProps:{store:r},onChange:c}=e;const{childForms:h,choosedItemId:m}=s,u=r.getDefaultValues();return(0,a.jsx)(o.A,{onEdit:(e,n)=>{"add"===n?l():"remove"===n&&i(e)},type:"editable-card",hideAdd:!1,activeKey:m,onChange:e=>{c({...s||{},choosedItemId:e})},items:h.map(((e,l)=>{const i=u?.activities?.[l];return{label:e.label||`\u5b50\u8868\u5355${e.id}`,id:e.id,key:e.id,children:(0,a.jsx)(d.EasyPage,{...t,defaultValues:i,components:d.DEFAULT_COMPONENTS,pageType:"form",setFormUtil:l=>n(l,e.id)})}}))})}},{childForm:{childFormIdPrefix:c}}),u=d.nodeUtil.createField("name","\u59d3\u540d",{value:""}),x=new d.PageUtil({pageId:"form-page"});x.addFields([u,m,i.K]);const p=x.getPageInfo(),f=()=>(0,a.jsx)("div",{className:"flex flex-col",children:(0,a.jsx)(d.EasyPage,{...p,defaultValues:{activities:[{name:"\u9ed8\u8ba4 tab"}]},components:{...d.DEFAULT_COMPONENTS,...d.EXTRA_COMPONENTS},pageType:"form"})})}}]);