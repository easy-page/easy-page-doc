import { PageUtil } from '@easy-page/antd-ui';
import { childForm } from './common/fields/childForm';
import { desc } from './common/fields/desc';
import { friend } from './common/fields/friend';
import { hobby } from './common/fields/hobby';
import { name } from './common/fields/name';
import { sex } from './common/fields/sex';
import { myswitch } from './common/fields/switch';
import { timeRange } from './common/fields/timeRange';
import { date } from './common/fields/time';
import { toolbar } from '../common/fields/toolbar';

const pageUtil = new PageUtil({
  pageId: 'demo1',
});

pageUtil.addFields([
  name,
  sex,
  hobby,
  friend,
  desc,
  date,
  timeRange,
  myswitch,
  childForm,

  toolbar,
]);

export const pageInfo = pageUtil.getPageInfo();
console.log('pageInfo:', pageInfo);
