import {
  ChildFormState,
  DEFAULT_COMPONENTS,
  EasyPage,
  generateId,
  nodeUtil,
  validateAllChildForm,
} from '@easy-page/antd-ui';
import { Tabs } from 'antd';
import { PageState } from '../../interface';
import { childFormInfo } from './pageInfo';
import React from 'react';

const TAB_PREFIX = 'child-form';
const defaultActId = generateId(TAB_PREFIX);
export const childForm = nodeUtil.createChildForm<
  ChildFormState,
  PageState,
  { actId: string }
>(
  'child-form',
  {
    childFormContext: ['name', 'actId'],
    postprocess({ value }) {
      const { formUtils, childForms } = value;

      return {
        activities: childForms.map((e) => {
          const util = formUtils?.[e.id];
          console.log('eee:', formUtils, e.id, util);
          const data = util?.getFormData();
          return data;
        }),
      };
    },
    validate: async ({ value }) => {
      const results = await validateAllChildForm(value);
      const hasError = results.find((e) => Boolean(e.errors));
      return { success: !hasError };
    },
    value: {
      childForms: [
        {
          label: '',
          id: defaultActId,
        },
      ],
      choosedItemId: defaultActId,
    },
    childFormContainer: ({
      value,
      onChange,
      onRemove,
      onAdd,
      childFormContextData,
      setChildFormRef,
      onChildFormChanged,
    }) => {
      console.log('childFormContextData:', childFormContextData);
      const { childForms = [], choosedItemId } = value || {};
      return (
        <div>
          <Tabs
            activeKey={choosedItemId}
            destroyInactiveTabPane={false}
            type="editable-card"
            onChange={(id) =>
              onChange({
                ...value,
                choosedItemId: id,
              })
            }
            onEdit={(e, action) => {
              if (action === 'add') {
                onAdd();
              } else if (action === 'remove') {
                onRemove(e as string);
              }
            }}
            items={childForms.map((e, idx) => ({
              id: e.id,
              icon: e.icon,
              key: e.id,
              label: e.label || `子活动${idx + 1}`,
              children: (
                <EasyPage
                  components={DEFAULT_COMPONENTS}
                  pageKey={e.id}
                  context={childFormContextData}
                  pageType="form"
                  onChange={onChildFormChanged}
                  setFormUtil={(ref) => setChildFormRef(ref, e.id)}
                  {...childFormInfo}
                />
              ),
            }))}
          ></Tabs>
        </div>
      );
    },
  },
  {
    childForm: {
      childFormIdPrefix: TAB_PREFIX,
    },
  }
);
