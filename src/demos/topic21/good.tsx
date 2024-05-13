import {
  Empty,
  SelectEffectType,
  SelectState,
  UI_COMPONENTS,
  nodeUtil,
  searchAction,
} from '@easy-page/antd-ui';
import type { DefaultOptionType } from 'antd/es/select';

const sleep = (timeout: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, timeout);
  });
};

const searchById = async (
  id: number
): Promise<DefaultOptionType & { mark: string }> => {
  await sleep(1000);
  return { label: `选项${id}`, value: id, mark: `这是选项${id}的描述` };
};

const OPTIONS = new Array(100).fill({}).map((e, idx) => ({
  label: `选项${idx}`,
  value: idx,
  mark: `这是选项${idx}的描述`,
}));

const searchByKeywords = async (keyword?: string) => {
  console.log('searchByKeywords:', keyword);
  await sleep(1000);
  if (!keyword) {
    return OPTIONS;
  }
  return OPTIONS.filter((e) => e.label.includes(keyword));
};

type GoodState = SelectState<number, { mark: string }>;

export const goods = nodeUtil.createField<
  GoodState,
  { goods: GoodState },
  Empty,
  SelectEffectType<{ mark: string }>
>(
  'goods',
  '商品',
  {
    value: { choosed: 1 },
    required: true,
    mode: 'single',
    actions: [
      {
        effectedKeys: ['goods'],
        /** 初始化执行 */
        initRun: true,
        /** 初始化查询选中数据 */
        action: async ({ value, initRun }) => {
          /** 只有初始化时，或者存在关键词时才做查询 **/
          if (initRun || value.keyword !== undefined) {
            /** 查询选项 */
            const options = (await searchByKeywords(value.keyword)) || [];
            const hasChoosed = options.find((x) => x.value === value.choosed);
            if (value.choosed && !hasChoosed) {
              /** 选择的选项不在查询的列表中，单独搜索选中选项 */
              const choosed = await searchById(value.choosed);
              return {
                fieldValue: {
                  ...value,
                  options: [choosed, ...options],
                  keyword: undefined,
                },
              };
            }
            return { fieldValue: { ...value, options, keyword: undefined } };
          }
          return {};
        },
      },
    ],
  },
  {
    ui: UI_COMPONENTS.SELECT,
    select: {
      showSearch: true,
      notFoundContent: null,
      filterOption: false,
    },
  }
);
