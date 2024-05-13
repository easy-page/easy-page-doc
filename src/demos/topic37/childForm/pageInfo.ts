import { PageUtil } from '@easy-page/antd-ui';
import { testChild } from './fields';
const pu = new PageUtil({ pageId: 'xx' })

pu.addFields([testChild]);

export const childFormInfo = pu.getPageInfo()
