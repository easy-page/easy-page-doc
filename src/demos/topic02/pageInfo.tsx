import { PageUtil } from '@easy-page/antd-ui';
import { sex } from './sex';

const pu = new PageUtil({ pageId: 'form-page' });
/** 添加 name 字段到页面结构中 * */
pu.addFields([sex]);

/** 返回页面结构数据 * */
export const pageInfo = pu.getPageInfo();
