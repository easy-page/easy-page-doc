import { Empty, PageUtil, nodeUtil } from '@easy-page/antd-ui';
const pageUtil = new PageUtil({
  pageId: 'demo1',
  rootUIConfig: {
    form: {
      className: 'p-4 border border-solid mb-4',
    },
  },
});

pageUtil.addFields([
  nodeUtil.createField<string, Empty, { name: string }>('test', '测试', {
    value: '',
  }),
]);

export const childFormInfo = pageUtil.getPageInfo();
console.log('childFormInfo:', childFormInfo);
