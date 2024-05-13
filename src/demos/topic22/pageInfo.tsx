import { PageUtil } from '@easy-page/antd-ui';
import { opt1 } from './opt1';
import { toolbar } from '../common/fields/toolbar';
import { opt2 } from './opt2';

const pu = new PageUtil({ pageId: 'form-page' });
/** 添加 opt1 字段到页面结构中 * */
pu.addFields([opt1, opt2, toolbar]);

/** 返回页面结构数据 * */
export const pageInfo = pu.getPageInfo();
