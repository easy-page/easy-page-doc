import { PageUtil } from '@easy-page/antd-ui';
import { switchTest } from './switch';
import { toolbar } from '../common/fields/toolbar';

const pu = new PageUtil({ pageId: 'form-page' });
/** 添加 goods 字段到页面结构中 * */
pu.addFields([switchTest, toolbar]);

/** 返回页面结构数据 * */
export const pageInfo = pu.getPageInfo();
