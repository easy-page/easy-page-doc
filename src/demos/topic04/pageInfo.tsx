import { PageUtil } from '@easy-page/antd-ui';
import { toolbar } from '../common/fields/toolbar';
import { name } from './name';
import { newAge } from './newAge';

const pu = new PageUtil({ pageId: 'form-page' });
/** 添加 name 字段到页面结构中 * */
pu.addFields([name, newAge, toolbar]);

/** 返回页面结构数据 * */
export const pageInfo = pu.getPageInfo();
