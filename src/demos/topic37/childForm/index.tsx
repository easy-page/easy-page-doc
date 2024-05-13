import React from 'react';
import {
  nodeUtil,
  EasyPage,
  generateId,
  DEFAULT_COMPONENTS,
} from '@easy-page/antd-ui';
import { ChildFormState, validateAllChildForm } from '@easy-page/antd-ui';
import { childFormInfo } from './pageInfo';
import { Tabs } from 'antd';

const prefix = 'child-form';
const defaultId = generateId(prefix);

export const childFormField = nodeUtil.createChildForm<ChildFormState>(
  'cc',
  {
    value: {
      childForms: [{ id: defaultId, label: '' }],
      choosedItemId: defaultId,
      formUtils: {},
    },
    preprocess({ defaultValues }) {
      const acts = defaultValues.activities || [];
      const defaultActId1 = generateId(prefix);
      return {
        childForms: acts.map((e, idx: number) => {
          return {
            label: e.name,
            id: idx === 0 ? defaultActId1 : generateId(prefix),
          };
        }),
        choosedItemId: defaultActId1,
        formUtils: {},
      };
    },
    postprocess({ value }) {
      const { formUtils, childForms } = value;
      console.log('postprocess formUtils:', value);
      return {
        activities: childForms.map((e) => {
          const util = formUtils?.[e.id];
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
    childFormContainer: ({
      setChildFormRef,
      onAdd,
      onRemove,
      value,
      frameworkProps: { store },
      onChange,
    }) => {
      const { childForms, choosedItemId } = value;
      const defaultValues = store.getDefaultValues();
      return (
        <Tabs
          onEdit={(e, action) => {
            if (action === 'add') {
              onAdd();
            } else if (action === 'remove') {
              onRemove(e as string);
            }
          }}
          type="editable-card"
          hideAdd={false}
          activeKey={choosedItemId}
          onChange={(val) => {
            onChange({
              ...(value || ({} as ChildFormState)),
              choosedItemId: val,
            });
          }}
          items={childForms.map((e, idx) => {
            const defaultValue = defaultValues?.activities?.[idx];
            return {
              label: e.label || `子表单${e.id}`,
              id: e.id,
              key: e.id,
              children: (
                <EasyPage<ChildFormState>
                  {...childFormInfo}
                  defaultValues={defaultValue}
                  components={DEFAULT_COMPONENTS}
                  pageType="form"
                  setFormUtil={(ref) => setChildFormRef(ref, e.id)}
                />
              ),
            };
          })}
        ></Tabs>
      );
    },
  },
  {
    childForm: {
      childFormIdPrefix: prefix,
    },
  }
);
